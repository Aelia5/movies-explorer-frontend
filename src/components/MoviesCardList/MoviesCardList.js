import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";

function MoviesCardList({
  searchResults,
  isSaved,
  checkboxOn,
  savedMovies,
  addMovie,
  removeMovie,
}) {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResizeWindow() {
      setTimeout(setWidth, 1000, window.innerWidth);
    }
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const [cards, setCards] = React.useState([]);

  const [cardsNumber, setCardsNumber] = React.useState(0);

  const [cardsToRender, setCardsToRender] = React.useState([]);

  const [numberToAdd, setNumberToAdd] = React.useState(0);

  React.useEffect(() => {
    if (isSaved) {
      setCardsToRender(cards);
    } else {
      if (width >= 1280) {
        setCardsNumber(16);
        setCardsToRender(cards.slice(0, 16));
        setNumberToAdd(4);
      } else if (width > 990) {
        setCardsNumber(12);
        setCardsToRender(cards.slice(0, 12));
        setNumberToAdd(3);
      } else if (width > 630) {
        setCardsNumber(8);
        setCardsToRender(cards.slice(0, 8));
        setNumberToAdd(2);
      } else {
        setCardsNumber(5);
        setCardsToRender(cards.slice(0, 5));
        setNumberToAdd(2);
      }
    }
  }, [cards, width, isSaved]);

  React.useEffect(() => {
    let fullArray;
    if (isSaved) {
      fullArray = savedMovies;
    } else {
      fullArray = searchResults;
    }
    if (checkboxOn) {
      setCards(
        fullArray.filter((movie) => {
          return movie.duration <= 40;
        })
      );
    } else {
      setCards(fullArray);
    }
  }, [searchResults, savedMovies, checkboxOn, isSaved]);

  function addCards() {
    const newCards = cards.slice(cardsNumber, cardsNumber + numberToAdd);
    setCardsNumber(cardsNumber + numberToAdd);
    setCardsToRender([...cardsToRender, ...newCards]);
  }

  return (
    <section aria-label="Список фильмов">
      <ul className="movies-cardlist">
        {cardsToRender.map((card) => (
          <MoviesCard
            key={isSaved ? card._id : card.id}
            movie={card}
            isListSaved={isSaved}
            addMovie={addMovie}
            removeMovie={removeMovie}
            savedMovies={savedMovies}
          />
        ))}
      </ul>
      {cards.length > 0 && cards.length > cardsToRender.length && (
        <button className="movies-cardlist__button-more" onClick={addCards}>
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
