import React, { useState, useEffect } from 'react';


function Home() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/balance')
      .then(response => response.json())
      .then(data => setBalance(data))
      .catch(error => console.error('Error fetching balance:', error));
  }, []);

  return (
    <div>
      <br />
      <h1 className='Headers'>EXP</h1>
      {balance ? (
        <div>
          <h2>Account Balance</h2>
          <p>Account Number: {balance.accountNumber}</p>
          <p>Balance: ${balance.balance.toFixed(2)}</p>
          <p>Currency: {balance.currency}</p>
        </div>
      ) : (
        <p>Loading balance...</p>
      )}
    </div>
  );
}

export default Home;
