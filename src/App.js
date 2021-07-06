import React, {useState} from "react"
import './App.css';
import Expenses from './components/Expenses/Expeneses'
import NewExpense from "./components/NewExpense/NewExpense"


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 2, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [itemsSelectedByYear, setItemsSelectedByYear] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      console.log([expense, ...prevExpenses]);
      return [...prevExpenses, expense ];
      
    });
  };

  const selectedYearHandler = (year) => {
    let newList = []
    expenses.forEach((item) => {
      if (item.date.toString().includes(year)){
        newList.push(item);
      } 
    })
    setItemsSelectedByYear(() => {
      return newList
    })
   
  }

  return (
    <div>
      <h2>Exspense Tracker</h2>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses expenses = {itemsSelectedByYear} selectYearFilter = {selectedYearHandler}/>
    </div>
  );
}

export default App;
