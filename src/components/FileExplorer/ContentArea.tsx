"use client";
import { useEffect, useState } from "react";
import { FileItem } from "./FileExplorer";
import Banner from "./Banner";
import Image from "next/image";
import Notepad from "../SeparateWindows/Notepad";
import { useWindowManager } from "../NewWindow/WindowManagerContext";

type ContentAreaProps = {
  items: FileItem[];
  activeFolder: FileItem[];  // Sidebar-clicked folder
  onFolderClick: (folder: FileItem, isSidebarClick: boolean) => void;
};

// Recursive function to find children at the deepest level
const getDeepestChildren = (folder: FileItem): FileItem[] => {
  if (!folder.children || folder.children.length === 0) return [];
  let nextLevel = folder.children;

  while (nextLevel.some(item => item.children && item.children.length > 0)) {
    nextLevel = nextLevel.flatMap(item => item.children || []);
  }
  return nextLevel;
};

const ContentArea: React.FC<ContentAreaProps> = ({
  items,
  activeFolder,
  onFolderClick,
}) => {
  const { openWindow } = useWindowManager();
  const [selectedItem, setSelectedItem] = useState<FileItem | null>(null);
  const [currentItems, setCurrentItems] = useState<FileItem[]>(items);

  // Reset when sidebar folder is clicked
  useEffect(() => {
    setSelectedItem(null);
    setCurrentItems(items);
  }, [items]);

  // Handles folder click inside content area
  const handleFolderClick = (item: FileItem) => {
    if (item.children && item.children.length > 0) {
      const nextLevelChildren = getDeepestChildren(item);
      setCurrentItems(nextLevelChildren.length > 0 ? nextLevelChildren : item.children);
    } else {
      setCurrentItems([]);
    }
    setSelectedItem(item);
  if (item.onClick) {
    item.onClick();
    return; // Prevent default behavior
  }
    onFolderClick(item, false);
  };

  return (
    <div className="w-full p-4 bg-gray-900 text-white flex-1">
      {currentItems.length > 0 ? (
        <table className="w-full rounded-md shadow-sm">
          <thead className="text-white text-sm border-b-8 border-gray-900">
            <tr>
              <th className="px-5 text-left border-gray-500 border-r-2">Name</th>
              <th className="px-5 text-left border-gray-500 border-r-2">Type</th>
              <th className="px-5 text-left border-gray-500 border-r-2">Date Modified</th>
              <th className="px-5 text-left border-gray-500 border-r-2">Size</th>
            </tr>
          </thead>
          <tbody className="text-gray-100 rounded text-sm">
            {currentItems.map((child) => (
              <tr
                key={child.id}
                onClick={() => {
                  if (child.name === "Description") {
                    openWindow(
                      "Notepad",
                      "/icons/notepad.png",
                      <Notepad content="hello" />
                    );
                  }
                  if (!child.onClick) {
                    handleFolderClick(child);
                  }
                  child.onClick?.();
                }}
                className="hover:bg-gray-700 cursor-pointer"
              >
                <td className="px-5 py-1 overflow-hidden whitespace-nowrap flex flex-row">
                  <Image
                    src={child.icons}
                    width={25}
                    height={20}
                    alt={child.name}
                    className="pr-2"
                  />
                  {child.name}
                </td>
                <td className="px-5 py-1 overflow-hidden whitespace-nowrap">{child.type}</td>
                <td className="px-5 py-1 overflow-hidden whitespace-nowrap">{child.dateModified || "-"}</td>
                <td className="px-5 py-1 overflow-hidden whitespace-nowrap">{child.size || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="w-full">
          <Banner />
        </div>
      )}
    </div>
  );
};

export default ContentArea;
