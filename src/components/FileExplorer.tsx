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
    setCurrentPath((prevPath) => [...prevPath, folder]);
    const newChildren = getChildrenById(folder.id);
    setActiveFolder(newChildren);
  };

  const handleBreadcrumbClick = (index: number) => {
    const newPath = currentPath.slice(0, index + 1);
    setCurrentPath(newPath);
    const lastItem = newPath[newPath.length - 1];
    const newChildren = getChildrenById(lastItem.id);
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
