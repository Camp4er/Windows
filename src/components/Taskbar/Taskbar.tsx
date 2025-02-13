"use client";
import React, { useEffect, useRef, useState } from "react";
import TaskbarRightSection from "./TaskbarRightSection";
import TaskbarLeftSection from "./TaskbarLeftSection";
import ActionCenter from "./ActionCenter";
import StartButton from "./StartButton/StartButton";
import SearchButton from "./SearchButton/SearchButton";
import Image from "next/image";

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
  { id: 1, src: "/icons/white-wifi.svg", alt: "Wi-Fi" },
  { id: 2, src: "/icons/white-volume.svg", alt: "Volume" },
  { id: 3, src: "/icons/white-battery.svg", alt: "Battery" },
];

const Taskbar = ({ openWindows, toggleWindow, openWindow }: TaskbarProps) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsPanelOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const taskbarButtons: ITaskbarButton[] = [
    {
      id: 3,
      src: "/icons/to-do-list.png",
      size: { width: 30, height: 30 },
      action: () => openWindow("Todo List", "/icons/to-do-list.png"),
      alt: "Todo list icon",
    },
    {
      id: 4,
      src: "/icons/chrome.svg",
      size: { width: 32, height: 32 },
      action: () => openWindow("Google Chrome", "/icons/chrome.svg"),
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
      action: () => openWindow("File Explorer", "/icons/app.png"),
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
      src: "icons/window.png",
      size: { width: 32, height: 32 },
      action: () => openWindow("Administrator: Windows PowerShell", "icons/window.png"),
      alt: "Administrator: Windows PowerShell",
    },
    {
      id: 9,
      src: "/icons/vscode.svg",
      size: { width: 33, height: 33 },
      action: () => openWindow("VS Code", "/icons/vscode.svg"),
      alt: "VS Code",
    },
  ];

  return (
    <div className="taskbar fixed z-50 bottom-0 left-0 right-0 bg-zinc-900 text-white flex items-center justify-between px-3 h-[54px]">
      {/* Contact Button */}
      <div
        className="flex items-center gap-2 px-1 hover:bg-zinc-800 cursor-pointer rounded"
        aria-label="Contact Me"
      >
        <Image
          src="/icons/contact-us.png"
          alt="Contact Me icon"
          width={28}
          height={28}
        />
        <TaskbarLeftSection />
      </div>

      {/* Taskbar Buttons */}
      <div className="flex items-center">
        <div className="flex items-center gap-1 pr-1">
          {/* Start and Search Buttons */}
          <div
            key="1"
            className="flex items-center hover:bg-zinc-800 cursor-pointer p-2 rounded"
            aria-label="Windows icon"
          >
            <StartButton/>
          </div>
          <div
            key="2"
            className="flex items-center hover:bg-zinc-800 p-2 rounded"
            aria-label="Search icon"
          >
            <SearchButton/>
          </div>

          {/*Rest Buttons*/}
          {taskbarButtons.map((button) => (
            <button
              key={button.id}
              onClick={button.action}
              className="flex items-center hover:bg-zinc-800 p-2 rounded"
              aria-label={button.alt}
            >
              <Image
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
              <Image src={window.icon} alt={window.name} width={32} height={32} />
            </button>
          ))}
        </div>
      </div>

      {/* System Tray */}
      <div className="flex items-center">
        <div className="flex items-center hover:bg-zinc-800 gap-1 m-0 py-2 px-1 rounded">
          <button className="p-1 rounded">
            <Image
              src="/icons/arrowup-lightmode.png"
              alt="arrow-up"
              width={15}
              height={15}
            />
          </button>
        </div>
        <div className="flex items-center hover:bg-zinc-800 gap-1 m-0 py-2 px-2 rounded">
          <button className="p-1 rounded">
            <Image
              src="/icons/onedrive.png"
              alt="arrow-up"
              width={18}
              height={18}
            />
          </button>
        </div>
        <div className="flex items-center hover:bg-zinc-800 gap-1 m-0 py-1 px-2 rounded">
          <p className="text-center text-white text-xs">
            ENG
            <br />
            IN
          </p>
        </div>
        <div className="flex items-center hover:bg-zinc-800 gap-1 m-0 rounded">
          <ActionCenter />
        </div>
        <div className="flex items-center hover:bg-zinc-800 gap-1 m-0 rounded">
          <TaskbarRightSection />
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
