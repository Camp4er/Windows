import Image from "next/image";
import { useState, useEffect } from "react";
import { FaSearch, FaPowerOff } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowManager } from "@/components/NewWindow/WindowManagerContext";

const StartMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const { openWindow } = useWindowManager();
  const [showAllApps, setShowAllApps] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isInsideMenu = target.closest(".start-menu") || target.closest(".scrollable");
      if (!isInsideMenu) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const pinnedApps = [
    { name: "Calculator", icon: "/icons/calculator.png", action: () => openWindow("Calculator", "/icons/calculator.png") },
    { name: "Edge", icon: "/icons/microsoft.png", action: () => openWindow("Microsoft Edge", "/icons/microsoft.png")},
    { name: "Snakeats", icon: "/icons/snake.png", action: () => openWindow("Snakeats", "/icons/snake.png")},
    { name: "Calendar", icon: "/icons/calendar.png", action: () => openWindow("Calendar", "/icons/calendar.png")},
    { name: "Google Chrome", icon: "/icons/chrome.svg", action:() => openWindow("Google Search", "/icons/chrome.svg")},
    { name: "Visual Studio Code", icon: "/icons/vscode.svg", action: () => openWindow("VS Code", "/icons/vscode.svg")},
    { name: "Terminal", icon: "/icons/bash.png", action: () => openWindow("Terminal", "icons/bash.png")},
    { name: "Clock", icon: "/icons/clock.png", action: () => openWindow("Clock", "/icons/clock.png")},
    { name: "Sticky Notes", icon: "/icons/sticky-note.png", action: () => openWindow("Sticky Notes", "/icons/sticky-note.png")},
    { name: "Photos", icon: "/icons/gallery.png", action: () => console.log("Calculator")  },
    { name: "Camera", icon: "/icons/camera.png", action: () => openWindow("Camera", "/icons/camera.png")},
    { name: "Notepad", icon: "/icons/notepad.png", action: () => openWindow("Notepad", "/icons/app.png")},
  ];

  const recommendedFiles = [
    { name: "Resume", icon: "/icons/pdf.png", time: "Yesterday at 12:44 PM", action: () => openWindow("Resume", "/icons/pdf.png") },
    { name: "Notepad", icon: "/icons/notepad.png", time: "Friday at 11:56 AM", action: () => openWindow("Notepad", "/icons/notepad.png") },
    {
      name: "LinkedIn",
      icon: "/icons/linkedin.png",
      time: "Thursday at 11:10 PM",
      action: () => window.open("https://www.linkedin.com/in/poorva-saxena-983642256/", "_blank"),
    },
    {
      name: "Time Tracker",
      icon: "/icons/time-tracking.png",
      time: "Thursday at 11:09 PM",
      action: () => openWindow("Time Tracker", "/icons/time-tracking.png"),
    },
  ];

  const allApps = [
    // { name: "3D Chess Game", icon: "/icons/chess.png", type:"file", action: () => openWindow("3D Chess Game", "/icons/chess.png") },
    { name: "Minesweeper", icon: "/icons/bomb.png", type:"file", action: () => openWindow("Minesweeper", "/icons/bomb.png") },
    { name: "Rock Paper Scissors", icon: "/icons/rock-paper-scissors.png", type:"file", action: () => openWindow("Rock Paper Scissors", "/icons/rock-paper-scissors.png") },
    { name: "Tic-Tac-Toe", icon: "/icons/tictactoe.png", type:"file", action: () => openWindow("Tic-Tac-Toe", "/icons/tictactoe.png") },
    { name: "Feedback Hub", icon: "/icons/review.png", type:"file", action: () => openWindow("Feedback Hub", "/icons/review.png") },
    { name: "Calculator", icon: "/icons/calculator.png", type:"file", action: () => openWindow("Calculator", "/icons/calculator.png") },
    { name: "Calendar", icon: "/icons/calendar.png", type:"file", action: () => openWindow("Calendar", "/icons/calendar.png") },
    { name: "Camera", icon: "/icons/camera.png", type:"file", action: () => openWindow("Camera", "/icons/camera.png") },
    { name: "File Explorer", icon: "/icons/app.png", type:"file", action: () => openWindow("File Explorer", "/icons/app.png") },
    { name: "Chrome Apps", icon: "/icons/folder.png", type: "folder",action: () => console.log("Calculator")  , children: [
      {name: "Google Chrome", icon: "/icons/chrome.svg", type:"file", action: () => openWindow("Google Chrome", "/icons/chrome.svg")  },
      {name: "Youtube", icon: "/icons/youtube.png", type:"file", action: () => openWindow("Youtube", "/icons/youtube.png")  },
    ] },
    { name: "Game Bar", icon: "/icons/folder.png", type: "folder",action: () => console.log("Calculator"), children: [
      {name: "Snakeats", icon: "/icons/snake.png", type:"file", action: () => console.log("Calculator")  },
      { name: "Minesweeper", icon: "/icons/bomb.png", type:"file", action: () => openWindow("Minesweeper", "/icons/bomb.png") },
    { name: "Rock Paper Scissors", icon: "/icons/rock-paper-scissors.png", type:"file", action: () => openWindow("Rock Paper Scissors", "/icons/rock-paper-scissors.png") },
    { name: "Tic-Tac-Toe", icon: "/icons/tictactoe.png", type:"file", action: () => openWindow("Tic-Tac-Toe", "/icons/tictactoe.png") },
    ] },
    {name: "Google Chrome", icon: "/icons/chrome.svg", type:"file", action: () => openWindow("Google Chrome", "/icons/chrome.svg")  },
    {name: "Microsoft Edge", icon: "/icons/microsoft.png", type:"file", action: () => openWindow("Microsoft Edge", "/icons/microsoft.png")  },
    { name: "Paint", icon: "/icons/paint.png", type:"file", action: () => openWindow("Paint", "/icons/paint.png") },
    { name: "Youtube", icon: "/icons/Youtube.png", type:"file", action: () => openWindow("Youtube", "/icons/youtube.png")  },
    { name: "Clock", icon: "/icons/clock.png", type:"file", action: () => openWindow("Clock", "/icons/clock.png")  },
    { name: "Notepad", icon: "/icons/notepad.png", type:"file", action: () => openWindow("Notepad", "/icons/app.png")  },
    { name: "Photos", icon: "/icons/gallery.png", type:"file", action: () => console.log("Calculator")  },
    { name: "Terminal", icon: "/icons/bash.png", type:"file", action: () => openWindow("Terminal", "icons/bash.png")  },
    { name: "Visual Studio Code", icon: "/icons/vscode.svg", type:"file", action: () => openWindow("VS Code", "/icons/vscode.svg")  },
    {name: "Snakeats", icon: "/icons/snake.png", type:"file", action: () => openWindow("Snakeats", "/icons/snake.png")  },
    {name: "Weather", icon: "/icons/cloud.png", type:"file", action: () => openWindow("Weather", "/icons/cloud.png")  },
    {name: "Time Tracker", icon: "/icons/time-tracking.png", type:"file", action: () => openWindow("Time Tracker", "/icons/time-tracking.png")  },
    {name: "Sticky Notes", icon: "/icons/sticky-note.png", type:"file", action: () => openWindow("Sticky Notes", "/icons/sticky-note.png")  },
  ].sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

  return (
    <div className="start-menu absolute bottom-12 left-4 w-[650px] h-[621.6px] start-button text-white rounded-lg shadow-lg overflow-x-hidden overflow-y-hidden">
      {/* Search Bar */}
      <div className="pt-4 px-10">
        <div className="relative py-5">
          <FaSearch className="absolute left-4 bottom-[39%] text-gray-400" />
          <input
            type="text"
            placeholder="Search for apps, settings, and documents"
            className="w-full search rounded-full px-12 py-2 text-sm focus:outline-none border border-gray-700"
          />
        </div>
      </div>

      <div className="scrollable">
        {/* 📌 Pinned & All Apps Section */}
        <div className="py-4 px-10">
          <AnimatePresence mode="wait">
            {/* Pinned Apps View */}
            {!showAllApps && (
              <motion.div
                key="pinned-view"
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {/* Pinned Apps */}
                <div className="flex items-center justify-between py-3">
                  <h3 className="text-sm text-white font-extralight">Pinned</h3>
                  <button
                    className="text-xs small-buttons py-1 font-thin px-2 rounded text-white border border-gray-700"
                    onClick={() => setShowAllApps(true)}
                  >
                    All&nbsp;&nbsp;&nbsp;{`>`}
                  </button>
                </div>
                <div className="grid grid-cols-6 gap-3 mt-2">
                  {pinnedApps.map((app) => (
                    <div
                      key={app.name}
                      className="flex flex-col items-center text-center hover-color p-2 rounded"
                      onClick={app.action}
                    >
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-10 h-10 mb-1"
                      />
                      <span className="text-xs">{app.name}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended Files */}
                <div className="mt-4 pb-2">
                  <h3 className="text-sm text-white font-extralight py-3">
                    Recommended
                  </h3>
                  <ul className="mt-2 grid grid-cols-2">
                    {recommendedFiles.map((file, index) => (
                      <li
                        key={index}
                        className="flex justify-start gap-5 items-center text-sm hover-color p-2 rounded"
                        onClick={file.action}
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
              </motion.div>
            )}

            {/* All Apps View */}
            {showAllApps && (
              <motion.div
                key="all-apps-view"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="pt-4 pb-2">
                  <div className="flex flex-row justify-between pb-2">
                    <h3 className="text-sm text-white font-extralight py-3">
                      All Apps
                    </h3>
                    <div>
                      <button
                        className="text-xs small-buttons py-1 font-thin px-2 rounded text-white border border-gray-700"
                        onClick={() => setShowAllApps(false)}
                      >
                        {`<`}&nbsp;&nbsp;&nbsp;Back
                      </button>
                    </div>
                  </div>
                  <div className="overflow-y-scroll h-[350px] scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 scrollbar-thumb-rounded-md">
                    <div className="grid grid-cols-1 gap-3">
                      {allApps.map((app) => (
                        <div
                          key={app.name}
                          className="flex items-center gap-3 hover:bg-zinc-800 p-2 rounded"
                          onClick={app.action}
                        >
                          <img
                            src={app.icon}
                            alt={app.name}
                            className="w-8 h-8"
                          />
                          <span className="text-sm">{app.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom User & Power Button */}
      <div className="pb-2 px-10 search rounded">
        <div className="mt-2 flex justify-between items-center pt-2">
          <button className="flex justify-center items-center gap-2 hover:bg-zinc-800 rounded-md py-2 px-3">
            <Image
              src="/icons/user.png"
              alt="hero image"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="text-sm">Poorva Saxena</span>
          </button>
          <button className="p-3 hover:bg-zinc-800 rounded-md">
            <FaPowerOff className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
