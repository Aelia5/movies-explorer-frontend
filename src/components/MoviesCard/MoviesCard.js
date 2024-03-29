import "./MoviesCard.css";
import React from "react";

function MoviesCard({
  movie,
  isListSaved,
  savedMovies,
  addMovie,
  removeMovie,
}) {
  const [isLiked, setIsLiked] = React.useState(true);

  React.useEffect(() => {
    if (!isListSaved) {
      const savedMoviesIds = savedMovies.map((movie) => {
        return movie.movieId;
      });
      const isSaved = savedMoviesIds.some((movieId) => {
        return movieId === movie.id;
      });
      setIsLiked(isSaved);
    }
  }, [savedMovies, movie.id, isListSaved]);

  function findMovieId(movieId) {
    const searchedMovie = savedMovies.find((movie) => {
      return movie.movieId === movieId;
    });
    return searchedMovie._id;
  }

  function handleLikeClick() {
    if (isListSaved) {
      removeMovie(movie._id);
    } else {
      if (!isLiked) {
        addMovie(movie);
      } else {
        const idToRemove = findMovieId(movie.id);
        removeMovie(idToRemove);
      }
    }
  }

  return (
    <li className="movies-card">
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="movies-card__link"
      >
        <img
          alt={movie.nameRU}
          src={
            isListSaved
              ? movie.image
              : `https://api.nomoreparties.co${movie.image.url}`
          }
          className="movies-card__image"
        ></img>
      </a>
      <h2 className="movies-card__title">{movie.nameRU}</h2>
      {isListSaved ? (
        <button
          className="movies-card__button  movies-card__button_type_delete"
          onClick={handleLikeClick}
        />
      ) : (
        <button
          className={`movies-card__button ${
            isLiked
              ? "movies-card__button_type_liked"
              : "movies-card__button_type_unliked"
          }`}
          onClick={handleLikeClick}
        ></button>
      )}

      <p className="movies-card__length">{`${Math.floor(movie.duration / 60)}ч${
        movie.duration % 60
      }м`}</p>
    </li>
  );
}

export default MoviesCard;
