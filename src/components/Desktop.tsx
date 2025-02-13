"use client";

import React, { useState } from "react";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import Taskbar from "./Taskbar/Taskbar";
import Terminal from "./Terminal";
import FileExplorer from "./FileExplorer/FileExplorer";
import Snakegame from "./Snakegame";
import {
  blogTextImages,
  GPTImages,
  heatMapImages,
  screenshots,
  shopperImages,
  todoListImages,
  zappifyImages,
} from "@/constants/galleryImages";
import { sidebarData } from "@/constants/folderData";
import Notepad from "./SeparateWindows/Notepad";
import { useWindowManager } from "./NewWindow/WindowManagerContext";
import PDFViewer from "./SeparateWindows/PdfViewer";
import GalleryViewer from "./SeparateWindows/GalleryViewer";
import ContextMenu from "./Click/ContextMenu";
import Calculator from "./AllApps/Calculator";
import Clock from "./AllApps/Clock";
import Calendar from "./AllApps/Calendar";
import StickyNotes from "./AllApps/StickyNotes";
import Camera from "./AllApps/Camera";
import Chess from "./AllApps/Chess";
import Weather from "./AllApps/Weather";
import TimeTracker from "./AllApps/TimeTracker";
import Feedback from "./AllApps/Feedback";
import Paint from "./AllApps/Paint";
import TicTacToe from "./AllApps/TicTacToe";
import RockPaperScissors from "./AllApps/RockPaperScissors";
import Minesweeper from "./AllApps/Minesweeper";
import {
  aboutMe,
  blogTextProject,
  F50,
  gpt3Project,
  heatMapProject,
  LRIT,
  shopper,
  todoProject,
  zappifyProject,
} from "@/constants/notepadDescription";

export default function Desktop() {
  const { openWindows, openWindow, closeWindow, toggleMinimizeWindow } =
    useWindowManager();
  const [rightClickedIcon, setRightClickedIcon] = useState<string | null>(null);

  const handleIconContextMenu = (
    event: React.MouseEvent,
    iconTitle: string
  ) => {
    event.preventDefault();
    event.stopPropagation(); //Prevent desktop context menu
    setRightClickedIcon(iconTitle);
  };

  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/background/img6.jpg')",
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          setRightClickedIcon(null); // Clear icon selection
        }}
      />
      {/* Desktop icons */}
      <div
        className="flex flex-row desktop-container"
        style={{ position: "relative", width: "100vw", height: "100vh" }}
      >
        <div className="flex flex-col gap-3 justify-start items-start py-3 pl-2 flex-wrap">
          <DesktopIcon
            title="About Me"
            icon="/icons/user-folder.png"
            onClick={() => openWindow("About Me", "/icons/app.png")}
            onContextMenu={(e) => handleIconContextMenu(e, "About Me")}
          />
          <DesktopIcon
            title="Projects"
            icon="/icons/blueprint.png"
            onClick={() => openWindow("Projects", "/icons/app.png")}
            onContextMenu={(e) => handleIconContextMenu(e, "Projects")}
          />
          <DesktopIcon
            title="Portfolio"
            icon="/icons/curriculum-vitae.png"
            onClick={() => openWindow("Documents", "/icons/app.png")}
            onContextMenu={(e) => handleIconContextMenu(e, "Portfolio")}
          />
          <DesktopIcon
            title="Experience"
            icon="/icons/suitcase.png"
            onClick={() => openWindow("Experience", "/icons/app.png")}
            onContextMenu={(e) => handleIconContextMenu(e, "Experience")}
          />
          <DesktopIcon
            title="Skills"
            icon="/icons/skills.png"
            onClick={() => openWindow("Skills", "/icons/app.png")}
            onContextMenu={(e) => handleIconContextMenu(e, "Skills")}
          />
          <DesktopIcon
            title="Contact"
            icon="/icons/phone-book.png"
            onClick={() => openWindow("Contact", "/icons/app.png")}
            onContextMenu={(e) => handleIconContextMenu(e, "Contact")}
          />
          <DesktopIcon
            title="File Explorer"
            icon="/icons/app.png"
            onClick={() => openWindow("File Explorer", "/icons/app.png")}
            onContextMenu={(e) => handleIconContextMenu(e, "File Explorer")}
          />
        </div>
        <div className="flex flex-col gap-3 justify-start items-start py-3 flex-wrap">
          <DesktopIcon
            title="VS Code"
            icon="/icons/vscode.svg"
            onClick={() => openWindow("VS Code", "/icons/vscode.svg")}
            onContextMenu={(e) => handleIconContextMenu(e, "VS Code")}
          />
          <DesktopIcon
            title="Feedback Hub"
            icon="/icons/review.png"
            onClick={() => openWindow("Feedback Hub", "/icons/review.png")}
            onContextMenu={(e) => handleIconContextMenu(e, "Feedback Hub")}
          />
          <DesktopIcon
            title="Notepad"
            icon="/icons/notepad.png"
            onClick={() => openWindow("Notepad", "/icons/notepad.png")}
            onContextMenu={(e) => handleIconContextMenu(e, "Notepad")}
          />
          {/* <DesktopIcon
            title="Recycle Bin"
            icon="/icons/recycle-bin-empty.webp"
            onClick={() =>
              openWindow("RecycleBin", "/icons/recycle-bin-empty.webp")
            }
            onContextMenu={(e) => handleIconContextMenu(e, "Recycle Bin")}
          /> */}
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
            {window.name === "Google Chrome" && (
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
            {window.name === "Administrator: Windows PowerShell" && (
              <Terminal />
            )}
            {window.name === "File Explorer" && (
              <FileExplorer initialSidebarId={1} sidebarData={sidebarData} />
            )}

            {window.name === "Notepad" && <Notepad />}
            {window.name === "About" && <Notepad content={aboutMe} />}
            {window.name === "Resume" && <PDFViewer />}
            {window.name === "LRIT" && <Notepad content={LRIT} />}
            {window.name === "Frontend50" && <Notepad content={F50} />}
            {window.name === "Screenshots" && (
              <GalleryViewer images={screenshots} />
            )}
            {window.name === "Shopper" && <Notepad content={shopper} />}
            {window.name === "Shopper Gallery" && (
              <GalleryViewer images={shopperImages} />
            )}
            {window.name === "Zappify" && <Notepad content={zappifyProject} />}
            {window.name === "Zappify Gallery" && (
              <GalleryViewer images={zappifyImages} />
            )}
            {window.name === "BlogText" && (
              <Notepad content={blogTextProject} />
            )}
            {window.name === "BlogText Gallery" && (
              <GalleryViewer images={blogTextImages} />
            )}
            {window.name === "GPT-3" && <Notepad content={gpt3Project} />}
            {window.name === "GPT-3 Gallery" && (
              <GalleryViewer images={GPTImages} />
            )}
            {window.name === "Heat Map" && <Notepad content={heatMapProject} />}
            {window.name === "Heat Map Gallery" && (
              <GalleryViewer images={heatMapImages} />
            )}
            {window.name === "To-do List" && <Notepad content={todoProject} />}
            {window.name === "To-do List Gallery" && (
              <GalleryViewer images={todoListImages} />
            )}
            {window.name === "Calculator" && <Calculator />}
            {window.name === "Calendar" && <Calendar />}
            {window.name === "Sticky Notes" && <StickyNotes />}
            {window.name === "Camera" && <Camera />}
            {window.name === "Clock" && <Clock />}
            {/* {window.name === "3D Chess Game" && <Chess />} */}
            {window.name === "Weather" && <Weather />}
            {window.name === "Time Tracker" && <TimeTracker />}
            {window.name === "Feedback Hub" && <Feedback />}
            {window.name === "Paint" && <Paint />}
            {window.name === "Tic-Tac-Toe" && <TicTacToe />}
            {window.name === "Rock Paper Scissors" && <RockPaperScissors />}
            {window.name === "Minesweeper" && <Minesweeper />}
            {window.name === "Youtube" && (
              <iframe
                src="https://www.youtube.com/embed/3s1aHBNjlq4"
                width="100%"
                height="100%"
              ></iframe>
            )}
            {window.name === "Todo List" && (
              <iframe
                src="https://gorgeous-pastelito-e4e467.netlify.app/"
                width="100%"
                height="100%"
              ></iframe>
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
      {/* <ContextMenu rightClickedIcon={rightClickedIcon} /> */}
    </>
  );
}
