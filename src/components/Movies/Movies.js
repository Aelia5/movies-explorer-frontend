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
  handleCheckboxClick
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
      />
      {isLoading && <Preloader />}
      <MoviesCardList searchResults={searchResults} isSaved={false} checkboxOn={checkboxOn}/>

    </main>
  );
}

export default Movies;
