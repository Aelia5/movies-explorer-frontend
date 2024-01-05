import "./Register.css";
import "../../blocks/logo.css";
import "../../blocks/form.css";
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = React.useState("Виталий");
  function handleNameChange(e) {
    setName(e.target.value);
  }

  const [email, setEmail] = React.useState("pochta@yandex.ru");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const [password, setPassword] = React.useState("pochta@yandex.ru");
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <section className="register">
      <div className="logo register__logo"></div>
      <h2 className="form__title register__title">Добро пожаловать!</h2>
      <form className="form">
        <label for="name" className="form__label">
          Имя
        </label>
        <input
          className="form__input"
          type="text"
          placeholder="Введите ваше имя"
          id="name"
          name="name"
          minLength="2"
          maxLength="30"
          onChange={handleNameChange}
          required
        ></input>
        <p className="form__input-error">Что-то пошло не так...</p>
        <label for="email" className="form__label">
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
        <label for="password" className="form__label">
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
        <p className="form__input-error form__input-error_visible">
          Что-то пошло не так...
        </p>
        <p className="form__api-error register__api-error">
          При регистрации пользователя произошла ошибка.
        </p>
        <button className="form__submit-button form__submit-button_active register__submit-button">
          Зарегистрироваться
        </button>
      </form>
      <p className="form__option">
        Уже зарегистрированы?{" "}
        <Link className="form__link" to="/signin">
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;
