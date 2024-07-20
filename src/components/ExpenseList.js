import React, { useEffect, useState } from 'react';

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/expenses')
      .then(response => response.json())
      .then(data => {
        setExpenses(data);
      })
      .catch(error => {
        console.error("There was an error fetching the expenses!", error);
      });
  }, []);

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.expense}: ${expense.amount} ({expense.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
