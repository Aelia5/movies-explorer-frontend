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
}) {
  return (
    <main className="movies">
      <SearchForm
        apiError={apiError}
        changeApiError={changeApiError}
        handleSearchSubmit={handleSearchSubmit}
        switchPreloader={switchPreloader}
      />
      {isLoading && <Preloader />}
      <MoviesCardList cards={searchResults} isSaved={false} />
      {searchResults.length > 0 && (
        <button className="movies__button-more">Ещё</button>
      )}
    </main>
  );
}

export default Movies;
