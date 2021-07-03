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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearSelected={selectYearHandler}
          selected={selectedYear}
        />
        {expenseList}
      </Card>
    </div>
  );
}

export default Expenses;
