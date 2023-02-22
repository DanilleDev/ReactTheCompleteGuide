import React, { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilterYear] = useState('2021');

  const filterChangeHandler =(selectedValue) => {
    setFilterYear(selectedValue)
  }

  const filteredExpenses = props.items.filter(expense => {
    const year = expense.date.getUTCFullYear().toString()
    return year === filteredYear
  });

  let expenseContent = <p>No expenses found.</p>

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      key={expense.id}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses;