"use client";

import React, { createContext, useContext, useState } from "react";

type WindowInfo = {
  name: string;
  icon: string;
  minimized: boolean;
  content?: React.ReactNode;
};

type WindowManagerContextType = {
  openWindows: WindowInfo[];
  openWindow: (name: string, icon: string, content?: React.ReactNode) => void;
  closeWindow: (name: string) => void;
  toggleMinimizeWindow: (name: string) => void;
};

const WindowManagerContext = createContext<WindowManagerContextType | null>(
  null
);

export const WindowManagerProvider = ({ children }: { children: React.ReactNode }) => {
  const [openWindows, setOpenWindows] = useState<WindowInfo[]>([]);

  const openWindow = (name: string, icon: string, content?: React.ReactNode) => {
    if (!openWindows.some((window) => window.name === name)) {
      setOpenWindows([
        ...openWindows,
        { name, icon, minimized: false, content },
      ]);
    }
  };

  const closeWindow = (name: string) => {
    setOpenWindows(openWindows.filter((window) => window.name !== name));
  };

  const toggleMinimizeWindow = (name: string) => {
    setOpenWindows((prev) =>
      prev.map((window) =>
        window.name === name
          ? { ...window, minimized: !window.minimized }
          : window
      )
    );
  };

  return (
    <WindowManagerContext.Provider
      value={{ openWindows, openWindow, closeWindow, toggleMinimizeWindow }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
};

export const useWindowManager = () => {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error(
      "useWindowManager must be used within a WindowManagerProvider"
    );
  }
  return context;
};
