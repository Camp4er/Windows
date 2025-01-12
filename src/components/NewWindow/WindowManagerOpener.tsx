"use client"

import React, { createContext, useContext, useState } from "react";

type WindowInfo = {
  name: string;
  icon: string;
  minimized: boolean;
  content?: string;
};

type WindowManagerContextType = {
  openWindows: WindowInfo[];
  randomFunction: (windowName: string, content: string) => void;
  closeWindow: (windowName: string) => void;
};

const WindowManagerContext = createContext<WindowManagerContextType | null>(null);

export const WindowManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openWindows, setOpenWindows] = useState<WindowInfo[]>([]);

  const randomFunction = (windowName: string, content: string) => {
    if (!openWindows.some((window) => window.name === windowName)) {
      const icon = `/icons/${windowName.toLowerCase()}.png`; // Dynamically set the icon path
      setOpenWindows([...openWindows, { name: windowName, icon, minimized: false, content }]);
    }
  };

  const closeWindow = (windowName: string) => {
    setOpenWindows(openWindows.filter((window) => window.name !== windowName));
  };

  return (
    <WindowManagerContext.Provider value={{ openWindows, randomFunction, closeWindow }}>
      {children}
    </WindowManagerContext.Provider>
  );
};

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error("useWindowManager must be used within a WindowManagerProvider");
  }
  return context;
};
