"use client";

import React, { useState } from "react";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import Taskbar from "./Taskbar/Taskbar";
import Terminal from "./Terminal";
import FileExplorer from "./FileExplorer/FileExplorer";
import Snakegame from "./Snakegame";
import { sidebarData } from "@/constants/folderData";
import Notepad from "./SeparateWindows/Notepad";
import NotepadOpener from "./SeparateWindows/NotepadOpener";

type WindowInfo = {
  name: string;
  icon: string;
  minimized: boolean;
};

export const openNotepad = (content: string) => {
  const notepadWindow = window.open("", "Notepad", "width=800,height=600");
  if (notepadWindow) {
    notepadWindow.document.write(content);
  } else {
    console.error("Failed to open Notepad window");
  }
};

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState<WindowInfo[]>([]);
  const [fileId, setFileId] = useState<string | null>(null);

  const openWindow = (appName: string, icon: string) => {
    if (!openWindows.some((window) => window.name === appName)) {
      setOpenWindows([
        ...openWindows,
        { name: appName, icon, minimized: false },
      ]);
    }
  };

  const closeWindow = (appName: string) => {
    setOpenWindows(openWindows.filter((window) => window.name !== appName));
  };

  const toggleMinimizeWindow = (appName: string) => {
    setOpenWindows((prevWindows) =>
      prevWindows.map((window) =>
        window.name === appName
          ? { ...window, minimized: !window.minimized }
          : window
      )
    );
  };

  return (
    <>
      {/* Desktop icons */}
      <div className="flex flex-row">
        <div className="flex flex-col gap-3 justify-start items-start p-4 flex-wrap">
          <DesktopIcon
            title="About Me"
            icon="/icons/user-folder.png"
            onClick={() => openWindow("About Me", "/icons/app.png")}
          />
          <DesktopIcon
            title="Projects"
            icon="/icons/blueprint.png"
            onClick={() => openWindow("Projects", "/icons/app.png")}
          />
          <DesktopIcon
            title="Portfolio"
            icon="/icons/curriculum-vitae.png"
            onClick={() => openWindow("Documents", "/icons/app.png")}
          />
          <DesktopIcon
            title="Experience"
            icon="/icons/suitcase.png"
            onClick={() => openWindow("Experience", "/icons/app.png")}
          />
          <DesktopIcon
            title="Skills"
            icon="/icons/skills.png"
            onClick={() => openWindow("Skills", "/icons/app.png")}
          />
          <DesktopIcon
            title="Contact"
            icon="/icons/phone-book.png"
            onClick={() => openWindow("Contact", "/icons/app.png")}
          />
          <DesktopIcon
            title="File Explorer"
            icon="/icons/app.png"
            onClick={() => openWindow("File Explorer", "/icons/app.png")}
          />
        </div>
        <div className="flex flex-col gap-3 justify-start items-start p-4 flex-wrap">
          <DesktopIcon
            title="VS Code"
            icon="/icons/vscode.svg"
            onClick={() => console.log("VS Code opened")}
          />
          <DesktopIcon
            title="Snakeats"
            icon="/icons/snake.png"
            onClick={() => openWindow("Snakeats", "/icons/snake.png")}
          />
          <DesktopIcon
          title="Notepad"
          icon="/icons/app.png"
          onClick={() => openWindow("Notepad", "/icons/app.png")}
        />
        </div>
        
      </div>

      {/* Render open windows */}
      {openWindows.map((window) =>
        !window.minimized ? (
          <Window
            key={window.name}
            title={window.name}
            iconSrc={window.icon}
            onClose={() => closeWindow(window.name)}
            onMinimize={() => toggleMinimizeWindow(window.name)}
          >
            {/* Content for each window */}
            {window.name === "About Me" && (
              <FileExplorer initialSidebarId={3} sidebarData={sidebarData} />
            )}
            {window.name === "Projects" && (
              <FileExplorer initialSidebarId={5} sidebarData={sidebarData} />
            )}
            {window.name === "Documents" && (
              <FileExplorer initialSidebarId={4} sidebarData={sidebarData} />
            )}
            {window.name === "Experience" && (
              <FileExplorer initialSidebarId={7} sidebarData={sidebarData} />
            )}
            {window.name === "Skills" && (
              <FileExplorer initialSidebarId={6} sidebarData={sidebarData} />
            )}
            {window.name === "Contact" && (
              <FileExplorer initialSidebarId={8} sidebarData={sidebarData} />
            )}
            {window.name === "Google Search" && (
              <iframe
                src="https://www.google.com/webhp?igu=1"
                width="100%"
                height="100%"
              ></iframe>
            )}
            {window.name === "Microsoft Edge" && (
              <iframe
                src="https://microsoftedge.microsoft.com/"
                width="100%"
                height="100%"
              ></iframe>
            )}
            {window.name === "VS Code" && (
              <iframe
                src="https://github1s.com/Camp4er/Windows"
                width="100%"
                height="100%"
              ></iframe>
            )}
            {window.name === "Snakeats" && <Snakegame />}
            {window.name === "Terminal" && <Terminal key={window.name} />}
            {window.name === "File Explorer" && (
              <FileExplorer initialSidebarId={1} sidebarData={sidebarData} />
            )}
            
{window.name === "Notepad" && (
  fileId ? (
    <NotepadOpener fileId={fileId} />
  ) : (
    <Notepad content={""} />
  )
)}
          </Window>
        ) : null
      )}

      {/* Taskbar component */}
      <Taskbar
        openWindows={openWindows}
        toggleWindow={toggleMinimizeWindow}
        openWindow={openWindow}
      />
    </>
  );
}
