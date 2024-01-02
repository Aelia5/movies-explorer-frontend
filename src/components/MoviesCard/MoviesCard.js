import "./MoviesCard.css";
import React from "react";

function MoviesCard({ movieImage }) {
  const [isLiked, setIsLiked] = React.useState(false);

  function toggleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <li className="movies-card">
      <img
        className="movies-card__image"
        alt="Тестовое фото"
        src={movieImage}
      ></img>
      <h2 className="movies-card__title">33 слова о дизайне</h2>
      <button
        className={`movies-card__like-button ${
          isLiked ? "movies-card__like-button_active" : ""
        }`}
        onClick={toggleLike}
      ></button>
      <p className="movies-card__length">1ч42м</p>
    </li>
  );
}

export default MoviesCard;
