"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import ContentArea from './ContentArea';
import { getChildrenById } from './FileStr';
import { sidebarData } from '@/constants/folderData';

type FileType = 'folder' | 'file';

export type FileItem = {
  id: string | number; 
  name: string;
  type: FileType; 
  icons?: string;
  dateModified?: string;
  size?: string;
  children?: FileItem[];
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
    setCurrentPath([{ id: initialSidebarId, name: 'Root', type: 'folder' }]); 
  }, [initialSidebarId]);

  const handleFolderClick = (folder: FileItem) => {
    const isSidebarFolder = currentPath.length === 1; // If there's only "Root", then it's a sidebar click

    setCurrentPath((prevPath) => {
      // 🛠️ Check if folder already exists in the path
      const folderIndex = prevPath.findIndex((item) => item.id === folder.id);
      if (folderIndex !== -1) {
        // If it exists, trim everything after it
        return prevPath.slice(0, folderIndex + 1);
      } 
      // If it doesn't exist, add it to the path
      return [...prevPath, folder];
    });
    
    if (isSidebarFolder) {
      // Reset to only have the clicked folder as the current path
      setCurrentPath([{ id: folder.id, name: folder.name, type: 'folder' }]);
    } else {
      // Add this folder to the existing path (for ContentArea clicks)
      setCurrentPath((prevPath) => [...prevPath, folder]);
    }
  
    const newChildren = getChildrenById(folder.id) || [];
    setActiveFolder(newChildren);
  };

  // const handleFolderClick = (folder: FileItem) => {
  //   setCurrentPath((prevPath) => [...prevPath, folder]); // Track parent-child relationship
  //   const newChildren = getChildrenById(folder.id) || []; 
  //   setActiveFolder(newChildren);
  // };

  // const handleBreadcrumbClick = (index: number) => {
  //   const newPath = currentPath.slice(0, index + 1);
  //   setCurrentPath(newPath);
  //   const lastItem = newPath[newPath.length - 1];
  //   const newChildren = getChildrenById(lastItem.id);
  //   setActiveFolder(newChildren);
  // };

  

  const handleBreadcrumbClick = (index: number) => {
    setCurrentPath((prevPath) => prevPath.slice(0, index + 1)); // 🛠️ Slice path up to the clicked breadcrumb
    const lastItem = currentPath[index]; // 🛠️ Get the folder from the breadcrumb
    const newChildren = getChildrenById(lastItem.id) || [];
    setActiveFolder(newChildren);
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
    <div className="p-0">
      <Toolbar 
        currentPath={currentPath} 
        onBreadcrumbClick={handleBreadcrumbClick} 
        onBack={handleBack} 
      />
      <div className="flex flex-row gap-5 p-0 m-0">
        <Sidebar folders={Object.values(sidebarData).flat()} onFolderClick={handleFolderClick} />
        <ContentArea items={activeFolder} onFolderClick={handleFolderClick} />
      </div>
    </div>
  );
};

export default FileExplorer;
