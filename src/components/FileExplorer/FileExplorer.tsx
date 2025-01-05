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

type FileType = "folder" | "file";

export type FileItem = {
  id: string | number;
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
};

const FileExplorer = ({ initialSidebarId }: FileExplorerProps) => {
  const [currentPath, setCurrentPath] = useState<FileItem[]>([]);
  const [activeFolder, setActiveFolder] = useState<FileItem[]>([]);

  useEffect(() => {
    const initialChildren = getChildrenById(initialSidebarId) as FileItem[];
    setActiveFolder(initialChildren);
    setCurrentPath([{ id: initialSidebarId, name: "Home", type: "folder", icons: "" }]);
  }, [initialSidebarId]);

  const handleFolderClick = (folder: FileItem, isSidebarClick: boolean) => {
    if (isSidebarClick) {
      // If it's a sidebar click, reset to show immediate children
      setCurrentPath([{ id: folder.id, name: folder.name, type: "folder", icons: folder.icons }]);
      const newChildren = folder.children && folder.children.length > 0 ? folder.children : [];
      setActiveFolder(newChildren);
    } else {
      // Handle clicks from inside the content area
      setCurrentPath((prevPath) => {
        const folderIndex = prevPath.findIndex((item) => item.id === folder.id);
        if (folderIndex !== -1) {
          return prevPath.slice(0, folderIndex + 1);  // Go back to the existing path
        } else {
          return [...prevPath, folder];  // Append deeper folders
        }
      });
  
      // Show immediate children (not deepest)
      const newChildren = folder.children && folder.children.length > 0 ? folder.children : [];
      setActiveFolder(newChildren);
    }
  };
  
  

  const handleBreadcrumbClick = (index: number) => {
    setCurrentPath((prevPath) => prevPath.slice(0, index + 1)); // 🛠️ Slice path up to the clicked breadcrumb
    const lastItem = currentPath[index]; // 🛠️ Get the folder from the breadcrumb
    const newChildren = getChildrenById(lastItem.id) || [];
    setActiveFolder(newChildren); // Update active folder to the children of the clicked breadcrumb
    //setActiveFolder(lastItem.children || []);
  };


  const handleBack = () => {
    if (currentPath.length > 1) {
      const newPath = currentPath.slice(0, -1);
      setCurrentPath(newPath);
      const lastItem = newPath[newPath.length - 1];
      const newChildren = getChildrenById(lastItem.id);
      setActiveFolder(newChildren);
    }
  };

  return (
    <div className="p-0 h-full flex flex-col gap-0">
      <Toolbar
        currentPath={currentPath}
        onBreadcrumbClick={handleBreadcrumbClick}
        onBack={handleBack}
      />
      <div className="flex flex-row gap-5 p-0 m-0 h-full">
        <Sidebar
          foldersOne={Object.values(sectionOne).flat()}
          foldersTwo={Object.values(sectionTwo).flat()}
          foldersThree={Object.values(sectionThree).flat()}
          onFolderClick={handleFolderClick}
        />
        <ContentArea items={activeFolder} activeFolder={activeFolder} onFolderClick={handleFolderClick} />
      </div>
    </div>
  );
};

export default FileExplorer;
