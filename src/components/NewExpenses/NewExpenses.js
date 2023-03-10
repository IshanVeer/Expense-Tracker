import React from "react";
import ExpenseForm from "./ExpenseForm";
import classes from "./NewExpenses.module.css";

const NewExpenses = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);

    }
    return(
        <div className={classes["new-expense"]}>
            <ExpenseForm onSaveExpenseData= {saveExpenseDataHandler}/>
        </div>
    )
};
export default NewExpenses;
