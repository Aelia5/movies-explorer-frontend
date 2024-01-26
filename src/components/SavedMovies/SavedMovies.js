import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ savedMovies, apiError, changeApiError, removeMovie }) {
  return (
    <main className="saved-movies">
      <SearchForm
        apiError={apiError}
        changeApiError={changeApiError}
        savedMovies={savedMovies}
      />
      <MoviesCardList
        isSaved={true}
        savedMovies={savedMovies}
        removeMovie={removeMovie}
      />
    </main>
  );
}

export default SavedMovies;
