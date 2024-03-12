import React, { useState } from 'react';
import Expenses from './component/Expenses';
import NewExpense from './newcomponent/NewComponent';
const Dummy_Expense = [
  {
    id: 'e1', title: "Car Insurance", amount: 4000.00, date: new Date(2020, 5, 21)
  },
  {
    id: 'e2', title: "Home loan", amount: 460.00, date: new Date(2018, 7, 11)
  },
  {
    id: 'e3', title: "Grocery", amount: 10000.00, date: new Date(2022, 3, 18)
  },
  {
    id: 'e4', title: "Education", amount: 450.00, date: new Date(2021, 3, 20)
  },

];
function App() {

  const [expenses, SetExpenses] = useState(Dummy_Expense);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    SetExpenses((PrevExpenses) => {
      return [expense, ...PrevExpenses];
    });
    setTimeout(() => {
      console.log(expenses);
    }, 5000)
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
