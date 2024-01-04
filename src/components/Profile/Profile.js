import "./Profile.css";
import React from "react";

function Profile({ onExit }) {
  const [name, setName] = React.useState("Виталий");
  function handleNameChange(e) {
    setName(e.target.value);
  }

  const [email, setEmail] = React.useState("pochta@yandex.ru");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const [isEdited, setIsEdited] = React.useState(false);
  function openEdit() {
    setIsEdited(true);
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      {isEdited ? (
        <form className="profile__form">
          <label className="profile__label" for="name">
            Имя
            <input
              className="profile__input"
              type="text"
              placeholder="Имя"
              id="name"
              name="name"
              value={name}
              minLength="2"
              maxLength="30"
              onChange={handleNameChange}
              required
            ></input>
          </label>
          <label className="profile__label" for="email">
            Почта
            <input
              className="profile__input"
              type="email"
              placeholder="Почта"
              id="email"
              name="email"
              value={email}
              required
              onChange={handleEmailChange}
            ></input>
          </label>
          <p className="profile__error">
            При обновлении профиля произошла ошибка
          </p>
          <button className="profile__submit-button profile__submit-button_active">
            Сохранить
          </button>
        </form>
      ) : (
        <div className="profile__form">
          <div className="profile__label" for="name">
            Имя
            <span className="profile__input">Виталий</span>
          </div>
          <div className="profile__label" for="email">
            E-mail
            <span className="profile__input">pochta@yandex.ru</span>
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
  );
}

export default Profile;
