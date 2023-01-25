import React from "react";
import classes from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onSelectYear(event.target.value);
  };

  return (
    <div className={classes["expenses-filter"]}>
      <div className={classes["expenses-filter__control"]}>
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
