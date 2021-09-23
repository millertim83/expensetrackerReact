import React, { useState } from 'react';
import ExpenseInput from './Components/ExpenseInput';
import ExpenseTable from './Components/ExpenseTable';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [description, setDescription] = useState("");
  const [purchaseLocation, setPurchaseLocation] = useState("");
  const [expenseItems, setExpenseItems] = useState("");

  /*const expense = {
    id: Date.now(),
    date,
    amount,
    paymentMethod,
    description,
    purchaseLocation
  };*/

  /*const handleExpenseSubmit = (e) => {
    e.preventDefault();
    setDate("");
    setAmount("");
    setPaymentMethod("");
    setDescription("");
    setPurchaseLocation("");
  }

  setExpenseItems([...expenseItems, expense]);*/

  return (
    <div className="container pt-3">
        <header className="mt-3 mb-3 text-center">
          <h1>Expense Tracker</h1>
          <small>created by Tim Miller</small>
        </header>
      <ExpenseInput
        /*date={date}
        setDate={setDate}
        amount={amount}
        setAmount={setAmount}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        description={description}
        setDescription={setDescription}
        purchaseLocation={purchaseLocation}
        setPurchaseLocation={setPurchaseLocation}
        handleExpenseSubmit={handleExpenseSubmit}*/
      />
      <ExpenseTable 
        //expenseItems={expenseItems}
      />
    </div>
  );
}

export default App;
