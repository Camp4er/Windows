import Image from "next/image";
import { useEffect } from "react";
import { FaSearch, FaPowerOff } from "react-icons/fa";

const pinnedApps = [
  { name: "Calculator", icon: "/icons/calculator.png" },
  { name: "Edge", icon: "/icons/microsoft.png" },
  { name: "Snakeats", icon: "/icons/snake.png" },
  { name: "Calendar", icon: "/icons/calendar.png" },
  { name: "Google Chrome", icon: "/icons/chrome.svg" },
  { name: "Visual Studio Code", icon: "/icons/vscode.svg" },
  { name: "Terminal", icon: "/icons/bash.png" },
  { name: "Clock", icon: "/icons/clock.png" },
  { name: "Sticky Notes", icon: "/icons/sticky-note.png" },
  { name: "Photos", icon: "/icons/gallery.png" },
  { name: "Camera", icon: "/icons/camera.png" },
  { name: "Notepad", icon: "/icons/notepad.png" },
];

const recommendedFiles = [
  { name: "Resume", icon:"/icons/pdf.png", time: "Yesterday at 12:44 PM" },
  { name: "Notepad", icon: "/icons/notepad.png", time: "Friday at 11:56 AM" },
  { name: "LinkedIn", icon: "/icons/linkedin.png", time: "Thursday at 11:10 PM" },
  { name: "Time Tracker", icon: "/icons/time-tracking.png", time: "Thursday at 11:09 PM" },
];

const StartMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".start-menu")) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="start-menu absolute bottom-12 left-4 w-[650px] start-button text-white rounded-lg shadow-lg py-4 px-10">
      {/* Search Bar */}
      <div className="relative py-5">
        <FaSearch className="absolute left-4 bottom-[39%] text-gray-400" />
        <input
          type="text"
          placeholder="Search for apps, settings, and documents"
          className="w-full search rounded-full px-12 py-2 text-sm focus:outline-none border border-gray-700"
        />
      </div>

      {/* Pinned Apps */}
      <div className="py-4">
        <div className="flex items-center justify-between py-3">
        <h3 className="text-sm text-white font-extralight">Pinned</h3>
        <button className="text-xs small-buttons py-1 font-thin px-2 rounded text-white border border-gray-700">All&nbsp;&nbsp;&nbsp;{`>`}</button>
        </div>
        <div className="grid grid-cols-6 gap-3 mt-2">
          {pinnedApps.map((app) => (
            <div key={app.name} className="flex flex-col items-center text-center hover-color p-2 rounded">
              <img src={app.icon} alt={app.name} className="w-10 h-10 mb-1" />
              <span className="text-xs">{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Files */}
      <div className="mt-4">
        <h3 className="text-sm text-white font-extralight py-3">Recommended</h3>
        <ul className="mt-2 grid grid-cols-2">
          {recommendedFiles.map((file, index) => (
            <li key={index} className="flex justify-start gap-5 items-center text-sm hover-color p-2 rounded">
              <Image src={file.icon} alt={file.name} width={30} height={30}/>
              <div className="flex flex-col justify-center items-start ">
                <span>{file.name}</span>
                <span className="text-gray-400">{file.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom User & Power Button */}
      <div className="mt-4 flex justify-between items-center border-t border-zinc-700 pt-2">
        <span className="text-sm">Poorva Saxena</span>
        <button className="p-2 hover:bg-zinc-800 rounded-md">
          <FaPowerOff className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default StartMenu;
