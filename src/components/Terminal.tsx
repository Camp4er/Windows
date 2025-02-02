"use client";

import React, { useState, useEffect, useRef } from "react";

// File system structure for commands like `cd`, `ls`
type FileSystem = {
  [key: string]: FileSystem;
};

const initialFileSystem: FileSystem = {
  "Users": {
    "Poorva": {
      "Desktop": {},
      "Documents": {},
      "Downloads": {}
    }
  }
};

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs! 🪲😂",
  "Why did the PowerShell script break up? Because it had too many arguments! 😆",
  "I told my computer I needed a break... Now it won't stop sending me vacation ads! 😅"
];

const riddles = [
  { question: "I'm tall when I'm young, and short when I'm old. What am I?", answer: "A candle! 🕯️" },
  { question: "The more you take, the more you leave behind. What are they?", answer: "Footsteps! 👣" }
];


const Terminal = () => {
  const [tabs, setTabs] = useState([
    { id: 1, output: ["Welcome to PowerShell! Type 'HELP' to start."], history: [], historyIndex: -1, path: ["C:", "Users", "Poorva"] }
  ]);
  const [activeTab, setActiveTab] = useState(1);
  const [nextTabId, setNextTabId] = useState(2); // Ensures unique numbering for tabs
  const [fileSystem, setFileSystem] = useState<FileSystem>(initialFileSystem);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeTab, tabs]);

  const getCurrentTab = () => tabs.find(tab => tab.id === activeTab);

  const updateTab = (updatedTab: any) => {
    setTabs(tabs.map(tab => tab.id === activeTab ? updatedTab : tab));
  };

  // Function to handle command execution
  const executeCommand = (command: string) => {
    const currentTab = getCurrentTab();
    if (!currentTab) return;

    const newOutput = [...currentTab.output, `PS ${currentTab.path.join("\\")}> ${command}`];
    let newPath = [...currentTab.path];

    const commandParts = command.split(" ");
    const mainCommand = commandParts[0].toLowerCase();
    const argument = commandParts.slice(1).join(" ");

    switch (mainCommand) {
    case "cd":
      if (argument === ".." && newPath.length > 1) {
        newPath.pop();
      } else if (fileSystem[argument]) {
        newPath.push(argument);
      } else {
        newOutput.push(`>> The system cannot find the path specified: ${argument}`);
      }
      break;

    case "ls":
    case "dir":
      const currentDir = fileSystem[newPath[newPath.length - 1]];
      newOutput.push(`Contents of ${newPath.join("\\")}:`);
      newOutput.push(Object.keys(currentDir).join("  ") || "(empty)");
      break;

    case "mkdir":
      if (argument.trim()) {
        fileSystem[argument] = {};
        setFileSystem({ ...fileSystem });
        newOutput.push(`>> Created folder: ${argument.trim()}`);
      } else {
        newOutput.push(">> Invalid folder name");
      }
      break;

    case "help":
      newOutput.push("Available Commands:");
      newOutput.push("- cd [folder] → Change directory");
      newOutput.push("- ls / dir → List files");
      newOutput.push("- mkdir [name] → Create folder");
      newOutput.push("- clear → Clear screen");
      newOutput.push("- resume → Open your resume");
      newOutput.push("- google [query] → Search on Google");
      newOutput.push("- bing [query] → Search on Bing");
      newOutput.push("- joke → Get a random joke");
      newOutput.push("- riddle → Get a fun riddle");
      newOutput.push("- ascii-art → See a cool ASCII drawing!");
      break;

    case "resume":
      window.open("/path/to/resume.pdf", "_blank");
      newOutput.push(">> Opening your resume...");
      break;

    case "google":
      window.open(`https://www.google.com/search?q=${encodeURIComponent(argument)}`, "_blank");
      newOutput.push(`>> Searching Google for: ${argument}`);
      break;

    case "bing":
      window.open(`https://www.bing.com/search?q=${encodeURIComponent(argument)}`, "_blank");
      newOutput.push(`>> Searching Bing for: ${argument}`);
      break;

    case "joke":
      newOutput.push(jokes[Math.floor(Math.random() * jokes.length)]);
      break;

    case "riddle":
      const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];
      newOutput.push(randomRiddle.question);
      setTimeout(() => newOutput.push(`Answer: ${randomRiddle.answer}`), 2000);
      break;

    case "ascii-art":
      newOutput.push("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⡀⠀⠀⠀⠀⠀");
      newOutput.push("⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠋⠉⠉⠀⠀⠉⠉⠳⣦⡀⠀");
      newOutput.push("⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠀");
      newOutput.push("⠀⠀⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⠘⡄");
      newOutput.push(">> A simple ASCII smiley face 😊");
      break;

    case "clear":
      updateTab({ ...currentTab, output: [] });
      return;

    default:
      newOutput.push(`>> Command not recognized: ${command}`);
  }

  updateTab({ ...currentTab, output: newOutput, path: newPath });
};

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>, input: string) => {
    if (e.key === "Enter") {
      const currentTab = getCurrentTab();
      if (!currentTab) return;

      updateTab({
        ...currentTab,
        history: [...currentTab.history, input],
        historyIndex: -1
      });

      executeCommand(input);
      e.currentTarget.value = "";
    }
  };

  const addNewTab = () => {
    setTabs([...tabs, { id: nextTabId, output: ["Welcome to PowerShell! Type 'HELP' to start."], history: [], historyIndex: -1, path: ["C:", "Users", "Poorva"] }]);
    setActiveTab(nextTabId);
    setNextTabId(nextTabId + 1); // Ensure next tab has a unique ID
  };

  // Close tab and auto-select next one
  const closeTab = (id: number) => {
    if (tabs.length === 1) return; // Prevent closing the last tab

    const newTabs = tabs.filter(tab => tab.id !== id);
    setTabs(newTabs);

    // Only change active tab if the closed tab was the active one
    if (activeTab === id) {
      const remainingIds = newTabs.map(tab => tab.id);
      const nextActive = remainingIds.find(tabId => tabId > id) || remainingIds[remainingIds.length - 1];
      setActiveTab(nextActive);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-black text-white font-mono overflow-hidden rounded shadow-lg border border-gray-700">
      {/* Tab Section */}
      <div className="flex bg-gray-800 text-gray-300 p-2 space-x-2">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`px-4 py-1 cursor-pointer ${activeTab === tab.id ? "bg-gray-700 text-white" : "bg-gray-900"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            Administrator: Windows PowerShell
            <button
              onClick={() => closeTab(tab.id)}
              disabled={tabs.length === 1}
              className={`ml-2 px-1 text-sm ${
                tabs.length === 1 ? "text-gray-500 cursor-not-allowed" : "hover:text-red-500"
              }`}
            >
              ✖
            </button>
          </div>
        ))}
        <button className="px-4 py-1 bg-gray-700" onClick={addNewTab}>➕</button>
      </div>

      {/* Terminal Content */}
      <div className="flex-grow overflow-y-auto p-4">
        {getCurrentTab()?.output.map((line, index) => (
          <pre key={index} className="whitespace-pre-wrap text-blue-300">{line}</pre>
        ))}
        <div className="flex">
          <span className="text-green-400">PS {getCurrentTab()?.path.join("\\")}&gt;&nbsp;</span>
          <input
            ref={inputRef}
            type="text"
            onKeyDown={(e) => handleInput(e, e.currentTarget.value)}
            className="bg-transparent text-white border-none outline-none flex-1"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
