import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      },10);
    }else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[running]);

  return (
    <>
    <div id='box'>
    <h1 className='stop'>Stopwatch</h1>
    <div className='timer'>
      <span>{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
    <div id='buttons'>

      {running ? (
        <button id = "stop" onClick={() => {setRunning(false)}}>Stop</button>
      ) : (
        <button id='start' onClick={() => {setRunning(true)}}>Start</button>
      ) 
      }
      
      
      <button onClick={() => {setTime(0)}}>Reset</button>

     </div>
    </div>
    </>
  )
}

export default App