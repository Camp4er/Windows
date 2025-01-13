import React, { useEffect } from "react";

interface NotepadProps {
  content?: string;
}

export default function Notepad({ content }: NotepadProps) {
  
  useEffect (() => {
    if (content) {
      console.log("content received: ", content);
    } else {
      console.log("content not received");
    }
  })

  return (
    <div className="h-full w-full p-4 bg-gray-800 text-white flex flex-col">
      <textarea
        className="flex-1 bg-gray-700 p-2 rounded text-white outline-none resize-none"
        defaultValue={content || "No content provided"}
        placeholder="Type something here..."
      ></textarea>
    </div>
  );
}
