import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const INITIAL_TIME = 10;

  const [ text, setText ] = useState("");
  const [ countTimer, setCountTimer ] = useState(INITIAL_TIME);
  const [ isTimeRunning, setIsTimeRunning ] = useState(false)
  const [ wordCount, setWorkCount ] = useState(0);
  const textareaRef = useRef(null);

  const calculateWords = (text) => {
    const totalWords = text.trim().split(" ").filter(word => word !== "").length;
    return totalWords;    
  };

  const handleChange = (e) => setText(e.target.value);

  const startGame = () => {
    setIsTimeRunning(true);    
    setCountTimer(INITIAL_TIME);
    setText("");      
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  };

  const resetGame = () => {
    setIsTimeRunning(false);
    setWorkCount(calculateWords(text));
  }

  useEffect(() => {
    (isTimeRunning && countTimer > 0)
    ? setTimeout(() => {        
        setCountTimer(prevCount => prevCount - 1);
      }, 1000)
    : (countTimer === 0) && resetGame();
  }, [countTimer, isTimeRunning]);


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
