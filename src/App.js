import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [ text, setText ] = useState("");
  const [ countTimer, setCountTimer ] = useState(2);
  const [isTimeRunning, setIsTimeRunning] = useState(false)

  const handleChange = (e) => setText(e.target.value);

  const calculateWords = (text) => {
    const totalWords = text.trim().split(" ").filter(word => word !== "").length;
    return totalWords;    
  };

  useEffect(() => {
    (isTimeRunning && countTimer > 0)
    ? setTimeout(() => {
        setCountTimer(prevCount => prevCount - 1);
      }, 1000)
    : setIsTimeRunning(false);
  }, [countTimer, isTimeRunning]);

  console.log("isRunning", isTimeRunning);

  return (
    <div className="app">
      <h1 className="title">How fast do you type?</h1>

      <textarea value={text} onChange={handleChange} />
      
      <h1 className="total-words"></h1>
      <button onClick={() => setIsTimeRunning(true)}>START</button>
      <h4 className="count-timer">Time reminaing: {countTimer}</h4>
    </div>
  );
}

export default App;
