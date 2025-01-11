const randomFunction = (windowName: string, content: React.ReactNode) => {
    setOpenWindows((prevWindows) => {
      // Check if the window is already open
      const isWindowOpen = prevWindows.some((window) => window.name === windowName);
      if (isWindowOpen) return prevWindows;
  
      // Add a new window to the openWindows array
      return [
        ...prevWindows,
        { name: windowName, icon: "/icons/app.png", minimized: false, content },
      ];
    });
  };
  
  