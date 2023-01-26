import React, { useState, Fragment } from "react";
import ExpenseItem from "./ExpenseItem";


import classes from "./Expenses.module.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const selectedYearHandler = (selectedYear) => { // To have the current year as the default year and still be able to select other years
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear; //filtering the data according to the year of that expense.
  });

  let filteredContent = (
    <p style={{ color: "white", textAlign: "center", fontSize: "2rem" }}>
      No Items Found
    </p>
  );
  //To send an error message if the expenses item list is empty for that year.
  if (filteredExpenses.length > 0) {
    filteredContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title} //Transforming our array into JSX element using map method
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <Fragment>
      <Card className={classes["expenses"]}>
        <ExpenseFilter
          onSelectYear={selectedYearHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredContent}
      </Card>
    </Fragment>
  );
};
export default Expenses;
