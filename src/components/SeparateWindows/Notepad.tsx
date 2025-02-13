import React from "react";

interface NotepadProps {
  content?: string;
}

export default function Notepad({ content }: NotepadProps) {

  return (
    <div className="h-full w-full p-4 bg-gray-800 text-white flex flex-col">
      <textarea
        className="flex-1 bg-gray-700 p-8 rounded text-white outline-none resize-none overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900 scrollbar-thumb-rounded-md"
        defaultValue={content || "No content provided"}
        placeholder="Type something here..."
      ></textarea>
    </div>
  );
}
