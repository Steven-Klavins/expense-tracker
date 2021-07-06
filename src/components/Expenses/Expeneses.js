import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setselectedYear] = useState("2020");

  const selectYearHandler = (year) => {
    setselectedYear(year)
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearSelected={selectYearHandler}
          selected={selectedYear}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))};
      </Card>
    </div>
  );
}

export default Expenses;
