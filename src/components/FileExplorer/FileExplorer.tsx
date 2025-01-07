"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import ContentArea from "./ContentArea";
import { getChildrenById } from "./FileStr";
import {
  sectionOne,
  sectionThree,
  sectionTwo,
} from "@/constants/folderData";

// Define file types as either folder or file
type FileType = "folder" | "file";

// Define the structure of a FileItem, which can represent files or folders
export type FileItem = {
  id: string | number;          // Unique identifier for the file/folder
  name: string;
  type: FileType;
  icons: string;
  dateModified?: string;
  size?: string;
  children?: FileItem[];
  parent?: FileItem;
  onClick?: () => void;
};

type FileExplorerProps = {
  initialSidebarId: number;
  sidebarData: FileItem[];  // Pass all folders as props
};

const FileExplorer = ({ initialSidebarId, sidebarData }: FileExplorerProps) => {
  // Track the current navigation path (breadcrumb style)
  const [currentPath, setCurrentPath] = useState<FileItem[]>([]);
  // Track the contents of the active folder being viewed
  const [activeFolder, setActiveFolder] = useState<FileItem[]>([]);
  // Maintain navigation history for back/forward functionality
  const [history, setHistory] = useState<FileItem[][]>([]);
  // Track the current index in the history (for navigation)
  const [historyIndex, setHistoryIndex] = useState(0);
  //For search input
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<FileItem[] | null>([]);

  useEffect(() => {
    const initialChildren = getChildrenById(initialSidebarId) as FileItem[];
    
    // Explicitly find the folder by ID from sidebarData
    const initialFolder = sidebarData.find((folder: FileItem) => folder.id === initialSidebarId) as FileItem;

    console.log("initialFolder:", initialFolder, initialChildren);

    if (initialFolder) {
      setActiveFolder(initialChildren);
      setCurrentPath([{
        id: initialFolder.id,
        name: initialFolder.name,
        type: initialFolder.type,
        icons: initialFolder.icons,
        children: initialChildren,
      }]);
      setHistory([[{
        id: initialFolder.id,
        name: initialFolder.name,
        type: initialFolder.type,
        icons: initialFolder.icons,
        children: initialChildren,
      }]]);
    } else {
      setActiveFolder([]);
      setCurrentPath([]);
      setHistory([]);
      console.log("Did not work");
    }
    setHistoryIndex(0);
  }, [initialSidebarId, sidebarData]);

  


  const handleFolderClick = (folder: FileItem, isSidebarClick: boolean) => {
    if (isSidebarClick) {
      // If it's a sidebar click, reset to show immediate children
      setCurrentPath([
        {
          id: folder.id,
          name: folder.name,
          type: "folder",
          icons: folder.icons,
        },
      ]);
      setActiveFolder(folder.children || []);    // Show folder contents
      setFilteredItems(null);
      setSearchQuery('');  // Clear input field
      updateHistory([
        {
          id: folder.id,
          name: folder.name,
          type: "folder",
          icons: folder.icons,
        },
      ]);
    } else {
       // Clicking inside content area updates the path progressively
      setCurrentPath((prevPath) => {
        const folderIndex = prevPath.findIndex((item) => item.id === folder.id);
        const newPath =
          folderIndex !== -1
            ? prevPath.slice(0, folderIndex + 1)    // Truncate path if folder exists in current path
            : [...prevPath, folder];                // Add folder to path if not present
        const newChildren =
          folder.children && folder.children.length > 0 ? folder.children : [];
          setActiveFolder(newChildren);  // Load folder contents
          setFilteredItems(null);
          updateHistory(newPath);        // Update navigation history
        return newPath;
      });
    }
  };

  // Handle breadcrumb navigation (clicking on path segments)
  const handleBreadcrumbClick = (index: number) => {
    const newPath = currentPath.slice(0, index + 1);
    const lastItem = newPath[newPath.length - 1];
    setActiveFolder(lastItem.children || getChildrenById(lastItem.id) || []);
    setFilteredItems(null);
    setCurrentPath(newPath);
    updateHistory(newPath);
  };

  // Navigate back in history
  const handleBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setCurrentPath(history[newIndex]);
      const lastItem = history[newIndex][history[newIndex].length - 1];
      setActiveFolder(lastItem.children || getChildrenById(lastItem.id) || []);
      setFilteredItems(null);
    }
  };

  // Navigate forward in history
  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setCurrentPath(history[newIndex]);
      const lastItem = history[newIndex][history[newIndex].length - 1];
      setActiveFolder(lastItem.children || getChildrenById(lastItem.id) || []);
      setFilteredItems(null);
    }
  };

  // Refresh and reset to Home directory
  const handleRefresh = () => {
    const initialChildren = getChildrenById(1) as FileItem[];
    setActiveFolder(initialChildren);
    setFilteredItems(null);
    setSearchQuery('');
    setCurrentPath([{ id: 1, name: "Home", type: "folder", icons: "" }]);
    setHistory([[{ id: 1, name: "Home", type: "folder", icons: "" }]]);
    setHistoryIndex(0);
  };

  // Navigate up one level to "This PC"
  const handleUpArrowClick = () => {
    setCurrentPath([{ id: 10, name: "This PC", type: "folder", icons: "" }]);
    const newChildren = (getChildrenById(10) as FileItem[]) || [];
    setActiveFolder(newChildren);
    setFilteredItems(null);
    setSearchQuery('');
    updateHistory([{ id: 10, name: "This PC", type: "folder", icons: "" }]);
  };

  //For search query
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  
    if (!query) {
      setFilteredItems(null);
    } else {
      const searchIn = activeFolder.length > 0 ? activeFolder : [];
      const filtered = searchIn.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };
  

  // Update navigation history after path changes
  const updateHistory = (newPath: FileItem[]) => {
    const updatedHistory = history.slice(0, historyIndex + 1);
    updatedHistory.push(newPath);
    setHistory(updatedHistory);
    setHistoryIndex(updatedHistory.length - 1);
  };

  // Render toolbar, sidebar, and content area
  return (
    <div className="p-0 h-full flex flex-col gap-0">
      <Toolbar
        currentPath={currentPath}
        onBreadcrumbClick={handleBreadcrumbClick}
        onBack={handleBack}
        onForward={handleForward}
        onRefresh={handleRefresh}
        onUpArrowClick={handleUpArrowClick}
        onSearch={handleChange}
      />
      <div className="flex flex-row gap-5 p-0 m-0 h-full">
        <Sidebar
          foldersOne={Object.values(sectionOne).flat()}
          foldersTwo={Object.values(sectionTwo).flat()}
          foldersThree={Object.values(sectionThree).flat()}
          onFolderClick={handleFolderClick}
        />
        <ContentArea
          items={filteredItems || activeFolder}
          activeFolder={activeFolder}
          onFolderClick={handleFolderClick}
        />
      </div>
    </div>
  );
};

export default FileExplorer;
