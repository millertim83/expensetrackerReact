import React from 'react';
import './App.css';
import ExpenseInput from './Components/ExpenseInput';
import ExpenseTable from './Components/ExpenseTable';

function App() {
  return (
    <div className="App">
      <ExpenseInput />
      <ExpenseTable />
    </div>
  );
}

export default App;
