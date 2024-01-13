import "./App.css";
import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import MainApi from "../../utils/MainApi";

function App() {
  const navigate = useNavigate();

  const { register, login, getUser, editProfileData } = MainApi();

  const [currentUser, setCurrentUser] = React.useState({});

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [registerError, setRegisterError] = React.useState("");
  function changeRegisterError(errorMessage) {
    setRegisterError(errorMessage);
  }

  const [loginError, setLoginError] = React.useState("");
  function changeLoginError(errorMessage) {
    setLoginError(errorMessage);
  }

  const [profileError, setProfileError] = React.useState("");
  function changeProfileError(errorMessage) {
    setProfileError(errorMessage);
  }

  function handleRegistrationSubmit(data, resetForm) {
    register(data)
      .then((res) => {
        resetForm();

        setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        setRegisterError(err);
      });
  }

  function handleLoginSubmit(data, resetForm) {
    login(data)
      .then((res) => {
        localStorage.setItem("token", res.token);
        getUser(res.token)
          .then((res) => {
            return res;
          })
          .then((userData) => {
            resetForm();
            authorize(userData);
            navigate("/movies", { replace: true });
          });
      })
      .catch((err) => {
        setLoginError(err);
      });
  }

  function handleEditProfileSubmit(data, resetForm, redirect) {
    editProfileData(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .then(() => {
        resetForm(data, {}, false);
        redirect(false);
      })
      .catch((err) => {
        console.log('ошибка')
        changeProfileError(err);
        console.log(profileError)
      });
  }

  function signOut() {
    localStorage.removeItem("token");
    setCurrentUser({});
    setLoggedIn(false);
    navigate("/", { replace: true });
  }

  function authorize(userData) {
    setCurrentUser(userData);
    setLoggedIn(true);
  }

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(token)
        .then((res) => {
          return res;
        })
        .then((userData) => {
          authorize(userData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header className="header_type_landing" loggedIn={loggedIn} />
              <Main></Main>
              <Footer></Footer>
            </>
          }
        />
        <Route
          path="/movies"
          element={
            loggedIn ? (
              <>
                <Header className="" loggedIn={loggedIn} />
                <Movies />
                <Footer />
              </>
            ) : (
              <Navigate to="/signup" replace />
            )
          }
        />
        <Route
          path="/saved-movies"
          element={
            loggedIn ? (
              <>
                <Header className="" loggedIn={loggedIn} />
                <SavedMovies />
                <Footer />
              </>
            ) : (
              <Navigate to="/signup" replace />
            )
          }
        />
        <Route
          path="/profile"
          element={
            loggedIn ? (
              <>
                <Header className="" loggedIn={loggedIn} />
                <Profile
                  user={currentUser}
                  onExit={signOut}
                  handleEditProfileSubmit={handleEditProfileSubmit}
                  apiError={profileError}
                  changeApiError={changeProfileError}
                />
              </>
            ) : (
              <Navigate to="/signup" replace />
            )
          }
        />
        <Route
          path="/signin"
          element={
            loggedIn ? (
              <>
                <Navigate to="/profile" replace />
              </>
            ) : (
              <Login
                handleLoginSubmit={handleLoginSubmit}
                apiError={loginError}
                changeApiError={changeLoginError}
              />
            )
          }
        />
        <Route
          path="/signup"
          element={
            loggedIn ? (
              <>
                <Navigate to="/profile" replace />
              </>
            ) : (
              <Register
                handleRegistrationSubmit={handleRegistrationSubmit}
                apiError={registerError}
                changeApiError={changeRegisterError}
              />
            )
          }
        />
        <Route
          path="/*"
          element={
            <main>
              <section className="not-found">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__text">Страница не найдена</p>
                <button
                  className="not-found__button"
                  onClick={() => navigate(-1)}
                >
                  Назад
                </button>
              </section>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
