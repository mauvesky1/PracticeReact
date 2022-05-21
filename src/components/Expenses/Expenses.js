
import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [userInput, setUserInput] = useState({
    enteredYear: "2019",
    showForm:''
  });

  const selectionHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredYear: event.target.value };
    });
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === userInput.enteredYear;
  });

  return (

    <Card className="expenses">
    
      <ExpensesFilter
        selected={userInput.enteredYear}
        onSelection={selectionHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
