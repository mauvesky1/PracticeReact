import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
//
const ExpensesList = (props) => {
  let expensesContent = <h2 className="expenses-list__fallback">No expenses found</h2>;
  console.log(props.filteredExpenses, props.filteredExpenses.length);
  if (props.filteredExpenses.length > 0) {
    expensesContent = props.filteredExpenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }
  return <ul className="expenses-list">{expensesContent }</ul>;
};

export default ExpensesList;
