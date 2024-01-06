import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <Preloader />
      <MoviesCardList isSaved={false} />
      <button className="movies__button-more">Ещё</button>
    </main>
  );
}

export default Movies;
