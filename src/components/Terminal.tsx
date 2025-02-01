"use client";

import React, { useState, useEffect, useRef } from "react";

const Terminal = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPath, setCurrentPath] = useState("C:\\Users\\Poorva");
  const terminalRef = useRef<HTMLDivElement>(null);

  // Commands for the terminal
  const commands: Record<string, string | Function> = {
    HELP: `Available Commands:
- HELP: Show available commands
- ABOUT: Display portfolio info
- PROJECTS: List your projects
- JOKE: Get a programming joke
- HACK: Watch the "hacking" magic
- RANDOM: See something cool
- THEME: Change terminal theme
- EXIT: Close the terminal
- CD <folder>: Change directory`,
    ABOUT: "I am a Frontend Developer passionate about building cool digital solutions!",
    PROJECTS: `Projects:
1. Heat-Map
2. Snake Game
3. Shopper
4. Zappify`,
    JOKE: "Why do programmers prefer dark mode? Because light attracts bugs! 😂",
    HACK: `[HACKING IN PROGRESS...] 
███████╗██╗░░██╗████████╗██╗░░░██╗
██╔════╝██║░░██║╚══██╔══╝╚██╗░██╔╝
█████╗░░███████║░░░██║░░░░╚████╔╝░
██╔══╝░░██╔══██║░░░██║░░░░░╚██╔╝░░
██║░░░░░██║░░██║░░░██║░░░░░░██║░░░
╚═╝░░░░░╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░░`,
    RANDOM: `░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░▄▀▀▀▀▄░░░░░░░░░░░░░░
░░░░░░░░░░░░░▄▀▀▄▀░░░░░░▀▄▄░░░░░░░░░░░`,
  };

  // Scroll to bottom when new output is added
  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [output]);

  useEffect(() => {
    setOutput((prev) => [...prev, "Welcome to the interactive terminal! Type 'HELP' to start."]);
  }, []);

  const handleCommand = (command: string) => {
    const upperCommand = command.toUpperCase();

    if (upperCommand.startsWith("CD ")) {
      const newPath = command.slice(3).trim();
      if (newPath) {
        setCurrentPath((prevPath) => prevPath + "\\" + newPath);
        setOutput((prev) => [...prev, `Changed directory to ${currentPath}\\${newPath}`]);
      } else {
        setOutput((prev) => [...prev, ">> Invalid directory"]);
      }
    } else if (upperCommand in commands) {
      const response = commands[upperCommand];
      setOutput((prev) => [...prev, typeof response === "function" ? response() : response]);
    } else {
      setOutput((prev) => [...prev, `>> Command not recognized: ${command}`]);
    }
  };

  const handleInput = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setOutput((prev) => [...prev, `PS ${currentPath}> ${input}`]);
      setHistory((prev) => [...prev, input]);
      setHistoryIndex(-1);
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-black text-white font-mono overflow-hidden rounded shadow-lg border border-gray-700">
      <div ref={terminalRef} className="flex-grow overflow-y-auto p-4">
        {output.map((line, index) => (
          <pre key={index} className="whitespace-pre-wrap text-blue-300">{line}</pre>
        ))}
        <div className="flex">
          <span className="text-green-400">PS {currentPath}&gt;&nbsp;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInput}
            className="bg-transparent text-white border-none outline-none flex-1"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
