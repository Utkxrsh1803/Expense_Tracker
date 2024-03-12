import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {
    if (props.items.length === 0) {
        return <h1 className="expense-list__fallback">No Expense Found...</h1>
    }

    return (
        <ul className='expense-list'>
            {props.items.map((expense) =>(               
                <ExpenseItem
                    title={expense.title}
                    key={expense.id}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpenseList;