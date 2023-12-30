import "./FilterCheckbox.css";
import React from "react";

function FilterCheckbox() {
  const [checkboxOn, setCheckboxOn] = React.useState(false);

  function handleCheckboxClick() {
    setCheckboxOn(!checkboxOn);
  }

  return (
    <label className="filter-checkbox" for="shortie">
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
