import "./MoviesCard.css";
import React from "react";

function MoviesCard({ movieImage, isSaved }) {
  const [isLiked, setIsLiked] = React.useState(false);

  function toggleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <li className="movies-card">
      <img
        className="movies-card__image"
        alt={movieImage.name}
        src={movieImage.link}
      ></img>
      <h2 className="movies-card__title">33 слова о дизайне</h2>
      {isSaved ? (
        <button className="movies-card__button  movies-card__button_type_delete" />
      ) : (
        <button
          className={`movies-card__button ${
            isLiked
              ? "movies-card__button_type_liked"
              : "movies-card__button_type_unliked"
          }`}
          onClick={toggleLike}
        ></button>
      )}

      <p className="movies-card__length">1ч42м</p>
    </li>
  );
}

export default MoviesCard;
