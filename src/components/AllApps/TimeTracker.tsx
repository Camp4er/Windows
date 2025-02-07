import React, { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaStop, FaTrash, FaEdit } from 'react-icons/fa';

interface TimeEntry {
  id: string;
  title: string;
  startTime: number;
  endTime: number | null;
  totalTime: number;
}

const TimeTracker: React.FC = () => {
  const [title, setTitle] = useState('');
  const [running, setRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [entries, setEntries] = useState<TimeEntry[]>([]);
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);
  const [editingTitleId, setEditingTitleId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    // Load data from local storage on component mount
    const storedEntries = localStorage.getItem('timeEntries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  useEffect(() => {
    // Save data to local storage whenever entries change
    localStorage.setItem('timeEntries', JSON.stringify(entries));
  }, [entries]);

  const handleStart = () => {
    if (title.trim()) {
      setRunning(true);
      setStartTime(Date.now());
    } else {
      alert('Please enter a title for this time entry.');
    }
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleStop = () => {
    if (running) {
      const endTime = Date.now();
      const newEntry = {
        id: Date.now().toString(),
        title: title,
        startTime: startTime,
        endTime: endTime,
        totalTime: endTime - startTime,
      };
      setEntries([...entries, newEntry]);
      setRunning(false);
      setTitle('');
    }
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleSplit = (id: string) => {
    const entry = entries.find((entry) => entry.id === id);
    if (entry) {
      const endTime = Date.now();
      const splitTime = endTime - entry.startTime;

      // Adjust the current entry
      const updatedEntries = entries.map((e) =>
        e.id === id ? { ...e, endTime: endTime, totalTime: splitTime } : e
      );
      setEntries(updatedEntries);

      // Create a new entry
      const newEntry = {
        id: Date.now().toString(),
        title: entry.title + ' (Split)',
        startTime: endTime,
        endTime: null,
        totalTime: 0,
      };
      setEntries([...updatedEntries, newEntry]);
    }
  };

  const startEditingTitle = (id: string, currentTitle: string) => {
    setEditingTitleId(id);
    setNewTitle(currentTitle);
  };

  const handleSaveTitle = (id: string) => {
    const updatedEntries = entries.map((entry) =>
      entry.id === id ? { ...entry, title: newTitle } : entry
    );
    setEntries(updatedEntries);
    setEditingTitleId(null);
  };

  const msToTime = (duration: number) => {
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Time Tracker</h1>

      {/* Input and Controls */}
      <div className="flex w-full max-w-md mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
          className="p-3 w-full bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        />
        <div className="ml-3 flex">
          {!running ? (
            <button
              onClick={handleStart}
              className="bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              <FaPlay />
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="bg-yellow-500 px-5 py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              <FaPause />
            </button>
          )}
          <button
            onClick={handleStop}
            className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition ml-2"
          >
            <FaStop />
          </button>
        </div>
      </div>

      {/* Entries List */}
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Time Entries</h2>
        {entries.map((entry) => (
          <div
            key={entry.id}
            className={`bg-gray-800 rounded-lg p-4 mb-2 shadow-md ${selectedEntryId === entry.id ? 'border-2 border-blue-500' : ''}`}
          >
            {editingTitleId === entry.id ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400 mr-2"
                />
                <button
                  onClick={() => handleSaveTitle(entry.id)}
                  className="bg-green-500 px-3 py-1 rounded-lg hover:bg-green-600 transition"
                >
                  Save
                </button>
              </div>
            ) : (
              <h3 className="text-xl font-semibold">{entry.title}</h3>
            )}
            <p className="text-gray-400">
              {new Date(entry.startTime).toLocaleString()} - {entry.endTime ? new Date(entry.endTime).toLocaleString() : 'Running...'}
            </p>
            <p className="text-gray-400">Total Time: {msToTime(entry.totalTime)}</p>
            <div className="flex justify-end mt-2">
              <button
                onClick={() => startEditingTitle(entry.id, entry.title)}
                className="text-blue-500 hover:text-blue-400 mr-2"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleSplit(entry.id)}
                className="text-yellow-500 hover:text-yellow-400 mr-2"
              >
                Split
              </button>
              <button
                onClick={() => handleDelete(entry.id)}
                className="text-red-500 hover:text-red-400"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTracker;
