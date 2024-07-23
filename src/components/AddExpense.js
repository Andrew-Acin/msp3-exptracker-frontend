import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Logo from './Logo';

function AddExpense() {
    const [expenseName, setExpenseName] = useState('');
    const [amount, setAmount] = useState('');
    const [expenseType, setExpenseType] = useState('');
    const navigate = useNavigate();
    

    const handleSubmit = (event) => {
        event.preventDefault();


        // Create an expense object
        const newExpense = {
            expense: expenseName,
            amount: parseFloat(amount),
            type: expenseType
        };

        // Send the expense object to the backend API
        fetch('http://localhost:3001/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newExpense)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data)
            setExpenseName('')
            setAmount('')
            setExpenseType('');
            navigate('/ExpenseList')
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <br />
            <Form.Group className="mb-3">
                <Form.Label>Add Expense</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Expense Name" 
                    value={expenseName}
                    onChange={(e) => setExpenseName(e.target.value)} 
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Amount" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} 
                />
            </Form.Group>
            <Form.Select 
                aria-label="Default select example"
                value={expenseType}
                onChange={(e) => setExpenseType(e.target.value)}
            >
                <option value="">Select Expense type</option>
                <option value="Mortgage/Rent">Mortgage/Rent</option>
                <option value="Utilities">Utilities</option>
                <option value="Groceries">Groceries</option>
                <option value="Car">Car</option>
                <option value="Health">Health</option>
                <option value="Misc">Misc</option>
                <option value="Entertainment">Entertainment</option>
            </Form.Select>
            <br />
            <Button className='button' type="submit">
                Submit
            </Button>
            <br/>
            <Logo />
        </Form>
        
    );
}

export default AddExpense;
