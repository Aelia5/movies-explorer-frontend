import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React from "react";

function SearchForm({
  isSaved,
  handleSearchSubmit,
  apiError,
  changeApiError,
  checkboxOn,
  handleCheckboxClick,
  savedMovies,
  blocked,
}) {
  const [query, setQuery] = React.useState(localStorage.getItem("query") || "");

  const [savedQuery, setSavedQuery] = React.useState("");

  React.useEffect(() => {
    localStorage.setItem("query", query);
  }, [query]);

  function handleSearchMovie(e) {
    if (!isSaved) {
      setQuery(e.target.value);
    } else {
      setSavedQuery(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if ((!isSaved && !query) || (isSaved && !savedQuery)) {
      changeApiError("Нужно ввести ключевое слово");
    } else {
      handleSearchSubmit(isSaved ? savedQuery : query);
    }
  }

  React.useEffect(() => {
    if (apiError) {
      changeApiError("");
    }
  }, [query, savedQuery, savedMovies]);

  return (
    <section aria-label="Форма поиска фильмов">
      <form className="search-form" name="search-form" onSubmit={handleSubmit}>
        <div className="search-form__line">
          <input
            className="search-form__input"
            type="text"
            name="movie"
            id="movie"
            onChange={handleSearchMovie}
            placeholder="Фильм"
            value={isSaved ? savedQuery || "" : query || ""}
            disabled={blocked}
          />
          <button className="search-form__submit-button" type="submit" />
        </div>
        <p className="api-error">{apiError}</p>
        <FilterCheckbox
          checkboxOn={checkboxOn}
          handleCheckboxClick={handleCheckboxClick}
        />
      </form>
    </section>
  );
}

export default SearchForm;
