import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

  /*-----> changing mutlitple state using multiple useState() */
  const [EnteredTitle,TitleChange]= useState('');
  const [EnteredAmount,AmountChange]= useState('');
  const [EnteredDate,DateChange]= useState('');

  const TitleChangeHandler=(event)=>
  {
    TitleChange(event.target.value);
  }

  const AmountChangeHandler=(event)=>
  {
    AmountChange(event.target.value);
  }

  const DateChangeHandler=(event)=>
  {
    DateChange(event.target.value);
  } 
  
  

  /*using single useState 

  const [UserInput,SetUserInput]= useState({

    enteredTitle:'',
    enteredAmount:'',
    EnteredDate:'',

  });

const TitleChangeHandler=(event)=>
  {
   SetUserInput((prevState)=>{
     return {...prevState,enteredTitle:event.target.value}
   });
  };

  const AmountChangeHandler=(event)=>
  {
    SetUserInput((prevState)=>{
      return {...prevState,enteredAmount:event.target.value}
    });
  };

  const DateChangeHandler=(event)=>
  {
    SetUserInput((prevState)=>{
      return {...prevState,enteredDate:event.target.value}
    });
  }; */

  const SubmitHandler=(event)=>
  {
    event.preventDefault();

    const ExpenseData={
      title:EnteredTitle,
      date:new Date(EnteredDate),
      amount:+EnteredAmount, //to convert into number we use +
    };
    props.onSaveExpenseData(ExpenseData);
    TitleChange('');
    AmountChange('');
    DateChange('');
  }
  return (
    <form onSubmit={SubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={EnteredTitle} onChange={TitleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={EnteredAmount} onChange={AmountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={EnteredDate} onChange={DateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
      <button type='button' onClick={props.onCancel} >Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;