import React, { useState, useEffect, useRef } from 'react';
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
 const [currentTime, setCurrentTime] = useState(0);
 const [entries, setEntries] = useState<TimeEntry[]>([]);
 const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);
 const [editingTitleId, setEditingTitleId] = useState<string | null>(null);
 const [newTitle, setNewTitle] = useState('');
 const intervalRef = useRef<NodeJS.Timeout | null>(null);


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


 useEffect(() => {
 if (running) {
 setStartTime(Date.now() - (currentTime - startTime));
 intervalRef.current = setInterval(() => {
 setCurrentTime(Date.now());
 }, 100); // Update every 100ms for smoother UI
 } else if (intervalRef.current) {
 clearInterval(intervalRef.current); // Clear interval when not running
 }


 return () => {
 if (intervalRef.current) {
 clearInterval(intervalRef.current); // Cleanup interval on unmount
 }
 };
 }, [running]);


 const handleStart = () => {
 if (title.trim()) {
 setRunning(true);
 setStartTime(Date.now());
 setCurrentTime(Date.now());
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
 setRunning(false);
 const newEntry = {
 id: Date.now().toString(),
 title: title,
 startTime: startTime,
 endTime: endTime,
 totalTime: endTime - startTime,
 };
 setEntries([...entries, newEntry]);
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
 const updatedEntries = entries.map((e) =>
 e.id === id ? { ...e, endTime: endTime, totalTime: splitTime } : e
 );
 setEntries(updatedEntries);
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


 const displaySeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
 const displayMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
 const displayHours = hours < 10 ? `0${hours}` : `${hours}`;


 return `${displayHours}h ${displayMinutes}m ${displaySeconds}s`;
 };


 const currentElapsedTime = running ? currentTime - startTime : 0;


 return (
 <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-4 flex pt-14">
 <div className="w-full h-full bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
 {/* Time Tracking Section */}
 <div className="md:w-1/2 p-8 flex flex-col justify-between">
 <div>
 <div className="uppercase tracking-wide text-sm text-indigo-400 font-semibold">Time Tracker</div>
 <h1 className="mt-1 text-3xl leading-tight font-medium text-white">Track Your Time</h1>
 <p className="mt-2 text-gray-400">Stay productive and organized.</p>
 <div className="mt-6">
 <input
 type="text"
 value={title}
 onChange={(e) => setTitle(e.target.value)}
 placeholder="Enter Task Title"
 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
 />
 <div className="mt-4 flex justify-start items-center space-x-4">
 {!running ? (
 <button
 onClick={handleStart}
 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
 >
 <FaPlay className="inline-block mr-2" /> Start
 </button>
 ) : (
 <button
 onClick={handlePause}
 className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
 >
 <FaPause className="inline-block mr-2" /> Pause
 </button>
 )}
 <button
 onClick={handleStop}
 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
 >
 <FaStop className="inline-block mr-2" /> Stop
 </button>
 </div>
 <div className="mt-4">
 <p className="text-gray-300 font-semibold">Current Time: {msToTime(currentElapsedTime)}</p>
 </div>
 </div>
 </div>
 {/* Add some visual flair to the bottom of the section */}
 <div className="text-center text-gray-500 text-sm">
 &copy; 2024 TimeTracker App
 </div>
 </div>
 {/* Time Entries Section */}
 <div className="md:w-1/2 p-6 bg-gray-700 border-l border-gray-600">
 <h2 className="text-xl font-bold mb-2 text-white">Time Entries</h2>
 <div className="overflow-y-auto pr-2 h-96 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 scrollbar-thumb-rounded-md">
 {entries.map((entry) => (
 <div
 key={entry.id}
 className="bg-gray-800 rounded-lg p-4 mb-2 shadow-sm border border-gray-700"
 >
 {editingTitleId === entry.id ? (
 <div className="flex items-center">
 <input
 type="text"
 value={newTitle}
 onChange={(e) => setNewTitle(e.target.value)}
 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 mr-2"
 />
 <button
 onClick={() => handleSaveTitle(entry.id)}
 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
 >
 Save
 </button>
 </div>
 ) : (
 <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
 )}
 <p className="text-gray-400">{new Date(entry.startTime).toLocaleString()} - {entry.endTime ? new Date(entry.endTime).toLocaleString() : 'Running...'}</p>
 <p className="text-gray-400">Total Time: {msToTime(entry.totalTime)}</p>
 <div className="flex justify-end mt-2 space-x-2">
 <button
 onClick={() => startEditingTitle(entry.id, entry.title)}
 className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
 >
 <FaEdit className="inline-block" />
 </button>
 <button
 onClick={() => handleSplit(entry.id)}
 className="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
 >
 Split
 </button>
 <button
 onClick={() => handleDelete(entry.id)}
 className="bg-red-700 hover:bg-red-900 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
 >
 <FaTrash className="inline-block" />
 </button>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 );
};


export default TimeTracker;
