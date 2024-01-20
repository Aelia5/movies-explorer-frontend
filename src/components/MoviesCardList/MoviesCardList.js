import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";

function MoviesCardList({ cards, isSaved }) {
  const [width, serWidth] = React.useState(window.innerWidth);
  console.log(cards);

  React.useEffect(() => {
    const handleResizeWindow = () => serWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const [cardsNumber, setCardsNumber] = React.useState(0);

  React.useEffect(() => {
    if (width > 990) {
      setCardsNumber(16);
    } else if (width > 630) {
      setCardsNumber(8);
    } else {
      setCardsNumber(5);
    }
  }, [isSaved, width]);

  const cardsToRender = cards.slice(0, cardsNumber);

  return (
    <section aria-label="Список фильмов">
      <ul className="movies-cardlist">
        {cardsToRender.map((card) => (
          <MoviesCard
            key={card._id}
            movie={card}
            isSaved={isSaved}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
