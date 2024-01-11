import "./Login.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../Validation/Validation";

function Login({handleLoginSubmit, apiError}) {
  const navigate = useNavigate();

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

    function handleSubmit(e) {
      e.preventDefault();
      resetForm();
      if (isValid) {
        handleLoginSubmit()
      }
    }

    return (
    <main className="login">
      <section className="login__container">
        <button
          className="logo login__logo"
          onClick={() => navigate("/", { replace: true })}
        ></button>

        <h1 className="form-title login__title">Рады видеть!</h1>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="email" className="form__label">
            E-mail
          </label>
          <input
            className="form__input"
            type="email"
            placeholder="Введите вашу электронную почту"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            required
          ></input>
          <p className="form__input-error">{errors.email}</p>
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
            onChange={handleChange}
            required
          ></input>
          <p className="form__input-error">{errors.password}</p>
          <p className="api-error login__api-error">
            При авторизации произошла ошибка. Токен не передан или передан не в
            том формате.
          </p>
          <button className={`register__submit-button submit-button ${
              isValid && "submit-button_active"
            } `}
            disabled={!isValid}>
            Войти
          </button>
        </form>
        <p className="option">
          Ещё не зарегистрированы?{" "}
          <Link className="option__link" to="/signup">
            Регистрация
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
