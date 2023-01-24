import React from "react";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className={classes["new-expense__controls"]}>
        <div className={classes["new-expense__control"]}>
          <label>Title</label>
          <input type="text" />
        </div>
        <div className={classes["new-expense__control"]}>
          <label>Amount</label>
          <input type="number" min="1" step="1" />
        </div>
        <div className={classes["new-expense__control"]}>
          <label>Date</label>
          <input type="date" min="2023-01-01" />
        </div>
      </div>
      <div>
        <button type="click">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
