"use client";

import React, { useState, useEffect, useRef } from "react";

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

  const executeCommand = (command: string) => {
    const currentTab = getCurrentTab();
    if (!currentTab) return;

    const newOutput = [...currentTab.output, `PS ${currentTab.path.join("\\")}> ${command}`];
    let newPath = [...currentTab.path];

    const commandParts = command.split(" ");
    const mainCommand = commandParts[0].toLowerCase();
    const argument = commandParts.slice(1).join(" ");

    if (mainCommand === "cd") {
      if (argument === "..") {
        if (newPath.length > 1) newPath.pop();
      } else {
        const folder = argument.trim();
        let currentDir = fileSystem;
        for (const part of newPath.slice(1)) {
          if (currentDir[part]) currentDir = currentDir[part];
        }
        if (currentDir[folder]) {
          newPath.push(folder);
        } else {
          newOutput.push(`>> The system cannot find the path specified: ${folder}`);
        }
      }
    } else if (mainCommand === "ls" || mainCommand === "dir") {
      let currentDir = fileSystem;
      for (const part of newPath.slice(1)) {
        if (currentDir[part]) currentDir = currentDir[part];
      }
      newOutput.push(`Contents of ${newPath.join("\\")}:`);
      newOutput.push(Object.keys(currentDir).join("  ") || "(empty)");
    } else if (mainCommand === "mkdir") {
      let currentDir = fileSystem;
      for (const part of newPath.slice(1)) {
        if (currentDir[part]) currentDir = currentDir[part];
      }
      if (argument.trim()) {
        currentDir[argument.trim()] = {};
        setFileSystem({ ...fileSystem });
        newOutput.push(`>> Created folder: ${argument.trim()}`);
      } else {
        newOutput.push(">> Invalid folder name");
      }
    } else if (mainCommand === "echo") {
      newOutput.push(argument);
    } else if (mainCommand === "clear") {
      updateTab({ ...currentTab, output: [] });
      return;
    } else {
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

  const closeTab = (id: number) => {
    if (tabs.length === 1) return; // Prevent closing the last tab

    const newTabs = tabs.filter(tab => tab.id !== id);
    setTabs(newTabs);

    // Determine next active tab
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
