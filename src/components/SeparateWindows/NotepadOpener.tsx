import React from "react";
import Notepad from "./Notepad";

interface NotepadOpenerProps {
  fileId: string;
}

export default function NotepadOpener({ fileId }: NotepadOpenerProps) {
    console.log("NotepadOpener rendered with fileId:", fileId);
  const content = getContentById(fileId);

  // Open the Notepad window with the content
  // You can implement this function to open the Notepad window
  // For example:
  const notepadWindow = window.open("", "Notepad", "width=800,height=600");
if (notepadWindow) {
  notepadWindow.document.write(`
    <div>
      <Notepad content="${content}"></Notepad>
    </div>
  `);
}

  return null;
}

const getContentById = (id: string) => {
  // Return the content of the respective ID
  // You can implement this function to retrieve the content from your data structure
  // For example:
  const contentMap: { [id: string]: string } = {
    "3.1": "This is the About section description...",
    "5.1.1": "This is the Project A description...",
  };
  return contentMap[id];
};

export function openNotepadWithContent(id: string) {
    console.log("openNotepadWithContent called with id:", id);
    return <NotepadOpener fileId={id} />;
  }