import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [stopwatch, setStopwatch] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  // Update the clock every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Stopwatch logic
useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setStopwatch((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  // Timer logic
useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timerRunning, timer]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-100">
      {/* Clock */}
      <div className="text-5xl font-bold mb-6">{time.toLocaleTimeString()}</div>
      
      {/* Stopwatch */}
      <div className="mb-6">
        <h2 className="text-3xl mb-2">Stopwatch</h2>
        <div className="text-4xl font-semibold">{new Date(stopwatch * 1000).toISOString().substr(11, 8)}</div>
        <div className="mt-4 space-x-4">
          <button className="px-4 py-2 bg-gray-700 rounded" onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button className="px-4 py-2 bg-gray-700 rounded" onClick={() => { setStopwatch(0); setIsRunning(false); }}>
            Reset
          </button>
        </div>
      </div>
      
      {/* Timer */}
      <div>
        <h2 className="text-3xl mb-2">Timer</h2>
        <input
          type="number"
          className="w-20 p-2 bg-gray-700 text-center rounded mb-2"
          value={timer}
          onChange={(e) => setTimer(Number(e.target.value))}
        />
        <div className="text-4xl font-semibold">{new Date(timer * 1000).toISOString().substr(11, 8)}</div>
        <div className="mt-4 space-x-4">
          <button className="px-4 py-2 bg-gray-700 rounded" onClick={() => setTimerRunning(!timerRunning)}>
            {timerRunning ? "Pause" : "Start"}
          </button>
          <button className="px-4 py-2 bg-gray-700 rounded" onClick={() => { setTimer(0); setTimerRunning(false); }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;
