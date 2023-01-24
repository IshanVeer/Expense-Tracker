import React from "react";
import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpenses.module.css";

const NewExpenses = (prop) =>{
    return(
        <div className={classes["new-expense"]}>
            <ExpenseForm />
        </div>
    )
};
export default NewExpenses;
