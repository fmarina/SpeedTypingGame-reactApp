import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="title">How fast do you type?</h1>
      <textarea />
      <h1 className="total-words">22</h1>
      <button>START</button>
      <h4 className="time-counter">Time reminaing: 15</h4>
    </div>
  );
}

export default App;
