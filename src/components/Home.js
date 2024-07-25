import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Graph from './Graph';


function Home() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
   fetch(`${process.env.REACT_APP_BACKEND_API}/balance`)
      .then(response => response.json())
      .then(data => setBalance(data))
      .catch(error => console.error('Error fetching balance:', error));
  }, []);

  return (
    <div>
      <br />
      <h1 className='Headers'>EXP</h1>
      {balance ? (
        <div className='Balance'>
          <h2>Bank Account Balance</h2>
          <p>Account Number: {balance.accountNumber}</p>
          <p>Balance: ${balance.balance.toFixed(2)}</p>
          <p>Currency: {balance.currency}</p>
        </div>
      ) : (
        <p>Loading balance...</p>
      )}
      <Graph />
      <Logo />
    </div>
  );
}

export default Home;
