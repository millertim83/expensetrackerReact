import React, { useState } from 'react';
import ExpenseInput from './Components/ExpenseInput';
import ExpenseTable from './Components/ExpenseTable';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [expenseItems, setExpenseItems] = useState("");
  
  return (
    <div className="container pt-3">
        <header className="mt-3 mb-3 text-center">
          <h1>Expense Tracker</h1>
          <small>created by Tim Miller</small>
        </header>
      <ExpenseInput expenseItems={expenseItems} setExpenseItems={setExpenseItems} />
      <ExpenseTable expenseItems={expenseItems} setExpenseItems={setExpenseItems} />
    </div>
  );
}

export default App;
