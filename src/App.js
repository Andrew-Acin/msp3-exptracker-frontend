import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import ExpenseList from './components/ExpenseList';
import Navbar from './components/Expbar';
import Home from './components/Home';
import EmailForm from './components/AddEmail';
import { ExpenseProvider } from './components/ExpenseContext';

function App() {
  return (
    <ExpenseProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/ExpenseList" element={<ExpenseList />} />
            <Route path="/AddExpense" element={<AddExpense />} />
            <Route path="/EditExpense/:id" element={<EditExpense />} />
            <Route path="/AddEmail" element={<EmailForm />} />
          </Routes>
        </div>
      </Router>
    </ExpenseProvider>
  );
}



export default App;
