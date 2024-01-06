import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList isSaved={true} />
    </div>
  );
}

export default Movies;
