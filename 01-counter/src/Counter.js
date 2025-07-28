// src/Counter.js

import React, { useState } from 'react';
import './App.css'; // ✅ Make sure this is included

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1 className="counter-title">🧮 Counter Component</h1>
      <p className="counter-value">{count}</p>
      <div>
        <button onClick={() => setCount(count + 1)} className="counter-button">➕</button>
        <button onClick={() => setCount(count - 1)} className="counter-button">➖</button>
        <button onClick={() => setCount(0)} className="reset-button">Reset</button>
      </div>
    </div>
  );
}

export default Counter;
