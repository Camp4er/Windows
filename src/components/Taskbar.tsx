"use client";
import React from "react";

// Define the type for taskbar buttons
interface TaskbarProps {
  openWindows: { name: string; icon: string; minimized: boolean }[];
  toggleWindow: (appName: string) => void;
  openWindow: (appName: string, icon: string) => void;
}

interface ITaskbarButton {
  id: number;
  src: string;
  size: { width: number; height: number };
  action: () => void;
  alt: string;
}

interface ISystemTrayIcon {
  id: number;
  src: string;
  alt: string;
}

const systemTrayIcons: ISystemTrayIcon[] = [
  { id: 1, src: "/icons/volume.png", alt: "Volume" },
  { id: 2, src: "/icons/battery.png", alt: "Battery" },
  { id: 3, src: "/icons/wifi.png", alt: "Wi-Fi" },
];

const Taskbar = ({ openWindows, toggleWindow, openWindow }: TaskbarProps) => {
  const taskbarButtons: ITaskbarButton[] = [
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
      action: () => openWindow("Google Search", "/icons/chrome.svg"),
      alt: "Chrome",
    },
    {
      id: 5,
      src: "/icons/microsoft.png",
      size: { width: 32, height: 32 },
      action: () => openWindow("Microsoft Edge", "/icons/microsoft.png"),
      alt: "Edge",
    },
    {
      id: 6,
      src: "/icons/app.png",
      size: { width: 32, height: 32 },
      action: () => console.log("Open File Explorer"),
      alt: "File Explorer",
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
      action: () => openWindow("Terminal", "icons/bash.png"),
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

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[rgba(3,_21,_41,0.35)] backdrop-filter backdrop-blur-md text-white flex items-center justify-between px-4 h-[54px]">
      {/* Shortcut Button */}
      <button
        className="flex items-center gap-2 hover:bg-gray-600 p-2 rounded"
        aria-label="Shortcuts"
      >
        <img
          src="/icons/shortcut.png"
          alt="Shortcut icon"
          width={28}
          height={28}
        />
        <span>Shortcuts</span>
      </button>

      {/* Taskbar Buttons */}
      <div className="flex items-center">
        <div className="flex items-center gap-1 pr-1">
          {taskbarButtons.map((button) => (
            <button
              key={button.id}
              onClick={button.action}
              className="flex items-center hover:bg-gray-600 p-2 rounded"
              aria-label={button.alt}
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

        {/* Open Window Icons */}
        <div className="flex items-center gap-1">
          {openWindows.map((window) => (
            <button
              key={window.name}
              onClick={() => toggleWindow(window.name)}
              className={`flex items-center p-2 rounded ${
                window.minimized ? "bg-gray-600" : "bg-gray-700"
              }`}
              aria-label={window.name}
            >
              <img src={window.icon} alt={window.name} width={32} height={32} />
            </button>
          ))}
        </div>
      </div>

      {/* System Tray */}
      <div className="flex items-center hover:bg-gray-600 gap-1 m-0 py-2 rounded">
        {systemTrayIcons.map((icon) => (
          <button
            key={icon.id}
            className="p-1 rounded"
            aria-label={icon.alt}
          >
            <img src={icon.src} alt={icon.alt} width={20} height={20} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Taskbar;
