"use client";

import React, { useState, useEffect } from 'react';

const Terminal = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const commands = {
    HELP: `Available Commands:
- HELP: Show available commands
- ABOUT: Display portfolio info
- PROJECTS: List your projects
- JOKE: Get a programming joke
- HACK: Watch the "hacking" magic
- RANDOM: See something cool
- THEME: Change terminal theme
- EXIT: Close the terminal
    `,
    ABOUT: '>> I am a Frontend Developer passionate about building innovative digital solutions!',
    PROJECTS: `>> Projects:
1. [Heat-Map](https://example.com/heat-map)
2. [Snake Game](https://example.com/snake-game)
3. [Shopper](https://example.com/shopper)
4. [Zappify](https://example.com/zappify)
    `,
    JOKE: '>> Why do programmers prefer dark mode? Because light attracts bugs!',
    HACK: `>> [HACKING IN PROGRESS...] 
███████╗██╗░░██╗████████╗██╗░░░██╗
██╔════╝██║░░██║╚══██╔══╝╚██╗░██╔╝
█████╗░░███████║░░░██║░░░░╚████╔╝░
██╔══╝░░██╔══██║░░░██║░░░░░╚██╔╝░░
██║░░░░░██║░░██║░░░██║░░░░░░██║░░░
╚═╝░░░░░╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░░`,
    RANDOM: `>> Here's some ASCII art: 
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░▄▀▀▀▀▄░░░░░░░░░░░░░░
░░░░░░░░░░░░░▄▀▀▄▀░░░░░░▀▄▄░░░░░░░░░░░
░░░░░░░░▄▀▀▀▀▄▀░░░░░░░░░░░▀▄░░░░░░░░░░`,
  };

  useEffect(() => {
    setOutput((prev) => [...prev, ">> Welcome to the interactive terminal! Type 'HELP' to start."]);
  }, []);

  const handleCommand = (command: string) => {
    const upperCommand = command.toUpperCase();
    if (upperCommand in commands) {
      setOutput((prev) => [...prev, commands[upperCommand as keyof typeof commands]]);
    } else if (upperCommand === 'THEME') {
      setOutput((prev) => [...prev, '>> Switching themes is not implemented yet, but it’s coming soon!']);
    } else {
      setOutput((prev) => [...prev, `>> Command not recognized: ${command}`]);
    }
  };
  

  const handleInput = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setOutput((prev) => [...prev, `> ${input}`]);
      setHistory((prev) => [...prev, input]);
      setHistoryIndex(-1);
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-black text-green-500 font-mono overflow-hidden rounded shadow-lg border border-gray-700">
      <div className="flex-grow overflow-y-auto p-4">
        {output.map((line, index) => (
          <pre key={index} className="whitespace-pre-wrap">
            {line}
          </pre>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleInput}
        className="bg-black text-green-500 border-none outline-none p-2 text-sm w-full"
        placeholder="Type a command..."
      />
    </div>
  );
};

export default Terminal;
