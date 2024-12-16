import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import ContentArea from "./ContentArea";
import { getChildrenById } from "./FileStr";
import { sidebarData } from "@/constants/folderData";

type FileType = "folder" | "file";

export type FileItem = {
  id: string; // Change to string to support sidebar1, folder2, etc.
  name: string;
  type: FileType;
  children?: FileItem[]; // For nested folders
  onClick?: () => void; // Optional click handler for files
};

type FileExplorerProps = {
  initialSidebarId: string; // e.g., 'sidebar1', 'sidebar10', etc.
};

const FileExplorer = ({ initialSidebarId }: FileExplorerProps) => {
  const [currentPath, setCurrentPath] = useState<string[]>([initialSidebarId]); // Tracks the navigation path using folder IDs
  const [activeFolder, setActiveFolder] = useState<FileItem[]>([]); // Tracks current folder contents

  // Load the initial children for the initial sidebar ID
  useEffect(() => {
    const initialChildren = getChildrenById(initialSidebarId, 1); // Get level 1 children for the initial sidebar
    setActiveFolder(initialChildren);
  }, [initialSidebarId]);

  // Handle folder click: Update the path and display new contents
  const handleFolderClick = (folder: FileItem) => {
    const newPath = [...currentPath, folder.id]; // Append the clicked folder's ID to the path
    setCurrentPath(newPath);
    const newChildren = getChildrenById(folder.id, 1); // Get children for the clicked folder
    setActiveFolder(newChildren);
  };

  // Handle breadcrumb click to navigate to a previous path
  const handleBreadcrumbClick = (index: number) => {
    const newPath = currentPath.slice(0, index + 1); // Shorten the path up to the clicked breadcrumb
    setCurrentPath(newPath);

    let newActiveFolder = getChildrenById(newPath[0], 1); // Start with top-level sidebar data
    newPath.slice(1).forEach((id) => {
      newActiveFolder = getChildrenById(id, 1); // Navigate into each folder level
    });

    setActiveFolder(newActiveFolder);
  };

  // Go back one level
  const handleBack = () => {
    if (currentPath.length > 1) {
      const newPath = currentPath.slice(0, -1);
      setCurrentPath(newPath);
      const newChildren = getChildrenById(newPath[newPath.length - 1], 1);
      setActiveFolder(newChildren);
    }
  };

  return (
    <div className="p-0">
      <Toolbar
        currentPath={currentPath}
        onBreadcrumbClick={handleBreadcrumbClick}
        onBack={handleBack}
      />
      <div className="flex flex-row gap-5 p-0 m-0">
      <Sidebar
  folders={Object.values(sidebarData).map((folder) => ({
    id: folder.id,
    name: folder.name,
    type: folder.type === 'folder' ? 'folder' : 'file',
    children: Array.isArray(folder.children) ? folder.children.map((child) => ({
      id: child.id,
      name: child.name,
      type: child.type,
    })) : [],
  }))}
  onFolderClick={handleFolderClick}
/>
        <ContentArea items={activeFolder} onFolderClick={handleFolderClick} />
      </div>
    </div>
  );
};

export default FileExplorer;
