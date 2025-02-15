"use client"

import React from "react";
import "react-calendar/dist/Calendar.css";
import { CalendarMain } from "./Calendar";

interface PanelProps {
  onClose: () => void;
}

export default function CalendarNotificationPanel({ onClose }: PanelProps) {

  return (
    <div className="absolute bottom-full right-0 mb-2 w-72 text-white shadow-lg rounded-md overflow-hidden z-50 animate-slide-in flex flex-col gap-2">
      <div className="flex bg-zinc-900 flex-col rounded h-full">
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-md text-white flex align-center items-center">Notifications</h2>
        <button onClick={onClose} className="text-gray-400 px-1 rounded bg-zinc-800 hover:text-white">
          &#x2715;
        </button>
      </div>

      {/* Notifications Area */}
      <div className="p-4 ">
        <div className="text-gray-400">No new notifications</div>
      </div>
      </div>

      {/* Calendar Section */}
      <div className="p-4 bg-zinc-900">
        <CalendarMain/>
      </div>
    </div>
  );
}
