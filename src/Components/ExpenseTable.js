import React from 'react';

const ExpenseTable = ({expenseItems, setExpenseItems}) => {
    /*const deleteItem = (id) => {
        
    };
    
    const expense = expenseItems.map((expense) => (
        <tr>
            <td>{expense.date}</td>
            <td>{expense.amount}</td>
            <td>{expense.paymentMethod}</td>
            <td>{expense.description}</td>
            <td>{expense.purchaseLocation}</td>
            <td button type="button" class="btn-danger">Delete</button>
        </tr>
    ));*/

    return (
        <div>
            <table className=" mt-3 table table-bordered ">
                <thead>
                    <tr className="mt-3 table-dark">
                        <th>Date</th>
                        <th>Price</th>
                        <th>Payment Method</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Delete Expense?</th>
                    </tr>
                </thead>
                {/* { <tobdy>{expense}</tobdy> } */}
                <tr>
                    <td>09/20/2021</td>
                    <td>$18</td>
                    <td>cash</td>
                    <td>shoes</td>
                    <td>shoe store</td>
                    <td> <button type="button" className="btn-danger">X</button></td>
                </tr>
                <tr>
                    <td>09/21/2021</td>
                    <td>$24</td>
                    <td>ccredit</td>
                    <td>food</td>
                    <td>food store</td>
                    <td> <button type="button" className="btn-danger">X</button></td>
                </tr>
            </table>

        </div>
    )
}

export default ExpenseTable;

