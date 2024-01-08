import "./Register.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

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
    <main className="register">
      <section className="register__container">
        <button
          className="logo register__logo"
          onClick={() => navigate("/", { replace: true })}
        ></button>

        <h1 className="form-title register__title">Добро пожаловать!</h1>
        <form className="form">
          <label htmlFor="name" className="form__label">
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
          <p className="form__input-error form__input-error_visible">
            Что-то пошло не так...
          </p>
          <p className="api-error register__api-error">
            При регистрации пользователя произошла ошибка.
          </p>
          <button className="submit-button submit-button_active register__submit-button">
            Зарегистрироваться
          </button>
        </form>
        <p className="option">
          Уже зарегистрированы?{" "}
          <Link className="option__link" to="/signin">
            Войти
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
