import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo1.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="navbar-div" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <img src={logo} className="img-thumbnail logo" alt="logo of our app" />
                        <Link className="nav-link text-white" to="/">Home</Link>
                        <Link className="nav-link text-white" to="./ExpenseList">ExpenseList</Link>
                        <Link className="nav-link text-white" to="./AddExpense">AddExpense</Link>
                        {/* <Link className="nav-link text-white" to="./EditExpense">EditExpense</Link> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;