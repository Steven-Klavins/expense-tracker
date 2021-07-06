import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setselectedYear] = useState("2020");

  const selectYearHandler = (year) => {
    setselectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearSelected={selectYearHandler}
          selected={selectedYear}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.id}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
