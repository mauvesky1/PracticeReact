import React, {useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  
  });
  const titleChangehandler = (event) => {
      setUserInput( (prevState) => {
        return {...prevState,  enteredTitle: event.target.value };
      });
  };
  const amountChangehandler = (event) => {
    setUserInput( (prevState) => {
      return {...prevState,  enteredAmount: event.target.value };
    });
};
const dateChangehandler = (event) => {
  setUserInput( (prevState) => {
    return {...prevState,  enteredDate: event.target.value };
  });
};

const submitHandler = (event) => {
  event.preventDefault();
  props.onCancel()
  const expenseData = {
    title: userInput.enteredTitle,
    amount: Number(userInput.enteredAmount),
    date: new Date(userInput.enteredDate)
  }
  props.onSaveExpenseData(expenseData);
  setUserInput({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',

  })
  
};
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">  
        <div className="new-expense__controls">
            <label>Title</label>
            <input value={userInput.enteredTitle} type="text"  onChange={titleChangehandler} />
        </div>
        <div className="new-expense__controls">
            <label>Amount</label>
            <input value={userInput.enteredAmount} type="number" onChange={amountChangehandler} min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__controls">
            <label>Date</label>
            <input value={userInput.enteredDate} type="date"  onChange={dateChangehandler} min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
    <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}> Cancel</button>
        <button type="submit">Add Expense</button>
    </div>

    </form>
  );
};

export default ExpenseForm;
