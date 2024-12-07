"use client";

import React, { useState } from "react";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import Taskbar from "./Taskbar";
import AboutWindow from "./AboutWindow";
import ExperienceWindow from "./ExperienceWindow";
import SkillsWindow from "./SkillsWindow";
import ContactWindow from "./ContactWindow";
import ProjectsWindow from "./ProjectsWindow";
import Terminal from "./Terminal";
import FileExplorer from "./FileExplorer";

type WindowInfo = {
  name: string;
  icon: string;
  minimized: boolean;
};

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState<WindowInfo[]>([]);

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
      <div className="flex-grow flex flex-col gap-3 justify-start items-start p-4 flex-wrap">
        <DesktopIcon
          title="About Me"
          icon="/icons/user-folder.png"
          onClick={() => openWindow("About Me", "/icons/user-folder.png")}
        />
        <DesktopIcon
          title="Projects"
          icon="/icons/blueprint.png"
          onClick={() => openWindow("Projects", "/icons/blueprint.png")}
        />
        <DesktopIcon
          title="Portfolio"
          icon="/icons/curriculum-vitae.png"
          onClick={() => openWindow("Portfolio", "/icons/curriculum-vitae.png")}
        />
        <DesktopIcon
          title="Experience"
          icon="/icons/suitcase.png"
          onClick={() => openWindow("Experience", "/icons/suitcase.png")}
        />
        <DesktopIcon
          title="Skills"
          icon="/icons/skills.png"
          onClick={() => openWindow("Skills", "/icons/skills.png")}
        />
        <DesktopIcon
          title="Contact Me"
          icon="/icons/phone-book.png"
          onClick={() => openWindow("Contact", "/icons/phone-book.png")}
        />
        <DesktopIcon
          title="FileExplorer"
          icon="/icons/app.png"
          onClick={() => openWindow("FileExplorer", "/icons/app.png")}
        />
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
              {window.name === "About Me" && <AboutWindow />}
              {window.name === "Projects" && <ProjectsWindow />}
              {window.name === "Portfolio" && (
                <iframe
                  src="@/public/pdf/PoorvaSaxenaResume6.pdf"
                  width="100%"
                  height="400px"
                  className="border rounded-md"
                ></iframe>
              )}
              {window.name === "Experience" && <ExperienceWindow />}
              {window.name === "Skills" && <SkillsWindow />}
              {window.name === "Contact" && <ContactWindow />}
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
              {window.name === "Terminal" && <Terminal key={window.name} />}
              {window.name === "FileExplorer" && <FileExplorer />}
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
