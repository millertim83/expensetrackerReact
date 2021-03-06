import React, { useState } from 'react';

const ExpenseInput = ({expenseItems, setExpenseItems}) => {
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("Cash");
    const [description, setDescription] = useState("");
    const [purchaseLocation, setPurchaseLocation] = useState("");

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
                        <label className="form-label">Date:</label>
                        <input 
                            value={date}
                            required
                            type="date" 
                            placeholder="mm/dd/yyyy" 
                            className="form-control-sm mb-3 col ms-2"
                            onChange={(e) => setDate(e.target.value)}
                            >
                        </input>
                    </div>
                
                    <div className="col">
                        <label className="form-label">Price: </label>
                        <input 
                            value={amount} 
                            required
                            type="number" 
                            placeholder="How much?" 
                            className="form-control-sm mb-3 col ms-2"
                            onChange={(e) => setAmount(e.target.value)}
                            >
                        </input>
                    </div>
        
                    <div className="col">
                        <label className="form-label">Payment method: </label>
                            <select 
                                value={paymentMethod} 
                                required
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
                
                <div className="row">
                    <div className="col">
                        <label className="form-label">Expense description: </label>
                        <input 
                            required
                            value={description} 
                            type="text" 
                            placeholder="What did you buy?" 
                            id="expenseDescription" 
                            className="col form-control-sm mb-3 ms-2"
                            onChange={(e) => setDescription(e.target.value)}
                            >
                        </input>
                    </div>
                    <div className="col">
                        <label className="form-label">Purchase Location: </label>
                        <input 
                            placeholder="Where did you buy it?" 
                            value={purchaseLocation}
                            required 
                            type="text" 
                            id="purchase-location" 
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

                
            