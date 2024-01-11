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
  const [loggedIn, setLoggedIn] = React.useState(true);
  function logOut() {
    setLoggedIn(false);
  }

  const [apiError, setApiError] = React.useState("");
  function changeApiError(errorMessage) {

    setApiError(errorMessage);
      }

  const navigate = useNavigate();

  const { register } = MainApi();

  function handleRegistrationSubmit(data, resetForm) {
    register(data)
      .then((res) => {
        resetForm();

        setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        if (err === 409) {
          setApiError("Пользователь с таким email уже существует.");
        } else {
          setApiError("При регистрации пользователя произошла ошибка");
        };


      });
  }

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
                <Profile onExit={logOut} />
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
              <Login />
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
              <Register handleRegistrationSubmit={handleRegistrationSubmit} apiError={apiError} changeApiError={changeApiError}/>
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
