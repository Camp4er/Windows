"use client";

import React from "react";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import Taskbar from "./Taskbar/Taskbar";
import Terminal from "./Terminal";
import FileExplorer from "./FileExplorer/FileExplorer";
import Snakegame from "./Snakegame";
import { ShopperImages, sidebarData, TodoListImages, ZappifyImages } from "@/constants/folderData";
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

type WindowInfo = {
  name: string;
  icon: string;
  minimized: boolean;
};

export default function Desktop() {
  const { openWindows, openWindow, closeWindow, toggleMinimizeWindow } =
    useWindowManager();

  //context for notepad's description
  const aboutMe =
    "About Me\n\n" +
    "- 🎨 Frontend Developer with 7 months of experience in React.js and Next.js.\n" +
    "- 🧪 Switched from a B.Sc. in Chemistry to tech, combining logic with creativity.\n" +
    "- 💻 Built projects like e-commerce platforms and interactive web components.\n" +
    "- 🔧 Skilled in creating responsive designs and clean, organized code.\n" +
    "- 🌱 Always learning and exploring new technologies.\n" +
    "- 🤝 A team player who enjoys solving problems and building great products.\n\n" +
    "Let’s create something amazing together! 😊";

  const LRIT = `
    ### Software Developer Intern 🚀\n
    **LeopardRuns Innovation and Technology**\n
    📍 Remote | February 2024 – April 2024\n\n
    - 🎨 Designed user experience flows for multiple features, enhancing usability and user navigation.\n
    - 🌐 Developed a blood donation website, contributing to an improved user experience through compelling visuals and design.\n
    - ⚡ Improved website performance by optimizing assets, reducing load time by 20%.\n
    - 🛠️ Conducted code reviews and debugging sessions, ensuring code quality and maintainability.\n
    - 🤝 Collaborated with a team of developers and designers to deliver user-centered solutions.\n
    `;

  const F50 = `
    ### Frontend Developer Intern 💻\n
    **Frontend50**\n
    📍 Remote | June 2024 – Current\n\n
    - ✨ Redesigned core user interface components, improving user satisfaction based on feedback.\n
    - 📱 Collaborated with cross-functional teams to create a mobile-responsive platform for a seamless experience on various devices.\n
    - ♻️ Built reusable React components, reducing development time for new features.\n
    - 🧑‍🦽 Implemented accessibility features, ensuring compliance with WCAG standards.\n
    - 🔗 Integrated APIs to fetch and display dynamic content, enhancing platform interactivity.\n
    - 🗓️ Participated in weekly sprint meetings, contributing to planning and feature prioritization.\n
    `;

  const shopper = `
    Shopper – E-commerce Website 🛍️\n
    Project Type: Final project of my first internship\n
    Frontend Development: Designed and developed by me\n
    Backend Development: Created by my colleague from the internship\n\n
    Description:\n
    Shopper is a feature-rich e-commerce platform that provides a seamless shopping experience. As the frontend developer, I designed and implemented the user interface, ensuring a visually appealing, responsive, and intuitive design for users.\n\n
    Key Features:\n
    - 🛒 Product Listings: Dynamic product displays with detailed information and images.\n
    - 🔍 Search and Filter Options: Simplified navigation for users to find their desired products quickly.\n
    - 📱 Responsive Design: Optimized for various devices, offering a consistent experience on mobile, tablet, and desktop.\n
    - 🎨 Modern UI/UX: Clean layouts and engaging visuals for an intuitive shopping journey.\n\n
    Collaboration:\n
    This project was the final deliverable of my first internship. While I handled the frontend entirely, my colleague worked on the backend to integrate features like user authentication, product management, and order processing.\n\n
    Experience Gained:\n
    - Learned to collaborate effectively on a full-stack project.\n
    - Improved my skills in creating responsive designs and optimizing frontend performance.\n
    - Gained hands-on experience with integrating a frontend with backend functionalities.\n\n
  `;

  const todoProject = `
   To-Do List ✅\n
   Project Type: My first ever app\n
   Tech Stack: HTML, CSS, JavaScript\n\n
   Description:\n
   This is a simple yet functional To-Do List application, marking my first step into web development. Built using basic HTML, CSS, and JavaScript, this app helps users efficiently manage their daily tasks.\n\n
   Key Features:\n
   - ➕ Add new tasks instantly\n
   - ✅ Mark tasks as completed\n
   - ❌ Remove tasks when done\n
   - 📜 Simple and clean UI for easy usability\n\n
   Experience Gained:\n
   - Learned the fundamentals of JavaScript and DOM manipulation\n
   - Understood how to store and update user data dynamically\n
   - Developed an appreciation for structuring clean and readable code\n\n
   Check out the project here: https://gorgeous-pastelito-e4e467.netlify.app/\n
`;

const zappifyProject = `
Zappify – Zaap.ai Clone ⚡\n
Project Type: First project of my second internship\n
Tech Stack: React, CSS, Javascript
Description:\n
Zappify is a pixel-perfect clone of the Zaap.ai website, built to replicate its interactive and visually engaging design. This project was my introduction to implementing complex animations while ensuring a fully responsive layout across all devices.\n\n
Key Features:\n
- 🎭 Extensive Animations: Smooth transitions, dynamic motion effects, and engaging user interactions.\n
- 📱 Fully Responsive: Ensured adaptability across different screen sizes without breaking the design.\n
- ⚡ Performance Optimization: Fine-tuned animations to maintain fluidity without lag.\n
- 🎨 UI Precision: Matched the original website's design aesthetics with high attention to detail.\n\n
Experience Gained:\n
- Deep understanding of animation libraries like Framer Motion.\n
- Learned to balance animations with performance optimization.\n
- Improved skills in creating fully responsive, interactive web pages.\n
- Strengthened my problem-solving abilities while debugging complex animation issues.\n\n
Check out the project here: https://zappify.netlify.app/\n
`;


  return (
    <>
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
        <div className="flex flex-col gap-3 justify-start items-start py-3 flex-wrap">
          <DesktopIcon
            title="VS Code"
            icon="/icons/vscode.svg"
            onClick={() => console.log("VS Code opened")}
          />
          <DesktopIcon
            title="Feedback Hub"
            icon="/icons/review.png"
            onClick={() => openWindow("Feedback Hub", "/icons/review.png")}
          />
          <DesktopIcon
            title="Notepad"
            icon="/icons/notepad.png"
            onClick={() => openWindow("Notepad", "/icons/app.png")}
          />
          <DesktopIcon
            title="Recycle Bin"
            icon="/icons/recycle-bin-empty.webp"
            onClick={() =>
              openWindow("RecycleBin", "/icons/recycle-bin-empty.webp")
            }
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

            {window.name === "Notepad" && <Notepad />}
            {window.name === "About" && <Notepad content={aboutMe} />}
            {window.name === "Resume" && <PDFViewer />}
            {window.name === "LRIT" && <Notepad content={LRIT} />}
            {window.name === "Frontend50" && <Notepad content={F50} />}
            {window.name === "Shopper" && <Notepad content={shopper} />}
            {window.name === "Shopper Gallery" && (
              <GalleryViewer images={ShopperImages} />
            )}
            {window.name === "To-do List" && <Notepad content={todoProject} />}
            {window.name === "To-do List Gallery" && (
              <GalleryViewer images={TodoListImages} />
            )}
            {window.name === "Zappify" && <Notepad content={zappifyProject} />}
            {window.name === "Zappify Gallery" && (
              <GalleryViewer images={ZappifyImages} />
            )}
            {window.name === "Calculator" && <Calculator />}
            {window.name === "Calendar" && <Calendar />}
            {window.name === "Sticky Notes" && <StickyNotes />}
            {window.name === "Camera" && <Camera />}
            {window.name === "Clock" && <Clock />}
            {window.name === "3D Chess Game" && <Chess />}
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
      <div className="w-screen h-screen bg-black">
        <ContextMenu /> {/* Add right-click menu */}
      </div>
    </>
  );
}
