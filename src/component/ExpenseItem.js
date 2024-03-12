import './ExpenseItem.css';
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    /* const expensedate=new Date();
     const expenseitem="Car Insurance";
     const expenseprice=450.00;
 
     return (<div className='expense-item'>
         <div>{expensedate.toISOString()}</div>
         <div>
             <h2 className='expense-item__description'>{expenseitem}</h2>
             <div className='expense-item__price'>${expenseprice}</div>
         </div>
     </div>)   ---->   WHEN USING CONST VARIABLES*/
    const [title, setTitle] = useState(props.title);

    function clickHandler() {
        setTitle("Updated");
    };
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={(clickHandler)}>Change Title</button>
            </div>
        </div>
    );

}

export default ExpenseItem;