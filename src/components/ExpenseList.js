import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Logo from './Logo';

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
      <h2 className='small-header'>Expense List</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.expense}: ${expense.amount} ({expense.type})  
             <Link to={`/EditExpense/${expense.id}`}>
                            <Button variant="warning" size="sm" className="ms-2 button">
                                Edit
                            </Button>
                        </Link>
          </li>
        ))}
      </ul>
            <br />
            <Logo />
    </div>
  );
}

export default ExpenseList;
