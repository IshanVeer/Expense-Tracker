import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";

import NewExpenses from "./components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const[expenditure, setExpenditure]=useState(DUMMY_EXPENSES)
  
  

  const onAddExpenseHandler = (expense) => { 
    setExpenditure(prevExpenses=>{
      return[expense,...prevExpenses] // Passing data from NewExpenses.js to App.js - lifting the state up, using useState
    }); 
  }; 
  return (
    <div>
      <NewExpenses onAddExpense={onAddExpenseHandler} />
      <Expenses expenses={expenditure} />  
    </div> // Passing the data from App.js to Expenses.js where the data will eventually be rendered
  );
}

export default App;
