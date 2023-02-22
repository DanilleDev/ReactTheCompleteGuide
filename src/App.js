import React, { useState } from 'react';
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { 
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 6)
  },
  { 
    id: "e2",
    title: "test",
    amount: 24.67,
    date: new Date(2023, 3, 6)
  },
  {
    id: "e3",
    title: "Hi",
    amount: 94.67,
    date: new Date(2023, 4, 6)
  },
];

function App() {
  const [selectedYear, setSelectedYear] = useState('')
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  const selectYearHandler = (year) => {
    setSelectedYear(year)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} selectedYear={selectedYear} />
      <Expenses items={expenses} onSelectYear={selectYearHandler} />
    </div>
  );
}

export default App;
