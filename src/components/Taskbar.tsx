"use client";
import React from "react";

// Define the type for a taskbar button
interface TaskbarProps {
  openWindows: { name: string; icon: string; minimized: boolean }[];
  toggleWindow: (appName: string) => void;
}


// Define the type for system tray buttons
interface ISystemTrayButton {
  id: number;
  src: string;
  size: { width: number; height: number };
  action: () => void;
  alt: string;
}

// Define your taskbar buttons
const taskbarButtons: ISystemTrayButton[] = [
  {
    id: 1,
    src: "/icons/Windows.png",
    size: { width: 30, height: 30 },
    action: () => console.log("Open Start Menu"),
    alt: "Windows icon",
  },
  {
    id: 2,
    src: "/icons/search-dark.svg",
    size: { width: 30, height: 30 },
    action: () => console.log("Open Search"),
    alt: "Search icon",
  },
  {
    id: 3,
    src: "/icons/Widgets.png",
    size: { width: 30, height: 30 },
    action: () => console.log("Open Widgets"),
    alt: "Widgets icon",
  },
  {
    id: 4,
    src: "/icons/chrome.svg",
    size: { width: 32, height: 32 },
    action: () => console.log("Open Chrome"),
    alt: "Chrome",
  },
  {
    id: 5,
    src: "/icons/microsoft.png",
    size: { width: 32, height: 32 },
    action: () => console.log("Open Edge"),
    alt: "Edge",
  },
  {
    id: 6,
    src: "/icons/app.png",
    size: { width: 32, height: 32 },
    action: () => console.log("Open FileExplorer"),
    alt: "FileExplorer",
  },
  {
    id: 7,
    src: "/icons/github.svg",
    size: { width: 34, height: 34 },
    action: () => window.open("https://github.com/Camp4er", "_blank"),
    alt: "GitHub icon",
  },
  {
    id: 8,
    src: "icons/bash.png",
    size: { width: 32, height: 32 },
    action: () => console.log("Open Terminal"),
    alt: "Terminal",
  },
  {
    id: 9,
    src: "/icons/day.png",
    size: { width: 33, height: 33 },
    action: () => console.log("Toggle theme"),
    alt: "Toggle theme",
  },
];

const Taskbar = ({ openWindows, toggleWindow }: TaskbarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[rgba(3,_21,_41,0.35)] backdrop-filter backdrop-blur-md text-white flex items-center justify-between px-4 h-[54px]">
      {/* Shortcut Button */}
      <button className="flex items-center gap-2">
        <img
          src="/icons/shortcut.png"
          alt="Windows icon"
          width={28}
          height={28}
        />
        <span>Shortcuts</span>
      </button>

      {/* Taskbar Buttons */}
      <div className="flex items-center justify-center gap-1">
        {taskbarButtons.map((button) => (
          <button
            key={button.id}
            onClick={button.action}
            className="flex items-center hover:bg-gray-600 p-2 rounded"
          >
            <img
              src={button.src}
              alt={button.alt}
              width={button.size.width}
              height={button.size.height}
            />
          </button>
        ))}
      </div>

      {/* Open window icons */}
      <div className="flex items-center gap-2">
        {openWindows.map((window) => (
          <button
            key={window.name}
            onClick={() => toggleWindow(window.name)}
            className={`flex items-center p-2 rounded ${window.minimized ? "bg-gray-600" : ""}`}
          >
            <img src={window.icon} alt={window.name} width={28} height={28} />
          </button>
        ))}
      </div>

      {/* Placeholder for open window icons */}

      {/* System Tray (Placeholder Icons for Battery, Volume, etc.) */}
      <div className="flex items-center space-x-3 pr-4">
        <img src="/icons/volume.png" alt="Volume" width={20} height={20} />
        <img src="/icons/battery.png" alt="Battery" width={20} height={20} />
        <img src="/icons/wifi.png" alt="Wi-Fi" width={20} height={20} />
      </div>
    </div>
  );
};

export default Taskbar;
