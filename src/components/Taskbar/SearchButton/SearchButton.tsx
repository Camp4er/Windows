
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useWindowManager } from "@/components/NewWindow/WindowManagerContext";
import Image from "next/image";

interface App {
  name: string;
  icon: string;
  type: string;
  action: () => void;
  children?: App[];
}

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openWindow } = useWindowManager();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<App[]>([]);

  const allApps: App[] = [
    {
      name: "Minesweeper",
      icon: "/icons/bomb.png",
      type: "App",
      action: () => openWindow("Minesweeper", "/icons/bomb.png"),
    },
    {
      name: "Rock Paper Scissors",
      icon: "/icons/rock-paper-scissors.png",
      type: "App",
      action: () => openWindow("Rock Paper Scissors", "/icons/rock-paper-scissors.png"),
    },
    {
      name: "Tic-Tac-Toe",
      icon: "/icons/tictactoe.png",
      type: "App",
      action: () => openWindow("Tic Tac Toe", "/icons/tictactoe.png"),
    },
    {
      name: "Feedback Hub",
      icon: "/icons/review.png",
      type: "App",
      action: () => openWindow("Feedback Hub", "/icons/review.png"),
    },
    {
      name: "Calculator",
      icon: "/icons/calculator.png",
      type: "App",
      action: () => openWindow("Calculator", "/icons/calculator.png"),
    },
    {
      name: "Calendar",
      icon: "/icons/calendar.png",
      type: "App",
      action: () => openWindow("Calendar", "/icons/calendar.png"),
    },
    {
      name: "Camera",
      icon: "/icons/camera.png",
      type: "App",
      action: () => openWindow("Camera", "/icons/camera.png"),
    },
    {
      name: "File Explorer",
      icon: "/icons/app.png",
      type: "System",
      action: () => openWindow("File Explorer", "/icons/app.png"),
    },
    {
      name: "Google Chrome",
      icon: "/icons/chrome.svg",
      type: "App",
      action: () => openWindow("Google Chrome", "/icons/chrome.svg"),
    },
    {
      name: "Microsoft Edge",
      icon: "/icons/microsoft.png",
      type: "App",
      action: () => openWindow("Microsoft Edge", "/icons/microsoft.png"),
    },
    { name: "Paint", icon: "/icons/paint.png", type: "App", action: () => openWindow("Paint", "/icons/paint.png") },
    {
      name: "Youtube",
      icon: "/icons/Youtube.png",
      type: "App",
      action: () => openWindow("Youtube", "/icons/Youtube.png"),
    },
    { name: "Clock", icon: "/icons/clock.png", type: "App", action: () => openWindow("Clock", "/icons/clock.png") },
    {
      name: "Notepad",
      icon: "/icons/notepad.png",
      type: "App",
      action: () => openWindow("Notepad", "/icons/notepad.png"),
    },
    {
      name: "Photos",
      icon: "/icons/gallery.png",
      type: "App",
      action: () => openWindow("Photos", "/icons/gallery.png"),
    },
    {
      name: "Administrator: Windows PowerShell",
      icon: "/icons/window.png",
      type: "App",
      action: () => openWindow("Administrator: Windows PowerShell", "/icons/window.png"),
    },
    {
      name: "Visual Studio Code",
      icon: "/icons/vscode.svg",
      type: "App",
      action: () => openWindow("Visual Studio Code", "/icons/vscode.svg"),
    },
    {
      name: "Snakeats",
      icon: "/icons/snake.png",
      type: "App",
      action: () => openWindow("Snakeats", "/icons/snake.png"),
    },
    {
      name: "Weather",
      icon: "/icons/cloud.png",
      type: "App",
      action: () => openWindow("Weather", "/icons/cloud.png"),
    },
    {
      name: "Time Tracker",
      icon: "/icons/time-tracking.png",
      type: "App",
      action: () => openWindow("Time Tracker", "/icons/time-tracking.png"),
    },
    {
      name: "Sticky Notes",
      icon: "/icons/sticky-note.png",
      type: "App",
      action: () => openWindow("Sticky Notes", "/icons/sticky-note.png"),
    },
    {
      name: "Todo List",
      icon: "/icons/to-do-list.png",
      type: "App",
      action: () => openWindow("Todo List", "/icons/to-do-list.png"),
    }
  ].sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isInsideMenu =
        target.closest(".search-menu") || target.closest(".scrollable");
      if (!isInsideMenu) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  },);

  useEffect(() => {
    if (searchTerm) {
      const results = allApps.filter((app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, allApps]);

  const topApps: App[] = [
    {
      name: "Calculator",
      icon: "/icons/calculator.png",
      type: "file",
      action: () => openWindow("Calculator", "/icons/calculator.png"),
    },
    {
      name: "Administrator: Windows PowerShell",
      icon: "/icons/window.png",
      type: "file",
      action: () => openWindow("Administrator: Windows PowerShell", "/icons/window.png"),
    },
    {
      name: "File Explorer",
      icon: "/icons/app.png",
      type: "file",
      action: () => openWindow("File Explorer", "/icons/app.png"),
    },
    {
      name: "Google Chrome",
      icon: "/icons/chrome.svg",
      type: "file",
      action: () => openWindow("Google Chrome", "/icons/chrome.svg"),
    },
  ];

  const recommendedFiles = [
    {
      name: "Resume",
      icon: "/icons/pdf.png",
      time: "Yesterday at 12:44 PM",
      action: () => openWindow("Resume", "/icons/pdf.png"),
    },
    {
      name: "Notepad",
      icon: "/icons/notepad.png",
      time: "Friday at 11:56 AM",
      action: () => openWindow("Notepad", "/icons/notepad.png"),
    },
    {
      name: "LinkedIn",
      icon: "/icons/linkedin.png",
      time: "Thursday at 11:10 PM",
      action: () =>
        window.open(
          "https://www.linkedin.com/in/poorva-saxena-983642256/",
          "_blank"
        ),
    },
    {
      name: "Time Tracker",
      icon: "/icons/time-tracking.png",
      time: "Thursday at 11:09 PM",
      action: () => openWindow("Time Tracker", "/icons/time-tracking.png"),
    },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleAppButtonClicked = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Search Button */}
      <div
        className="flex items-center justify-center rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src="/icons/search-dark.svg"
          alt="Search icon"
          width={30}
          height={30}
        />
      </div>

      {/* Search Menu Popup */}
      {isOpen && (
        <div className="search-menu absolute bottom-12 left-4 w-[650px] h-[581.6px] text-white rounded-lg shadow-lg overflow-hidden start-button">
        {/* Search Bar */}
        <div className="pt-4 px-6 pb-3">
          <div className="relative py-2">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Type here to search"
              className="w-full search rounded-full px-10 py-2 text-sm focus:outline-none border border-gray-700 bg-gray-700 text-white"
              onChange={handleSearch}
              value={searchTerm}
            />
          </div>
        </div>
  
        {/* Content Area */}
        <div className="flex h-[500px]">
          {/* Left Section */}
          <div className="w-1/2 p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 scrollbar-thumb-rounded-md">
            {searchTerm ? (
              // Display search results
              searchResults.length > 0 ? (
                searchResults.map((app) => (
                  <div
                    key={app.name}
                    className="flex items-center gap-3 hover:bg-zinc-700 p-2 rounded cursor-pointer"
                    onClick={() => {
                      {app.action()};
                      handleAppButtonClicked();
                    }}
                  >
                    <Image src={app.icon} alt={app.name} width={32} height={32}  />
                    <span className="text-sm">{app.name}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No results found.</p>
              )
            ) : (
              // Display top apps in the form of list:
              <div>
                {/* Top Apps Section */}
                <h3 className="text-base text-center text-white font-medium">Top apps</h3>
                <ul className="mt-2 space-y-2">
                  {topApps.map((app) => (
                    <li
                      key={app.name}
                      className="flex items-center gap-3 hover:bg-zinc-700 p-2 rounded cursor-pointer"
                      onClick={() => {
                        {app.action()};
                        handleAppButtonClicked();
                      }}
                    >
                      <Image src={app.icon} alt={app.name} className="w-8 h-8" />
                      <span className="text-sm">{app.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
  
          {/* Right Section */}
          <div className="w-1/2 p-5 border-l border-gray-700">
            {searchTerm && searchResults.length > 0 ? (
              // Display details of the first search result
              <>
                <Image
                  src={searchResults[0].icon}
                  alt={searchResults[0].name}
                  className="w-20 h-20 mx-auto"
                />
                <h3 className="text-xl font-semibold mt-4 text-center">
                  {searchResults[0].name}
                </h3>
                <p className="text-gray-400 text-center">
                  Type: {searchResults[0].type}
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                  onClick={() => {
                    searchResults[0].action();
                    handleAppButtonClicked();
                  }}>
                    Open
                  </div>
                  <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    searchResults[0].action();
                    handleAppButtonClicked();
                  }}>
                    Run as administrator
                  </button>
                </div>
              </>
            ) : (
              // Display Recommended Section:
              <div>
                <h3 className="text-base text-center text-white font-medium">Recent</h3>
                <ul className="mt-2">
                  {recommendedFiles.map((file, index) => (
                    <li
                      key={index}
                      className="flex justify-start gap-5 items-center text-sm hover:bg-zinc-700 p-2 rounded cursor-pointer"
                      onClick={() => {
                        {file.action()};
                        handleAppButtonClicked();
                      }}
                    >
                      <Image
                        src={file.icon}
                        alt={file.name}
                        width={30}
                        height={30}
                      />
                      <div className="flex flex-col justify-center items-start ">
                        <span>{file.name}</span>
                        <span className="text-gray-400">{file.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default SearchButton;
