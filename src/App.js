import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [ text, setText ] = useState("");
  const [ countTimer, setCountTimer ] = useState(0);
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [ wordCount, setWorkCount ] = useState(0);

  const handleChange = (e) => setText(e.target.value);

  const calculateWords = (text) => {
    const totalWords = text.trim().split(" ").filter(word => word !== "").length;
    return totalWords;    
  };

  useEffect(() => {
    if(isTimeRunning && countTimer > 0){
    setTimeout(() => {
        setCountTimer(prevCount => prevCount - 1);
      }, 1000)
    } else if (countTimer === 0) {
      setIsTimeRunning(false);
      setWorkCount(calculateWords(text));
    }
  }, [countTimer, isTimeRunning]);

  return (
    <div className="app">
      <h1 className="title">How fast do you type?</h1>

      <textarea value={text} onChange={handleChange} />
      
      <h1 className="total-words">{wordCount}</h1>
      <button onClick={() => setIsTimeRunning(true)}>START</button>
      <h4 className="count-timer">Time reminaing: {countTimer}</h4>
    </div>
  );
}

export default App;
