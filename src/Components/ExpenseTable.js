import React from 'react';

const ExpenseTable = (props) => {
    //const expense = props.expenseItems.map((expense) => (
        //<tr key={props.id}>
            //<td>{expense.date}</td>
            //<td>{expense.amount}</td>
            //<td>{expense.paymentMethod}</td>
            //<td>{expense.description}</td>
            //<td>{expense.purchaseLocation}</td>
        //</tr>
    //))

    return (
        <div>
            <table className=" mt-3 table table-striped table-bordered table-hover">
                <thead>
                    <tr className="mt-3 table-dark">
                        <th>Date</th>
                        <th>Price</th>
                        <th>Payment Method</th>
                        <th>Description</th>
                        <th>Location</th>
                    </tr>
                </thead>
                {/* <tobdy>{expense}</tobdy> */}
            </table>

        </div>
    )
}

export default ExpenseTable;

