import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ savedMovies, apiError, changeApiError }) {
  return (
    <main className="saved-movies">
      <SearchForm apiError={apiError} changeApiError={changeApiError} />
      <MoviesCardList isSaved={true} savedMovies={savedMovies} />
    </main>
  );
}

export default SavedMovies;
