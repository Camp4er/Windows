"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";
import CalendarNotificationPanel from "./CalendarNotificationPanel";

export default function TaskbarRightSection() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Close panel when clicking outside
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

  // Format time to 24-hour format (HH:MM:SS)
  const formattedTime = currentTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  // Format date to DD-MM-YYYY
  const formattedDate = currentTime
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-");

  return (
    <div className="relative">
      {/* Taskbar Right Section */}
      <div
        className="flex items-center gap-2 p-1 cursor-pointer rounded-md"
        onClick={togglePanel}
      >
        <div className="text-white">
          <span className="block text-sm">{formattedTime}</span>
          <span className="block text-xs">{formattedDate}</span>
        </div>
        <div className="text-white">
          <FaBell size={17} />
        </div>
      </div>

      {/* Panel */}
      <div ref={panelRef}>
        {isPanelOpen && (
          <CalendarNotificationPanel onClose={() => setIsPanelOpen(false)} />
        )}
      </div>
    </div>
  );
}
