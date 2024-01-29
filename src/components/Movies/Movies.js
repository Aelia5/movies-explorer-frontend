import "./Movies.css";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies({
  handleSearchSubmit,
  apiError,
  changeApiError,
  searchResults,
  isLoading,
  checkboxOn,
  handleCheckboxClick,
  addMovie,
  removeMovie,
  savedMovies,
}) {
  return (
    <main className="movies">
      <SearchForm
        apiError={apiError}
        changeApiError={changeApiError}
        handleSearchSubmit={handleSearchSubmit}
        checkboxOn={checkboxOn}
        handleCheckboxClick={handleCheckboxClick}
        savedMovies={savedMovies}
        isSaved={false}
      />
      {isLoading && <Preloader />}
      <MoviesCardList
        searchResults={searchResults}
        isSaved={false}
        checkboxOn={checkboxOn}
        addMovie={addMovie}
        removeMovie={removeMovie}
        savedMovies={savedMovies}
      />
    </main>
  );
}

export default Movies;
