import "./App.css";
import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import MainApi from "../../utils/MainApi";
import MoviesApi from "../../utils/MoviesApi";

function App() {
  const navigate = useNavigate();

  const {
    register,
    login,
    getUser,
    editProfileData,
    getSavedMovies,
    saveMovie,
    deleteMovie,
  } = MainApi();
  const { getMovies } = MoviesApi();

  //Стейты

  const [currentUser, setCurrentUser] = React.useState({});

  const [loggedIn, setLoggedIn] = React.useState(
    JSON.parse(localStorage.getItem("loggedIn")) || false
  );

  const [checkboxOn, setCheckboxOn] = React.useState(
    JSON.parse(localStorage.getItem("checkboxOn")) || false
  );

  function handleCheckboxClick() {
    setCheckboxOn(!checkboxOn);
  }

  const [searchResults, setSearchResults] = React.useState(
    JSON.parse(localStorage.getItem("searchResults")) || []
  );

  const [savedMovies, setSavedMovies] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);
  function switchPreloader(value) {
    setIsLoading(value);
  }

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

  const [searchError, setSearchError] = React.useState("");
  function changeSearchError(errorMessage) {
    setSearchError(errorMessage);
  }

  const [savedError, setSavedError] = React.useState("");
  function changeSavedError(errorMessage) {
    setSavedError(errorMessage);
  }

  // Функции управления профилем

  function handleRegistrationSubmit(data, resetForm) {
    register(data)
      .then(() => {
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
        changeProfileError(err);
      });
  }

  function signOut() {
    const keysToRemove = ["token", "query", "checkboxOn", "searchResults"];
    keysToRemove.forEach((key) => {
      localStorage.removeItem(key);
    });

    setCurrentUser({});
    setLoggedIn(false);
    setCheckboxOn(false);
    setSearchResults([]);

    navigate("/", { replace: true });
  }

  function authorize(userData) {
    setCurrentUser(userData);
    setLoggedIn(true);
  }

  //Функции управления карточками

  function handleSearchSubmit(query) {
    getMovies()
      .then((cards) => {
        return cards.filter((card) => {
          const values = [card.nameEN, card.nameRU];
          return values.some((value) => {
            return value.toLowerCase().includes(query.toLowerCase());
          });
        });
      })
      .then((results) => {
        setSearchResults(results);
        if (results.length === 0) {
          setSearchError("Ничего не найдено");
        }
      })
      .catch((err) => {
        if (typeof err === "string") {
          setSearchError(err);
        } else console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function addMovie(movie) {
    saveMovie(movie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch((err) => {
        changeSearchError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      });
  }

  function removeMovie(movie) {
    deleteMovie(movie)
      .then((movie) => {
        const updatedMovies = savedMovies.filter((item) => {
          return item._id !== movie._id;
        });
        setSavedMovies(updatedMovies);
      })
      .catch(() => {
        changeSearchError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      });
  }

  // Эффекты

  React.useEffect(() => {
    getSavedMovies()
      .then((movies) => {
        const usersMovies = movies.filter((movie) => {
          return movie.owner._id === currentUser._id;
        });
        setSavedMovies(usersMovies);
      })
      .catch(() => {
        changeSavedError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      });
  }, [currentUser]);

  React.useEffect(() => {
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  }, [loggedIn]);

  React.useEffect(() => {
    localStorage.setItem("checkboxOn", JSON.stringify(checkboxOn));
  }, [checkboxOn]);

  React.useEffect(() => {
    localStorage.setItem("searchResults", JSON.stringify(searchResults));
  }, [searchResults]);

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
    <CurrentUserContext.Provider value={currentUser}>
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
              <>
                <ProtectedRoute
                  element={Header}
                  loggedIn={loggedIn}
                  className=""
                />
                <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                  handleSearchSubmit={handleSearchSubmit}
                  apiError={searchError}
                  changeApiError={changeSearchError}
                  searchResults={searchResults}
                  isLoading={isLoading}
                  switchPreloader={switchPreloader}
                  handleCheckboxClick={handleCheckboxClick}
                  checkboxOn={checkboxOn}
                  addMovie={addMovie}
                  removeMovie={removeMovie}
                  savedMovies={savedMovies}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <ProtectedRoute
                  element={Header}
                  loggedIn={loggedIn}
                  className=""
                />
                <ProtectedRoute
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  savedMovies={savedMovies}
                  apiError={savedError}
                  changeApiError={changeSavedError}
                  removeMovie={removeMovie}
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <ProtectedRoute
                  element={Header}
                  loggedIn={loggedIn}
                  className=""
                />
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  onExit={signOut}
                  handleEditProfileSubmit={handleEditProfileSubmit}
                  apiError={profileError}
                  changeApiError={changeProfileError}
                />
                <Footer />
              </>
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
    </CurrentUserContext.Provider>
  );
}

export default App;
