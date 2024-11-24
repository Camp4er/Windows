import React from "react";

interface SidebarProps {
  onNavigate: (newPath: string[]) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const general = ["Home", "Gallery"];
  const folders = [
    "Desktop",
    "Documents",
    "Downloads",
    "Music",
    "Videos",
    "Screenshots",
  ];
  const mainFolders = ["OneDrive", "This PC", "Network", "Linux"];

  return (
    <div className="w-60 bg-gray-900 border-r border-gray-500 h-full p-4 transition-opacity duration-500 opacity-100">
      {/* First  section */}
      <ul className="space-y-2">
        {general.map((item, index) => (
          <li key={index}>
            <button
              className="w-full text-left text-sm text-white hover:underline"
              onClick={() => onNavigate(["This PC", item])}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <br className="text-white"/>

      {/* Second section */}
      <ul className="space-y-2">
        {folders.map((folder, index) => (
          <li key={index}>
            <button
              className="w-full text-left text-sm text-white hover:underline"
              onClick={() => onNavigate(["This PC", folder])}
            >
              {folder}
            </button>
          </li>
        ))}
      </ul>

      <br className="text-white"/>

      {/* Third section */}
      <ul className="space-y-2">
        {mainFolders.map((folder, index) => (
          <li key={index}>
            <button
              className="w-full text-left text-sm text-white hover:underline"
              onClick={() => onNavigate([folder])}
            >
              {folder}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
