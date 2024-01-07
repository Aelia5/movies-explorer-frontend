import "./Header.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, className }) {
  const navigate = useNavigate();

  const [menuOpened, setMenuOpened] = React.useState(false);

  function openBurgerMenu() {
    setMenuOpened(true);
  }

  function closeBurgerMenu() {
    setMenuOpened(false);
  }

  return (
    <header className={`header ${className}`}>
      <button
        className="logo"
        onClick={() => navigate("/", { replace: true })}
      ></button>
      {loggedIn ? (
        <div className={`${menuOpened && "header__overlay"}`}>
          <div
            className={`header__menu header__menu_authorized ${
              menuOpened ? "header__menu_opened" : ""
            }`}
          >
            <button
              className="header__close-button"
              onClick={closeBurgerMenu}
            ></button>
            <Navigation onNavigation={closeBurgerMenu} />
            <Link
              className="header__account"
              to="/profile"
              onClick={closeBurgerMenu}
            >
              <p className="header__link">Аккаунт</p>
              <div className="header__profile-button" />
            </Link>
          </div>
          <button
            className={`header__burger-menu ${
              menuOpened ? "header__burger-menu_hidden" : ""
            }`}
            onClick={openBurgerMenu}
          ></button>
        </div>
      ) : (
        <div className="header__menu header__menu_unauthorized">
          <Link className="header__link header__link_type_account" to="/signup">
            Регистрация
          </Link>
          <Link to="/signin">
            <button className="header__login-button">Войти</button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
