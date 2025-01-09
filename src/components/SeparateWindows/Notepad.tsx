import React, { useState, useEffect } from "react";

interface NotepadProps {
  content?: string;
}

export default function Notepad({ content }: NotepadProps) {
  const [text, setText] = useState(content || "");

  // Load saved text from localStorage
  useEffect(() => {
    const savedText = localStorage.getItem("notepad-content");
    if (savedText && !content) setText(savedText);
  }, []);

  // Save text to localStorage
  const handleSave = () => {
    localStorage.setItem("notepad-content", text);
    alert("Content saved!");
  };

  return (
    <div className="h-full w-full p-4 bg-gray-800 text-white flex flex-col">
      <textarea
        className="flex-1 bg-gray-700 p-2 rounded text-white outline-none resize-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
      ></textarea>
      <button
        onClick={handleSave}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Save
      </button>
    </div>
  );
}