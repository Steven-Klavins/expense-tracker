import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  const expenses = props.expenses;
  let expenseList = [];

  expenses.forEach((item, i) => {
    expenseList.push(
      <ExpenseItem
        key={i}
        title={item.title}
        amount={item.amount}
        date={item.date}
      ></ExpenseItem>
    );
  });

  return <Card className = "expenses">{expenseList}</Card>;
}

export default Expenses;
