import React, { useState } from 'react';

interface WindowProps {
  title: string;
  iconSrc: string;
  onClose: () => void;
  onMinimize: () => void;
  children: React.ReactNode;
}

export default function Window({ title, iconSrc, onClose, onMinimize, children }: WindowProps) {
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
    <>
      {isVisible && (
        <div
          className={`window bg-gray-800 border border-gray-600 rounded-lg shadow-lg transition-all duration-300 ${
            isMaximized
              ? 'fixed top-0 left-0 right-0 m-0' // full screen without margins
              : 'relative w-auto h-auto'
          }`}
          style={{
            height: isMaximized ? 'calc(100vh - 54px)' : 'auto', // Adjusts for taskbar height (54px)
            bottom: isMaximized ? '54px' : 'auto', // Prevents overlap with taskbar when maximized
          }}
        >
          {/* Window header */}
          <div className="flex justify-between items-center bg-gray-700 p-2 rounded-t-lg">
            <div className="flex items-center">
              <img src={iconSrc} alt={title} className="w-6 h-6 mr-2" />
              <span className="text-white font-bold">{title}</span>
            </div>
            <div className="flex items-center">
              {/* Minimize button */}
              <button onClick={handleMinimize} className="text-gray-400 hover:text-white mr-2">
                &#x2013;
              </button>
              {/* Resize button */}
              <button onClick={handleResize} className="text-gray-400 hover:text-white mr-2">
                {isMaximized ? '🗗' : '🗖'}
              </button>
              {/* Close button */}
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                &times;
              </button>
            </div>
          </div>
          
          {/* Window content */}
          <div className="p-4 overflow-auto h-full bg-white rounded-b-lg">{children}</div>
        </div>
      )}
    </>
  );
}
