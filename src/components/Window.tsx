"use client";

import Image from "next/image";
import React, { useState } from "react";

interface WindowProps {
  title: string;
  iconSrc: string;
  onClose: () => void;
  onMinimize: () => void;
  children: React.ReactNode;
}

export default function Window({
  title,
  iconSrc,
  onClose,
  onMinimize,
  children,
}: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleResize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleMinimize = () => {
    setIsVisible(false);
    onMinimize();
  };

  const handleRestore = () => {
    setIsVisible(true);
  };

  return (
    <div className="window w-full h-full relative h-[calc(100vh - 54px)]">
      {isVisible && (
        <div
          className={`window bg-gray-900 border border-gray-600 shadow-lg overflow-scroll scrollbar-none transition-all duration-300 ${
            isMaximized
              ? "fixed top-0 left-0 right-0 m-0 " // full screen without margins
              : "fixed top-1/4 bottom-1/8 left-1/4 right-1/4 w-[578.8px] h-[437.75px] max-h-[60%] transform -translate-y-1/4" //center the window
          }`}
          style={{
            height: isMaximized ? "calc(100vh - 54px)" : "auto", // Adjusts for taskbar height (54px)
            bottom: isMaximized ? "54px" : undefined, // Prevents overlap with taskbar when maximized
            width: isMaximized ? "100%" : "auto", // Ensure full width when maximized
            maxWidth: !isMaximized ? "90%" : undefined, // Prevent window from being too wide when not maximized
          }}
        >
          {/* Window header */}
          <div className="flex justify-between items-center bg-gray-900 p-1 rounded-t-lg sticky top-0 z-20">
            <div className="flex items-center">
              <Image src={iconSrc} alt={title} className="w-6 h-6 ml-1 mr-2" />
              <span className="text-white font-bold">{title}</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Minimize button */}
              <button
                onClick={handleMinimize}
                className="text-gray-400 text-2xl rounded hover:bg-gray-700 px-2 py-1"
              >
                &#x2013;
              </button>
              {/* Resize button */}
              <button
                onClick={handleResize}
                className="text-gray-400 text-xl rounded hover:bg-gray-700 px-2 py-1"
              >
                {isMaximized ? "🗗" : "🗖"}
              </button>
              {/* Close button */}
              <button
                onClick={onClose}
                className="text-gray-400 text-2xl rounded hover:bg-red-600 hover:text-white px-2 py-1"
              >
                &times;
              </button>
            </div>
          </div>

          {/* Window content */}
          <div className="rounded-b-lg overflow-y-auto" style={{height: "calc(100% - 54px)", overflow: "auto" }}>{children}</div>
        </div>
      )}
    </div>
  );
}
