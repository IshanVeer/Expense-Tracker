import React, { useState, Fragment } from "react";
import ExpenseItem from "./ExpenseItem";

import classes from "./Expenses.module.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Fragment>
      <Card className={classes["expenses"]}>
        <ExpenseFilter
          onSelectYear={selectedYearHandler}
          selected={filteredYear}
        />
        {props.expenses.map(
          (
            expense // Used map method to transform the data from array into JSX element.
          ) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )
        )}
      </Card>
    </Fragment>
  );
};
export default Expenses;
