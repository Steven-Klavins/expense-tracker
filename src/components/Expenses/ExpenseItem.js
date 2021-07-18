import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExspenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">£{props.amount} </div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
