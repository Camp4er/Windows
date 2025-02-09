// components/SearchMenu.tsx
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useWindowManager } from "@/components/NewWindow/WindowManagerContext";
import Image from "next/image";


interface App {
 name: string;
 icon: string;
 type: string;
 action: () => void;
 children?: App[];
}


const recommendedFiles = [
 { name: "Resume", icon: "/icons/pdf.png", time: "Yesterday at 12:44 PM" },
 { name: "Notepad", icon: "/icons/notepad.png", time: "Friday at 11:56 AM" },
 {
 name: "LinkedIn",
 icon: "/icons/linkedin.png",
 time: "Thursday at 11:10 PM",
 },
 {
 name: "Time Tracker",
 icon: "/icons/time-tracking.png",
 time: "Thursday at 11:09 PM",
 },
];


const allApps: App[] = [
 { name: "Minesweeper", icon: "/icons/bomb.png", type: "file", action: () => {} },
 { name: "Rock Paper Scissors", icon: "/icons/rock-paper-scissors.png", type: "file", action: () => {} },
 { name: "Tic-Tac-Toe", icon: "/icons/tictactoe.png", type: "file", action: () => {} },
 { name: "Feedback Hub", icon: "/icons/review.png", type: "file", action: () => {} },
 { name: "Calculator", icon: "/icons/calculator.png", type: "file", action: () => {} },
 { name: "Calendar", icon: "/icons/calendar.png", type: "file", action: () => {} },
 { name: "Camera", icon: "/icons/camera.png", type: "file", action: () => {} },
 { name: "File Explorer", icon: "/icons/app.png", type: "file", action: () => {} },
 {
 name: "Chrome Apps",
 icon: "/icons/folder.png",
 type: "folder",
 action: () => {},
 children: [
 { name: "Google Chrome", icon: "/icons/chrome.svg", type: "file", action: () => {} },
 { name: "Youtube", icon: "/icons/youtube.png", type: "file", action: () => {} },
 ],
 },
 {
 name: "Game Bar",
 icon: "/icons/folder.png",
 type: "folder",
 action: () => {},
 children: [
 { name: "Snakeats", icon: "/icons/snake.png", type: "file", action: () => {} },
 { name: "Minesweeper", icon: "/icons/bomb.png", type: "file", action: () => {} },
 { name: "Rock Paper Scissors", icon: "/icons/rock-paper-scissors.png", type: "file", action: () => {} },
 { name: "Tic-Tac-Toe", icon: "/icons/tictactoe.png", type: "file", action: () => {} },
 ],
 },
 { name: "Google Chrome", icon: "/icons/chrome.svg", type: "file", action: () => {} },
 { name: "Microsoft Edge", icon: "/icons/microsoft.png", type: "file", action: () => {} },
 { name: "Paint", icon: "/icons/paint.png", type: "file", action: () => {} },
 { name: "Youtube", icon: "/icons/Youtube.png", type: "file", action: () => {} },
 { name: "Clock", icon: "/icons/clock.png", type: "file", action: () => {} },
 { name: "Notepad", icon: "/icons/notepad.png", type: "file", action: () => {} },
 { name: "Photos", icon: "/icons/gallery.png", type: "file", action: () => {} },
 { name: "Terminal", icon: "/icons/bash.png", type: "file", action: () => {} },
 { name: "Visual Studio Code", icon: "/icons/vscode.svg", type: "file", action: () => {} },
 { name: "Snakeats", icon: "/icons/snake.png", type: "file", action: () => {} },
 { name: "Weather", icon: "/icons/cloud.png", type: "file", action: () => {} },
 { name: "Time Tracker", icon: "/icons/time-tracking.png", type: "file", action: () => {} },
 { name: "Sticky Notes", icon: "/icons/sticky-note.png", type: "file", action: () => {} },
].sort((a, b) => a.name.localeCompare(b.name));


const topApps: App[] = [
 { name: "Calculator", icon: "/icons/calculator.png", type: "file", action: () => {} },
 { name: "Notepad", icon: "/icons/notepad.png", type: "file", action: () => {} },
 { name: "File Explorer", icon: "/icons/app.png", type: "file", action: () => {} },
 { name: "Google Chrome", icon: "/icons/chrome.svg", type: "file", action: () => {} },
];


const SearchMenu = ({ closeMenu }: { closeMenu: () => void }) => {
 const { openWindow } = useWindowManager();
 const [searchTerm, setSearchTerm] = useState("");
 const [searchResults, setSearchResults] = useState<App[]>([]);


 useEffect(() => {
 const handleClickOutside = (event: MouseEvent) => {
 if (!(event.target as HTMLElement).closest(".search-menu")) {
 closeMenu();
 }
 };
 document.addEventListener("mousedown", handleClickOutside);
 return () => document.removeEventListener("mousedown", handleClickOutside);
 }, [closeMenu]);


 useEffect(() => {
 if (searchTerm) {
 const results = allApps.filter((app) =>
 app.name.toLowerCase().includes(searchTerm.toLowerCase())
 );
 setSearchResults(results);
 } else {
 setSearchResults([]);
 }
 }, [searchTerm]);


 const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
 setSearchTerm(e.target.value);
 };


 return (
 <div className="absolute bottom-12 left-4 w-[650px] h-[621.6px] text-white rounded-lg shadow-lg overflow-hidden start-button">
 {/* Search Bar */}
 <div className="pt-4 px-6">
 <div className="relative py-2">
 <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
 <input
 type="text"
 placeholder="Type here to search"
 className="w-full search rounded-full px-10 py-2 text-sm focus:outline-none border border-gray-700 bg-gray-700 text-white"
 onChange={handleSearch}
 value={searchTerm}
 />
 </div>
 </div>


 {/* Content Area */}
 <div className="flex h-[500px]">
 {/* Left Section */}
 <div className="w-1/2 p-4 overflow-y-auto">
 {searchTerm ? (
 // Display search results
 searchResults.length > 0 ? (
 searchResults.map((app) => (
 <div
 key={app.name}
 className="flex items-center gap-3 hover:bg-zinc-700 p-2 rounded cursor-pointer"
 onClick={app.action}
 >
 <img src={app.icon} alt={app.name} className="w-8 h-8" />
 <span className="text-sm">{app.name}</span>
 </div>
 ))
 ) : (
 <p className="text-gray-400">No results found.</p>
 )
 ) : (
 // Display top apps in the form of list:
 <div>
 {/* Top Apps Section */}
 <h3 className="text-sm text-white font-extralight">Top apps</h3>
 <ul className="mt-2 space-y-2">
 {topApps.map((app) => (
 <li
 key={app.name}
 className="flex items-center gap-3 hover:bg-zinc-700 p-2 rounded cursor-pointer"
 onClick={app.action}
 >
 <img src={app.icon} alt={app.name} className="w-8 h-8" />
 <span className="text-sm">{app.name}</span>
 </li>
 ))}
 </ul>
 </div>
 )}
 </div>


 {/* Right Section */}
 <div className="w-1/2 p-4 border-l border-gray-700">
 {searchTerm && searchResults.length > 0 ? (
 // Display details of the first search result
 <>
 <img src={searchResults[0].icon} alt={searchResults[0].name} className="w-20 h-20 mx-auto" />
 <h3 className="text-xl font-semibold mt-4 text-center">{searchResults[0].name}</h3>
 <p className="text-gray-400 text-center">Type: {searchResults[0].type}</p>
 <div className="mt-4 flex justify-center space-x-4">
 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Open</button>
 <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Run as administrator</button>
 </div>
 </>
 ) : (
 // Display Recommended Section:
 <div>
 <h3 className="text-sm text-white font-extralight">Recommended</h3>
 <ul className="mt-2">
 {recommendedFiles.map((file, index) => (
 <li
 key={index}
 className="flex justify-start gap-5 items-center text-sm hover:bg-zinc-700 p-2 rounded cursor-pointer"
 >
 <img
 src={file.icon}
 alt={file.name}
 width={30}
 height={30}
 />
 <div className="flex flex-col justify-center items-start ">
 <span>{file.name}</span>
 <span className="text-gray-400">{file.time}</span>
 </div>
 </li>
 ))}
 </ul>
 </div>
 )}
 </div>
 </div>
 </div>
 );
};


export default SearchMenu;
