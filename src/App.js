import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import ExpenseList from './components/ExpenseList';
import Navbar from './components/Expbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/ExpenseList" element={<ExpenseList />} />
          <Route path="/AddExpense" element={<AddExpense />} />
          <Route path="/EditExpense" element={<EditExpense />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>EXP App</h1>
    </div>
  )
}

export default App;
