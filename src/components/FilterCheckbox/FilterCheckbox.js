import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox({ checkboxOn, handleCheckboxClick }) {
  return (
    <label className="filter-checkbox" htmlFor="shortie">
      <input
        className="filter-checkbox__invisible-checkbox"
        type="checkbox"
        id="shortie"
        onClick={handleCheckboxClick}
      />
      <span
        className={`filter-checkbox__visible-checkbox ${
          checkboxOn && "filter-checkbox__visible-checkbox_on"
        }`}
      ></span>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
