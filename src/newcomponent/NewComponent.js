import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewComponent.css';
import { useState } from 'react';

const NewExpense = (props) => {

  const [isEdit, setisEdit] = useState(false);

  const buttonClickHandler = () => {
    setisEdit(true);
  }

  const stopbuttonClickHandler=()=>
  {
    setisEdit(false);
  }
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setisEdit(false);
  }
  return (
    <div className='new-expense'>
      {!isEdit && <button onClick={buttonClickHandler}>Add new Expense</button>}
      {isEdit && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}  onCancel={stopbuttonClickHandler}/>}
    </div>
  );
};

export default NewExpense;