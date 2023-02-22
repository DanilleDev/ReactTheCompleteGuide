import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // 여러 State를 동시에 관리하는 방법 but, 의존성을 가질 수 있으니 강의자는 선호하지 않음
  // const [userInput, setUserInput] = useState({
  //   entertedTitle: '',
  //   enteredAmount: 0,
  //   entertedDate: ''
  // });


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)

    // 이전 State에 의존할 가능성이 있음
    // setUserInput({
    //   ...userInput,
    //   entertedTitle: event.target.value
    //  })

    // 여러개의 State를 동시에 관리할 때 항상 최신의 State를 기반으로 동작
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
  }

  const dateChangeHandlder = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   entertedDate: event.target.value
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount : enteredAmount,
      date: new Date(enteredDate)
    };


    props.onSaveExpenseData(expenseData);
    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler} >
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enteredDate} min='2019-01-01' max='2023-12-31' onChange={dateChangeHandlder}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;