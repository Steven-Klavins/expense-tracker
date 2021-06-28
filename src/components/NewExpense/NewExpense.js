import React from "react";
import "./NewExpense.css";
import ExpeneseForm from "./ExpenceForm";
import { v4 as uuidv4 } from 'uuid';

function NewExpense(props) {

  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: (uuidv4())
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpeneseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
