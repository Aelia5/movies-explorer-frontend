import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox( {handleCheckboxClick}) {

  return (
    <label className="filter-checkbox" htmlFor="shortie">
      <input
        className="filter-checkbox__invisible-checkbox"
        type="checkbox"
        id="shortie"
        onClick={handleCheckboxClick}
      />
      <span className="filter-checkbox__visible-checkbox"></span>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
