

import React, { useState } from "react";
import { FaWifi, FaBluetooth, FaPlane, FaBatteryHalf, FaCog, FaVolumeUp, FaSun } from "react-icons/fa";

export default function ActionCenter() {
  const [brightness, setBrightness] = useState(50);
  const [volume, setVolume] = useState(50);

  return (
    <div className="w-80 bg-gray-800 text-white rounded-lg shadow-lg p-4">
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
  );
}
