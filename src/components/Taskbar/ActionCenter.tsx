"use client";

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
  const [panelState, setPanelState] = useState('closed');

  useEffect(() => {

    if (isPanelOpen) {
      setPanelState('opening');
      setTimeout(() => {
        setPanelState('open');
      }, 5000); // adjust the timeout to match the animation duration
    } else {
      setPanelState('closing');
      setTimeout(() => {
        setPanelState('closed');
      }, 5000); // adjust the timeout to match the animation duration
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsPanelOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPanelOpen]);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center hover:bg-zinc-800 gap-1 m-0 py-2 px-1 rounded"
        onClick={togglePanel}
      >
        {systemTrayIcons.map((icon) => (
          <div key={icon.id} className="p-1 rounded" aria-label={icon.alt}>
            <img src={icon.src} alt={icon.alt} width={15} height={16} />
          </div>
        ))}
      </button>
      <div ref={panelRef}
  className="panel"
  style={{
    transform: isPanelOpen ? 'translateY(0)' : 'translateY(100%)',
    transition: 'transform 0.5s',
  }}>
        {isPanelOpen && (
          <div
          className="absolute bottom-full left-[-137] right-0 mb-2 w-80 bg-zinc-900 text-white rounded-lg shadow-lg p-4"
          onClick={togglePanel}
        >
          {/* Top Actions */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="flex flex-col items-center p-2 bg-red-600 rounded-lg">
              <FaWifi size={24} />
              <span className="text-xs mt-1">NARZO 70</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-red-600 rounded-lg">
              <FaBluetooth size={24} />
              <span className="text-xs mt-1">Not connected</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-gray-600 rounded-lg">
              <FaPlane size={24} />
              <span className="text-xs mt-1">Airplane mode</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-gray-700 rounded-lg">
              <FaBatteryHalf size={24} />
              <span className="text-xs mt-1">Battery saver</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-gray-700 rounded-lg">
              <span>🦽</span>
              <span className="text-xs mt-1">Accessibility</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-gray-700 rounded-lg">
              <span>📁</span>
              <span className="text-xs mt-1">Project</span>
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
                className="w-full"
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
                className="w-full"
              />
            </div>
          </div>
  
          {/* Bottom Actions */}
          <div className="flex justify-between items-center">
            <span className="text-sm">26%</span>
            <div className="flex gap-4">
              <FaCog size={20} />
              <FaBatteryHalf size={20} />
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
