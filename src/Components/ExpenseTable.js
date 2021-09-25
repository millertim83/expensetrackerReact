import React from 'react';

const ExpenseTable = ({expenseItems, setExpenseItems}) => {
    function handleDelete (id) {
        console.log(id);
        const newExpenseItems = expenseItems.filter((expense) => expense.id !==id)

        setExpenseItems(newExpenseItems);
          
    }
    
    const expense = expenseItems.map((expense) => (
        <tr key={expense.id}>
            <td>{expense.date}</td>
            <td>${expense.amount}</td>
            <td>{expense.paymentMethod}</td>
            <td>{expense.description}</td>
            <td>{expense.purchaseLocation}</td>
            <td> 
                <button className="btn-danger" onClick={() => handleDelete(expense.id)}>X</button>
                </td>
        </tr>
    ));

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
                {<tbody>{expense}</tbody>} 
            </table>

        </div>
    )
}

export default ExpenseTable;

