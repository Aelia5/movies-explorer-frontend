import "./Login.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../Validation/Validation";

function Login({ handleLoginSubmit, apiError, changeApiError, blocked }) {
  const navigate = useNavigate();

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      handleLoginSubmit(values, resetForm);
    }
  }

  React.useEffect(() => {
    if (apiError) {
      changeApiError("");
    }
  }, [values]);

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
            value={values.email || ""}
            required
            disabled={blocked}
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
            value={values.password || ""}
            required
            disabled={blocked}
          ></input>
          <p className="form__input-error">{errors.password}</p>
          <p className="api-error login__api-error">{apiError}</p>
          <button
            className="login__submit-button submit-button"
            disabled={!isValid || apiError || blocked}
          >
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
