import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [userInput, setUserInput] = useState({
    showForm: false,
  });

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const clickHandler = (event) => {
    console.log("CLicked!")
    setUserInput((prevState) => {
      return { showForm: !userInput.showForm };
    });
  };

  return <div className="new-expense">
    { !userInput.showForm && <button onClick={clickHandler}>Add New Expense</button>}
    {  userInput.showForm && <ExpenseForm onCancel={clickHandler} onSaveExpenseData={saveExpenseDateHandler} />
}
</div>;
};

export default NewExpense;
