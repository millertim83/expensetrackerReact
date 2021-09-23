import React from 'react';

const ExpenseInput = (props) => {
    
    return (
        <div className="container p-4 my-5 border border-3 border-dark rounded">
            <form onSubmit= {props.handleExpenseSubmit}>
                <div className="row">
                    <div className="col">
                        <label for="dateInput" className="form-label">Date:</label>
                        <input 
                            value={props.date}
                            type="date" 
                            placeholder="mm/dd/yyyy" 
                            className="form-control-sm mb-3 col ms-2"
                            //onSubmit={(e) => props.setDate(e.target.value)}
                            >
                        </input>
                    </div>
                
                    <div className="col">
                        <label for="expenseAmount" className="form-label">Price: </label>
                        <input 
                            value={props.amount}
                            type="number" 
                            placeholder="How much did it cost?" 
                            className="form-control-sm mb-3 col ms-2"
                            //onSubmit={(e) => props.setAmount(e.target.value)}
                            >
                        </input>
                    </div>
        

                    <div className="col">
                        <label for="payment-method" className="form-label">Payment method: </label>
                            <select 
                                value={props.paymentMethod}
                                className="col form-select-sm border-2 rounded ms-2" 
                                name="payment-method" id="payment-method"
                                //onSubmit={(e) => props.setPaymentMethod(e.target.value)}
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
                            value={props.description}
                            type="text" 
                            id="expenseDescription" 
                            placeholder="What did you buy?" 
                            className="col form-control-sm mb-3 ms-2"
                            //onSubmit={(e) => props.setDescription(e.target.value)}
                            >
                        </input>
                    </div>
                    <div className="col">
                        <label for="purchase-location">Purchase Location: </label>
                        <input 
                            value={props.purchaseLocation}
                            type="text" 
                            id="purchase-location" 
                            placeholder="Where did you buy it?" 
                            className="col form-control-sm mb-3 ms-2"
                            //onSubmit={(e) => props.setPurchaseLocation(e.target.value)}
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

                
            