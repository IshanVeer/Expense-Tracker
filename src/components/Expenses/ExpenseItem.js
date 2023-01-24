import React, { Fragment } from "react";
import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
    
  return (
    <Fragment>
      <div className={classes["expense-item"]}>
        <ExpenseDate date={props.date}/>
        <div className={classes["expense-item__description"]}>
          <h2>{props.title}</h2>
          <div className={classes["expense-item__price"]}>{props.amount} ₹</div>
        </div>
      </div>
    </Fragment>
  );
};
export default ExpenseItem;
