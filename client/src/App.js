import React, { useEffect, useState } from 'react';
import './App.css';
import Customers from './Customers';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
      </header>
      <main>
        <Customers />
      </main>
    </div>
  );
}

export default App;