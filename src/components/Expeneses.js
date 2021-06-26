import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expenses = props.expenses;
  let expenseList = [];

  expenses.forEach((item) => {
    expenseList.push(
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
      ></ExpenseItem>
    );
  });

  return <div className = "expenses">{expenseList}</div>;
}

export default Expenses;
