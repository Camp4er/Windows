import Image from "next/image";
import React from "react";
import { ContentAreaProps } from "./constants";
import Skills from "./FileExplorer/Skills/Skills";

const ContentArea = ({ path }: ContentAreaProps) => {
  const currentFolder = path[path.length - 1];

  const renderContent = () => {
    switch (currentFolder) {
      case "Home":
        return (
          <div>
            <h2>Quick Access</h2>
            <h2>Favorites</h2>
            <h2>Recent</h2>
          </div>
        );
      case "Gallery":
        return (
          <div className="grid grid-cols-4 gap-4">
            <Image
              src="/icons/windows.png"
              alt="Image 1"
              width={100}
              height={100}
            />
            <Image
              src="/icons/word.png"
              alt="Image 2"
              width={100}
              height={100}
            />
          </div>
        );
        case "Desktop":
        return <div>{/* Render desktop files */}</div>;
      case "Documents":
        return (
          <div>
            <a href="/pdf/PoorvaSaxenaResume6.pdf" target="_blank" rel="noopener noreferrer">
              Open Resume
            </a>
          </div>
        );
      case "Projects":
        return (
          <div>
            <h2>Projects</h2>
            {/* Render project cards */}
          </div>
        );
      case "Skills":
        return (
          <div>
            <Skills/>
            {/* Render skill folders */}
          </div>
        );
      case "Experience":
        return <div>{/* Render internship folders */}</div>;
      default:
        return <div>Select a folder</div>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default ContentArea;
