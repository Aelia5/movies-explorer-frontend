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
  switchPreloader,
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
        switchPreloader={switchPreloader}
        checkboxOn={checkboxOn}
        handleCheckboxClick={handleCheckboxClick}
        savedMovies={savedMovies}
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
