import React, { useState } from 'react';

const EmailForm = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    //   const response = await fetch(`${process.env.REACT_APP_BACKEND_API }/email`, {
    const response = await fetch('http://localhost:3001/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ to, subject, text })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setError('');
      } else {
        setMessage('');
        setError(data.message || 'Failed to send email');
      }
    } catch (err) {
      setMessage('');
      setError('Failed to send email');
      console.error('Error sending email:', err);
    }
  };

  return (
    <div className='container'>
        <div className='inputContainer'>
            <h2 className='email-header'>Send Email</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label className='email-text-input'>From:</label>
                <input  className='email-text' type="email" value={to} onChange={(e) => setTo(e.target.value)} required />
                </div>
                <div>
                <label className='email-text-input'>Subject:</label>
                <input className='email-text' type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                </div>
                <div>
                <label className='email-text-input'>Message:</label>
                <textarea className='email-text-input textarea' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <button className='button' type="submit">Send Email</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'white' }}>{error}</p>}
      </div>
    </div>
  );
};

export default EmailForm;
