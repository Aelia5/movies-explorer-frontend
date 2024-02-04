import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React from "react";
import {
  SHORTIE_DURATION,
  BIG_SCREEN_WIDTH,
  MIDDLE_SCREEN_WIDTH,
  LITTLE_SCREEN_WIDTH,
  BIG_START_NUMBER,
  MIDDLE_START_NUMBER,
  LITTLE_START_NUMBER,
  MIN_START_NUMBER,
  BIG_ADD_NUMBER,
  MIDDLE_ADD_NUMBER,
  LITTLE_ADD_NUMBER

} from "../../utils/constants";

function MoviesCardList({
  searchResults,
  isSaved,
  checkboxOn,
  savedMovies,
  addMovie,
  removeMovie,
  apiError,
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
      if (width >= BIG_SCREEN_WIDTH) {
        setCardsNumber(BIG_START_NUMBER);
        setCardsToRender(cards.slice(0, BIG_START_NUMBER));
        setNumberToAdd(BIG_ADD_NUMBER);
      } else if (width > MIDDLE_SCREEN_WIDTH) {
        setCardsNumber(MIDDLE_START_NUMBER);
        setCardsToRender(cards.slice(0, MIDDLE_START_NUMBER));
        setNumberToAdd(MIDDLE_ADD_NUMBER);
      } else if (width > LITTLE_SCREEN_WIDTH) {
        setCardsNumber(LITTLE_START_NUMBER);
        setCardsToRender(cards.slice(0, LITTLE_START_NUMBER));
        setNumberToAdd(LITTLE_ADD_NUMBER);
      } else {
        setCardsNumber(MIN_START_NUMBER);
        setCardsToRender(cards.slice(0, MIN_START_NUMBER));
        setNumberToAdd(LITTLE_ADD_NUMBER);
      }
    }
  }, [cards, width, isSaved]);

  React.useEffect(() => {
    let fullArray;
    if (isSaved && searchResults.length === 0 && !apiError) {
      fullArray = savedMovies;
    } else {
      fullArray = searchResults;
    }
    if (checkboxOn) {
      setCards(
        fullArray.filter((movie) => {
          return movie.duration <= SHORTIE_DURATION;
        })
      );
    } else {
      setCards(fullArray);
    }
  }, [searchResults, isSaved, savedMovies, checkboxOn, apiError]);

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
