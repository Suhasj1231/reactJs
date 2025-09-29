import React, { useState, useRef } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return; // already running
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <div className="p-4">
      <h2>{seconds}s</h2>
      <button onClick={startTimer} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
        Start
      </button>
      <button onClick={stopTimer} className="bg-red-500 text-white px-3 py-1 rounded mr-2">
        Stop
      </button>
      <button onClick={resetTimer} className="bg-gray-500 text-white px-3 py-1 rounded">
        Reset
      </button>
    </div>
  );
}

export default Timer;