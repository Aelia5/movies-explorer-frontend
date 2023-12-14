import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header className="header_type_landing" loggedIn={loggedIn}/>} />
        <Route path="/movies" element={<Header loggedIn={loggedIn}/>} />
        <Route path="/saved-movies" element={<Header loggedIn={loggedIn} />} />
        <Route path="/profile" element={<Header loggedIn={loggedIn} />} />
        <Route path="/signin" element={<div></div>} />
        <Route path="/signup" element={<div />} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
