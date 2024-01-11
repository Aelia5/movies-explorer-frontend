import "./Register.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../Validation/Validation";

function Register({ handleRegistrationSubmit, apiError, changeApiError }) {
  const navigate = useNavigate();

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      handleRegistrationSubmit(values, resetForm);
    }
  }

  React.useEffect(() => {
    if (apiError) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [apiError]);

  React.useEffect(() => {
    if (apiError) {
      changeApiError("");
    }
  }, [values]);

  return (
    <main className="register">
      <section className="register__container">
        <button
          className="logo register__logo"
          onClick={() => navigate("/", { replace: true })}
        ></button>

        <h1 className="form-title register__title">Добро пожаловать!</h1>
        <form className="form" onSubmit={handleSubmit} noValidate>
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
            pattern="[A-Za-zА-Яа-яЁё\s\-]+$"
            onChange={handleChange}
            title="Только кириллица, латиница, дефисы и пробелы"
            value={values.name || ""}
            required
          ></input>
          <p className="form__input-error">{errors.name}</p>
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
            value={values.email || ""}
            required
          ></input>
          <p className="form__input-error">{errors.email}</p>
          <label htmlFor="password" className="form__label">
            Пароль
          </label>
          <input
            className="form__input"
            type="password"
            placeholder="Введите ваш пароль"
            id="password"
            name="password"
            minLength="7"
            onChange={handleChange}
            value={values.password || ""}
            required
          ></input>
          <p className="form__input-error">{errors.password}</p>
          <p className="api-error register__api-error">{apiError}</p>
          <button
            type="submit"
            className="register__submit-button submit-button"
            disabled={!isValid || buttonDisabled}
          >
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
