import './Expenses.css';
import ExpenseList from './ExpensesList';
import ExpensesFilter from './ExpenseFilter';
import React, {useState} from 'react';
import ExpensesChart from './ExpensesChart';
function Expenses(props) {

    const [FilteredYear,SetFilteredYear]=useState('2020');

    const FilterChangeHandler=(SelectedYear)=>
    {
    SetFilteredYear(SelectedYear);
    }

    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===FilteredYear;

    });
    return (
        <div>
           
            <div className="expenses">
             <ExpensesFilter selectedDefaultDate={FilteredYear} OnFilterChange={FilterChangeHandler}/>
             <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses}/>
            </div>
        </div>
    )
}

export default Expenses;