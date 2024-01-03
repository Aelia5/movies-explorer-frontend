import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import movieImages from "../../utils/constants";
import React from "react";

function MoviesCardList() {
  const [width, serWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResizeWindow = () => serWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  let cardsNumber;

  if (width > 990) {
    cardsNumber = 16;
  } else if (width > 630) {
    cardsNumber = 8;
  } else {
    cardsNumber = 5;
  }

  const movieImageToRender = movieImages.slice(0, cardsNumber);

  return (
    <section aria-label="Список фильмов" className="movies-cardlist">
      {movieImageToRender.map((movieImage) => (
        <MoviesCard key={movieImage._id} movieImage={movieImage.link} />
      ))}
    </section>
  );
}

export default MoviesCardList;
