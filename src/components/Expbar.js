import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="navbar" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="./ExpenseList">ExpenseList</Link>
                        <Link className="nav-link" to="./AddExpense">AddExpense</Link>
                        <Link className="nav-link" to="./EditExpense">EditExpense</Link>                        
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;