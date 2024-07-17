import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddExpense() {
    return (
        <Form>
            <br />
            <Form.Group className="mb-3">
                <Form.Label>Add Expense</Form.Label>
                <Form.Control type="text" placeholder="Expense Name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Amout</Form.Label>
                <Form.Control type="number" placeholder="Amout" />
            </Form.Group>
            {/* I have included some examples of what some expenses might be */}
            <Form.Select aria-label="Default select example">
                <option>Select Expense type</option>
                <option value="1">Morgage/Rent</option>
                <option value="2">Utilities</option>
                <option value="3">Groceries</option>
                <option value="3">Car</option>
                <option value="3">Health</option>
                <option value="3">Misc</option>
                <option value="3">Entertainment</option>
            </Form.Select>
            <br/>
            <Button className='button' type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AddExpense;