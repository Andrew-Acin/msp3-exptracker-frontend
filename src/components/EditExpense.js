import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from './Logo';

function EditExpense() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [expense, setExpense] = useState({
        expense: '',
        amount: '',
        type: ''
    });

    useEffect(() => {
        fetch(`http://localhost:3001/expenses/${id}`)
            .then(response => response.json())
            .then(data => setExpense(data))
            .catch(error => console.error("There was an error fetching the expense!", error));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3001/expenses/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expense)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            navigate('/ExpenseList');
        })
        .catch(error => console.error('Error:', error));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setExpense(prevExpense => ({
            ...prevExpense,
            [name]: value
        }));
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/expenses/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            console.log('Deleted:', data)
            navigate('/ExpenseList')
        })
        .catch(error => console.error('Error:', error))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <br />
            <Form.Group className="mb-3">
                <Form.Label>Expense Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Expense Name" 
                    name="expense"
                    value={expense.expense}
                    onChange={handleChange} 
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="Amount" 
                    name="amount"
                    value={expense.amount}
                    onChange={handleChange} 
                />
            </Form.Group>
            <Form.Select 
                aria-label="Select Expense Type"
                name="type"
                value={expense.type}
                onChange={handleChange}
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
                Update
            </Button>
            <br/>
            <br/>
            <Button className='button' onClick={() => handleDelete(expense.id)}>
                Delete
            </Button>
            <br />
            <Logo />
        </Form>
    );
}

export default EditExpense;
