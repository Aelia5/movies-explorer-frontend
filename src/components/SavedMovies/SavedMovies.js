import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Filter from "../../utils/Filter";

function SavedMovies({ savedMovies, apiError, changeApiError, removeMovie, movieIdToDelete }) {
  const { filterByQuery } = Filter();

  const [checkboxOn, setCheckboxOn] = React.useState(false);
  function handleCheckboxClick() {
    setCheckboxOn(!checkboxOn);
  }

  const [searchResults, setSearchResults] = React.useState([]);

  function handleSearchSubmit(query) {
    const results = filterByQuery(query, savedMovies);
    setSearchResults(results);
    if (results.length === 0) {
      changeApiError("Ничего не найдено");
      setSearchResults([]);
    }
  }
  React.useEffect(() => {
    const updatedResults = searchResults.filter((item) => {
      return item._id !== movieIdToDelete
    });
    setSearchResults(updatedResults);
  }, [movieIdToDelete])

  return (
    <main className="saved-movies">
      <SearchForm
        apiError={apiError}
        changeApiError={changeApiError}
        savedMovies={savedMovies}
        isSaved={true}
        handleSearchSubmit={handleSearchSubmit}
        checkboxOn={checkboxOn}
        handleCheckboxClick={handleCheckboxClick}
      />
      <MoviesCardList
        isSaved={true}
        savedMovies={savedMovies}
        removeMovie={removeMovie}
        searchResults={searchResults}
        checkboxOn={checkboxOn}
        apiError={apiError}
      />
    </main>
  );
}

export default SavedMovies;
