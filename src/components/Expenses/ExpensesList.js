import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  let expenseContent = <p className="expenses-list__fallback">No expenses found</p>;

  if (props.expensesList.length === 0) {
    return expenseContent;
  }

  return (
    <ul className="expenses-list">
      {props.expensesList.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}
    </ul>
  );
}

export default ExpensesList;
