import React, { useState } from 'react';

const ExpenseInput = ({expenseItems, setExpenseItems}) => {
    const [date, setDate] = useState(" ");
    const [amount, setAmount] = useState(" ");
    const [paymentMethod, setPaymentMethod] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [purchaseLocation, setPurchaseLocation] = useState(" ");

    const handleExpenseSubmit = (e) => {
        e.preventDefault();
          
        const expense = {
            id: Date.now(),
            date,
            amount,
            paymentMethod,
            description,
            purchaseLocation
        }

        setExpenseItems([...expenseItems, expense]);
        clearForm();
    }
    
    function clearForm() {
        setDate("");
        setAmount("");
        setPaymentMethod("");
        setDescription("");
        setPurchaseLocation("");
    }

    return (
        <div className="container p-4 my-5 border border-3 border-dark rounded">
            <form onSubmit={handleExpenseSubmit}>
                <div className="row">
                    <div className="col">
                        <label for="dateInput" className="form-label">Date:</label>
                        <input 
                            value={date}
                            type="date" 
                            placeholder="mm/dd/yyyy" 
                            className="form-control-sm mb-3 col ms-2"
                            onChange={(e) => setDate(e.target.value)}
                            >
                        </input>
                    </div>
                
                    <div className="col">
                        <label for="expenseAmount" className="form-label">Price: </label>
                        <input 
                            value={amount}
                            type="number" 
                            placeholder="How much?" 
                            className="form-control-sm mb-3 col ms-2"
                            onChange={(e) => setAmount(e.target.value)}
                            >
                        </input>
                    </div>
        
                    <div className="col">
                        <label for="payment-method" className="form-label">Payment method: </label>
                            <select 
                                value={paymentMethod}
                                className="col form-select-sm border-2 rounded ms-2" 
                                name="payment-method" id="payment-method"
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                >
                            
                                <option value="cash">Cash</option>
                                <option value="debit">Debit</option>
                                <option value="credit">Credit</option>
                                <option value="venmo">Venmo</option>
                                <option value="paypal">Paypal</option>
                                <option value="other">Other</option>
                            </select><br></br>
                    </div>
                </div>
                
                <div className="row mt-3">
                    <div className="col">
                        <label for="expense-description">Expense description: </label>
                        <input 
                            value={description}
                            type="text" 
                            id="expenseDescription" 
                            placeholder="What did you buy?" 
                            className="col form-control-sm mb-3 ms-2"
                            onChange={(e) => setDescription(e.target.value)}
                            >
                        </input>
                    </div>
                    <div className="col">
                        <label for="purchase-location">Purchase Location: </label>
                        <input 
                            value={purchaseLocation}
                            type="text" 
                            id="purchase-location" 
                            placeholder="Where did you buy it?" 
                            className="col form-control-sm mb-3 ms-2"
                            onChange={(e) => setPurchaseLocation(e.target.value)}
                            >
                        </input>
                    </div>

                    <div className="col-2">
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ExpenseInput;

                
            