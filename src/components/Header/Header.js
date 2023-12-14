import React from "react";
import "./Header.css";
import "../Navigation/Navigation"
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, className }) {
  const [menuOpened, setMenuOpened] = React.useState(false);

  function toggleBurgerMenu() {
    setMenuOpened(!menuOpened);
  }

  return (
    <div className={`header ${className}`}>
      <Link to="/">
        <button className="header__logo"></button>
      </Link>
      {loggedIn ? (
        <>
          {" "}
          <div
            className={`header__menu header__menu_authorized ${
              menuOpened ? "header__menu_opened" : ""
            }`}
          >
            <button
              className="header__close-button"
              onClick={toggleBurgerMenu}
            ></button>
            <Navigation onNavigation={toggleBurgerMenu} />
            <Link
              className="header__account"
              to="/profile"
              onClick={toggleBurgerMenu}
            >
              <p className="header__link">Аккаунт</p>
              <button class="header__profile-button" />
            </Link>
          </div>
          <button
            className={`header__burger-menu ${
              menuOpened ? "header__burger-menu_hidden" : ""
            }`}
            onClick={toggleBurgerMenu}
          ></button>
        </>
      ) : (
        <div className="header__menu header__menu_unauthorized">
          <Link className="header__link header__link_type_account" to="/signup">Регистрация</Link>
          <Link to="/signin">
            <button className="header__login-button">Войти</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
