import React from 'react';
import './App.css';
import useTypingGame from './hooks/useTypingGame';

function App() {
  const {
    textareaRef, text, handleChange, isTimeRunning, wordCount, startGame, countTimer
  } = useTypingGame();

  return (
    <div className="app">
      <h1 className="title">How fast do you type?</h1>
      <textarea 
        ref={textareaRef}
        value={text} 
        onChange={handleChange} 
        disabled={!isTimeRunning}
      />
      <h1 className="total-words">{wordCount}</h1>
      <button disabled={isTimeRunning} onClick={startGame}>START</button>
      <h4 className="count-timer">Time reminaing: {countTimer}</h4>
    </div>
  );
}

export default App;
