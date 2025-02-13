"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  FaWifi,
  FaBluetooth,
  FaPlane,
  FaBatteryHalf,
  FaCog,
  FaVolumeUp,
  FaSun,
} from "react-icons/fa";

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

export default function ActionCenter() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [brightness, setBrightness] = useState(50);
  const [volume, setVolume] = useState(50);
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

  return (
    <div className="relative">
      <button
        className="flex items-center hover:bg-zinc-800 gap-1 m-0 py-2 px-1 rounded"
        onClick={togglePanel}
        aria-label="Open Action Center"
      >
        {systemTrayIcons.map((icon) => (
          <div key={icon.id} className="p-1 rounded" aria-label={icon.alt}>
            <Image src={icon.src} alt={icon.alt} width={15} height={16} />
          </div>
        ))}
      </button>
      {isPanelOpen && (
        <div
          ref={panelRef}
          className="absolute bottom-full right-0 left-[-137] mb-2 w-80 rounded-lg shadow-lg overflow-hidden bg-zinc-900 text-white"
        >
          <div className="p-4">
            {/* Top Actions */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-700 hover:bg-zinc-600 cursor-pointer">
                <FaWifi size={24} className="mb-1" />
                <span className="text-xs">NARZO 70</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-700 hover:bg-zinc-600 cursor-pointer">
                <FaBluetooth size={24} className="mb-1" />
                <span className="text-xs">Not connected</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-700 hover:bg-zinc-600 cursor-pointer">
                <FaPlane size={24} className="mb-1" />
                <span className="text-xs">Airplane mode</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-700 hover:bg-zinc-600 cursor-pointer">
                <FaBatteryHalf size={24} className="mb-1" />
                <span className="text-xs">Battery saver</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-700 hover:bg-zinc-600 cursor-pointer">
                <span className="text-xl">♿</span>
                <span className="text-xs">Accessibility</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-700 hover:bg-zinc-600 cursor-pointer">
                <span className="text-xl">📁</span>
                <span className="text-xs">Project</span>
              </div>
            </div>
            {/* Sliders */}
            <div className="mb-4">
              {/* Brightness */}
              <div className="flex items-center gap-2 mb-3">
                <FaSun size={20} />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="w-full bg-gray-700 rounded-full h-1 slider-thumb"
                />
              </div>
              {/* Volume */}
              <div className="flex items-center gap-2">
                <FaVolumeUp size={20} />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full bg-gray-700 rounded-full h-1 slider-thumb"
                />
              </div>
            </div>
            {/* Bottom Actions */}
            <div className="flex justify-between items-center">
              <span className="text-sm">26%</span>
              <div className="flex gap-4">
                <FaCog
                  size={20}
                  className="cursor-pointer hover:text-gray-400"
                />
                <FaBatteryHalf
                  size={20}
                  className="cursor-pointer hover:text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
