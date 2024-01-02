import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import movieImageOne from "../../images/movies/movie01.png";
import movieImageTwo from "../../images/movies/movie02.png";
import movieImageThree from "../../images/movies/movie03.png";
import movieImageFour from "../../images/movies/movie04.png";

function MoviesCardList() {
  return (
    <section aria-label="Список фильмов">
      <ul className="movies-cardlist">
        <MoviesCard movieImage={movieImageOne} />
        <MoviesCard movieImage={movieImageTwo} />
        <MoviesCard movieImage={movieImageThree} />
        <MoviesCard movieImage={movieImageFour} />
        <MoviesCard movieImage={movieImageOne} />
        <MoviesCard movieImage={movieImageTwo} />
        <MoviesCard movieImage={movieImageThree} />
        <MoviesCard movieImage={movieImageFour} />
        <MoviesCard movieImage={movieImageOne} />
        <MoviesCard movieImage={movieImageTwo} />
        <MoviesCard movieImage={movieImageThree} />
        <MoviesCard movieImage={movieImageFour} />
        <MoviesCard movieImage={movieImageOne} />
        <MoviesCard movieImage={movieImageTwo} />
        <MoviesCard movieImage={movieImageThree} />
        <MoviesCard movieImage={movieImageFour} />
      </ul>
    </section>
  );
}

export default MoviesCardList;
