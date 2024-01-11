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
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [registerError, setRegisterError] = React.useState("");
  function changeRegisterError(errorMessage) {
    setRegisterError(errorMessage);
  }

  const [loginError, setLoginError] = React.useState("");
  function changeLoginError(errorMessage) {
    setLoginError(errorMessage);
  }

  const navigate = useNavigate();

  const { register, login, getUser } = MainApi();

  function handleRegistrationSubmit(data, resetForm) {
    register(data)
      .then((res) => {
        resetForm();

        setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        if (err === 409) {
          setRegisterError("Пользователь с таким email уже существует.");
        } else {
          setRegisterError("При регистрации пользователя произошла ошибка");
        }
      });
  }

  function handleLoginSubmit(data, resetForm) {
    login(data)
      .then((res) => {
        localStorage.setItem("token", res.token);
      })
      .then(() => {
        console.log(localStorage.getItem("token"));
        resetForm();
        authorize();
      })
      .catch((err) => {
        if (err === 401) {
          setLoginError("Вы ввели неправильный логин или пароль");
        } else {
          setLoginError(
            "При авторизации произошла ошибка. Токен не передан или передан не в том формате"
          );
        }
      });
  }

  // Нужно сделать обработку ошибки с некорректным токеном при авторизации - получать данные пользователя
  // сразу после получения токена, а если приходит ошибка, выдавать ошибку

  function signOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/", { replace: true });
  }

  function authorize() {
    setLoggedIn(true);
    navigate("/movies", { replace: true });
  }

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(token)
        .then((res) => {
          return res;
        })
        .then((userData) => {
          authorize();
          console.log(userData);
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
                <Profile onExit={signOut} />
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
