import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart"

function Expenses(props) {
  const [selectedYear, setselectedYear] = useState("2020");

  const selectYearHandler = (year) => {
    setselectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearSelected={selectYearHandler}
          selected={selectedYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expensesList = {filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
