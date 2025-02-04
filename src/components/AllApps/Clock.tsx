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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-start p-6 space-y-8 overflow-hidden">
      {/* Main Clock */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl text-gray-400 font-light">Current Time</h1>
        <div className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          {time.toLocaleTimeString()}
        </div>
        <p className="text-gray-400 text-lg">
          {time.toLocaleDateString('en-IN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch w-full max-w-6xl gap-8 px-8">
        {/* Stopwatch Card */}
        <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 flex-1 min-w-[400px] h-[350px] shadow-xl border border-gray-700/30 flex flex-col">
          <h2 className="text-xl text-gray-300 mb-4 font-semibold">Stopwatch</h2>
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-5xl font-mono text-blue-400 mb-6">
              {new Date(stopwatch * 1000).toISOString().substr(11, 8)}
            </div>
            <div className="flex justify-center space-x-4 mt-auto">
              <button 
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  isRunning 
                    ? 'bg-red-500/90 hover:bg-red-400' 
                    : 'bg-emerald-500/90 hover:bg-emerald-400'
                }`}
                onClick={() => setIsRunning(!isRunning)}
              >
                {isRunning ? "⏸ Pause" : "▶ Start"}
              </button>
              <button 
                className="px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl transition-all"
                onClick={() => { setStopwatch(0); setIsRunning(false); }}
              >
                ↺ Reset
              </button>
            </div>
          </div>
        </div>

        {/* Timer Card */}
        <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 flex-1 min-w-[400px] h-[350px] shadow-xl border border-gray-700/30 flex flex-col">
          <h2 className="text-xl text-gray-300 mb-4 font-semibold">Timer</h2>
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-6">
              <input
                type="number"
                className="w-32 p-3 text-center bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400/50 font-mono text-xl mx-auto"
                value={timer}
                onChange={(e) => setTimer(Number(e.target.value))}
                placeholder="Seconds"
              />
              <div className="text-5xl font-mono text-purple-400">
                {new Date(timer * 1000).toISOString().substr(11, 8)}
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-auto">
              <button 
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  timerRunning 
                    ? 'bg-red-500/90 hover:bg-red-400' 
                    : 'bg-emerald-500/90 hover:bg-emerald-400'
                }`}
                onClick={() => setTimerRunning(!timerRunning)}
              >
                {timerRunning ? "⏸ Pause" : "▶ Start"}
              </button>
              <button 
                className="px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl transition-all"
                onClick={() => { setTimer(0); setTimerRunning(false); }}
              >
                ↺ Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
