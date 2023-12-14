import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation ({onNavigation}) {
  return (
    <div className="navigation">
    <NavLink
      className={({ isActive }) =>
        `navigation__link ${
          isActive ? "navigation__link_active" : ""
        } navigation__link_type_main`
      }
      to="/"
      onClick={onNavigation}
    >
      Главная
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        `navigation__link ${isActive ? "navigation__link_active" : ""}`
      }
      to="/movies"
      onClick={onNavigation}
    >
      Фильмы
    </NavLink>
    <NavLink
      className={({ isActive }) =>
        `navigation__link ${isActive ? "navigation__link_active" : ""}`
      }
      to="/saved-movies"
      onClick={onNavigation}
    >
      Сохранённые фильмы
    </NavLink>
  </div>
  )
}

export default Navigation;
