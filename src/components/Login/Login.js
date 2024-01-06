import "./Login.css";
import "../../blocks/logo.css";
import "../../blocks/form.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("pochta@yandex.ru");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const [password, setPassword] = React.useState("pochta@yandex.ru");
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <main className="login">
      <button
        className="logo login__logo"
        onClick={() => navigate("/", { replace: true })}
      ></button>
      <h2 className="form__title login__title">Рады видеть!</h2>
      <form className="form">
        <label htmlFor="email" className="form__label">
          E-mail
        </label>
        <input
          className="form__input"
          type="email"
          placeholder="Введите вашу электронную почту"
          id="email"
          name="email"
          onChange={handleEmailChange}
          required
        ></input>
        <p className="form__input-error">Что-то пошло не так...</p>
        <label htmlFor="password" className="form__label">
          Пароль
        </label>
        <input
          className="form__input form__input_invalid"
          type="password"
          placeholder="Введите ваш пароль"
          id="password"
          name="password"
          minLength="7"
          onChange={handlePasswordChange}
          required
        ></input>
        <p className="form__input-error">Что-то пошло не так...</p>
        <p className="form__api-error login__api-error">
          При авторизации произошла ошибка. Токен не передан или передан не в
          том формате.
        </p>
        <button className="form__submit-button form__submit-button_active login__submit-button">
          Войти
        </button>
      </form>
      <p className="form__option">
        Ещё не зарегистрированы?{" "}
        <Link className="form__link" to="/signup">
          Регистрация
        </Link>
      </p>
    </main>
  );
}

export default Login;
