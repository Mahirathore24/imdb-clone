import { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="timer-container">
      <h1>Timer</h1>
      <div className="timer-display">{formatTime(seconds)}</div>
      <div className="timer-controls">
        <button
          className="btn btn-start"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="btn btn-pause"
          onClick={handlePause}
          disabled={!isRunning}
        >
          Pause
        </button>
        <button className="btn btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
