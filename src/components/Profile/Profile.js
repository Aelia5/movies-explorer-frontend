import "./Profile.css";
import React from "react";
import { useFormWithValidation } from "../Validation/Validation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({
  onExit,
  apiError,
  changeApiError,
  handleEditProfileSubmit,
  blocked,
  editSuccess,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const [isNew, setIsNew] = React.useState(false);

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const [isEdited, setIsEdited] = React.useState(false);
  function openEdit() {
    setIsEdited(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      handleEditProfileSubmit(values, resetForm, setIsEdited);
    }
  }

  React.useEffect(() => {
    if (
      values.name !== currentUser.name ||
      values.email !== currentUser.email
    ) {
      setIsNew(true);
    } else setIsNew(false);
  }, [values, currentUser]);

  React.useEffect(() => {
     resetForm(currentUser, {}, false);
  }, []);

  React.useEffect(() => {
    if (apiError) {
      changeApiError("");
    }
  }, [values]);

  return (
    <main>
      <section className="profile">
        <h1 className="form-title profile__title">
          {editSuccess && !isEdited
            ? `Изменения успешно сохранены!`
            : `Привет, ${currentUser.name}!`}
        </h1>
        {isEdited ? (
          <form className="profile__form" onSubmit={handleSubmit} noValidate>
            <label className="profile__label" htmlFor="name">
              Имя
              <input
                className="profile__input"
                type="text"
                placeholder="Имя"
                id="name"
                name="name"
                value={values.name}
                minLength="2"
                maxLength="30"
                pattern="[A-Za-zА-Яа-яЁё\s\-]+$"
                title="Только кириллица, латиница, дефисы и пробелы"
                onChange={handleChange}
                required
                disabled={blocked}
              ></input>
            </label>
            <p className="form__input-error">{errors.name}</p>
            <label className="profile__label" htmlFor="email">
              Почта
              <input
                className="profile__input"
                type="email"
                placeholder="Почта"
                id="email"
                name="email"
                pattern="[A-Za-z0-9\._%+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,4}$"
                title="Введите корректный email"
                value={values.email}
                required
                onChange={handleChange}
                disabled={blocked}
              ></input>
            </label>
            <p className="form__input-error">{errors.email}</p>
            <p className="api-error profile__api-error">{apiError}</p>
            <button
              className="submit-button"
              disabled={!isValid || !isNew || apiError || blocked}
            >
              Сохранить
            </button>
          </form>
        ) : (
          <div className="profile__form">
            <div className="profile__label profile__label_type_inedited">
              Имя
              <span className="profile__input">{currentUser.name}</span>
            </div>
            <div className="profile__label profile__label_type_inedited">
              E-mail
              <span className="profile__input">{currentUser.email}</span>
            </div>
            <div className="profile__options">
              <button className="profile__option" onClick={openEdit}>
                Редактировать
              </button>
              <button
                className="profile__option profile__option_type_exit"
                onClick={onExit}
              >
                Выйти из аккаунта
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Profile;
