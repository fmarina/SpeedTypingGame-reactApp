import {useState, useEffect, useRef} from 'react';

function useTypingGame(initialTime = 10) {

    const [ text, setText ] = useState("");
    const [ countTimer, setCountTimer ] = useState(initialTime);
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
        setCountTimer(initialTime);
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

    return {
        textareaRef, text, handleChange, isTimeRunning, wordCount, startGame, countTimer
    };
}

export default useTypingGame;