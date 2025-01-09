import React from "react";
import Notepad from "./Notepad";


const getContentById = (id: string) => {
  const contentMap: { [id: string]: string } = {
    "3.1": "This is the About section description...",
    "5.1.1": "This is the Project A description...",
  };
  console.log(contentMap[id], id);
  return contentMap[id];
};

const NotepadOpener = (id: string) => {
    console.log("openNotepadWithContent called with id:", id);
    const content = getContentById(id);
  return <Notepad content={content} />;
}

export default NotepadOpener;
