import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);

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
              </>
            ) : (
              <Navigate to="/signup" replace />
            )
          }
        />
        <Route
          path="/saved-movies"
          element={<Header className="" loggedIn={loggedIn} />}
        />
        <Route
          path="/profile"
          element={<Header className="" loggedIn={loggedIn} />}
        />
        <Route path="/signin" element={<div></div>} />
        <Route path="/signup" element={<div />} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
