import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React from "react";

function SearchForm(onSubmit) {
  const [movie, setMovie] = React.useState("");

  function handleSearchMovie(e) {
    setMovie(e.target.value);
  }

  return (
    <form className="search-form" name="search-form" onSubmit={onSubmit}>
      <div className="search-form__line">
        <input
          className="search-form__input"
          type="text"
          name="movie"
          id="movie"
          onChange={handleSearchMovie}
          placeholder="Фильм"
          minLength="2"
          maxLength="30"
          required
        />
        <button className="search-form__submit-button" type="submit" />
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
