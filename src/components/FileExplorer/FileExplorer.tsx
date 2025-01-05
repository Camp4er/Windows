"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import ContentArea from "./ContentArea";
import { getChildrenById } from "./FileStr";
import { sectionOne, sectionThree, sectionTwo } from "@/constants/folderData";

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
  const [history, setHistory] = useState<FileItem[][]>([]);
  const [forwardStack, setForwardStack] = useState<FileItem[][]>([]);

  useEffect(() => {
    const initialChildren = getChildrenById(initialSidebarId) as FileItem[];
    setActiveFolder(initialChildren);
    setCurrentPath([
      { id: initialSidebarId, name: "Home", type: "folder", icons: "" },
    ]);
    setHistory([
      [{ id: initialSidebarId, name: "Home", type: "folder", icons: "" }],
    ]);
  }, [initialSidebarId]);

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
      setHistory((prev) => [
        ...prev,
        [
          {
            id: folder.id,
            name: folder.name,
            type: "folder",
            icons: folder.icons,
          },
        ],
      ]);
      setForwardStack([]);
      const newChildren =
        folder.children && folder.children.length > 0 ? folder.children : [];
      setActiveFolder(newChildren);
    } else {
      setCurrentPath((prevPath) => {
        const folderIndex = prevPath.findIndex((item) => item.id === folder.id);
        const newPath =
          folderIndex !== -1
            ? prevPath.slice(0, folderIndex + 1)
            : [...prevPath, folder];
        setHistory((prev) => [...prev, newPath]);
        setForwardStack([]);
        return newPath;
      });
      // Show immediate children (not deepest)
      const newChildren =
        folder.children && folder.children.length > 0 ? folder.children : [];
      setActiveFolder(newChildren);
    }
  };

  // const handleBreadcrumbClick = (index: number) => {
  //   setCurrentPath((prevPath) => prevPath.slice(0, index + 1));

  //   const lastItem = currentPath[index];
  //   const newChildren = lastItem.children || getChildrenById(lastItem.id) || [];

  //   setActiveFolder(newChildren);
  // };

  const handleBreadcrumbClick = (index: number) => {
    const newPath = currentPath.slice(0, index + 1);
    setCurrentPath(newPath);
    setHistory((prev) => [...prev, newPath]);
    setForwardStack([]);
    const lastItem = newPath[newPath.length - 1];
    const newChildren = getChildrenById(lastItem.id) || [];
    setActiveFolder(newChildren);
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      const lastPath = newHistory.pop();
      if (lastPath) setForwardStack((prev) => [lastPath, ...prev]);
      setCurrentPath(newHistory[newHistory.length - 1]);
      setActiveFolder(
        getChildrenById(newHistory[newHistory.length - 1].slice(-1)[0].id) || []
      );
      setHistory(newHistory);
    }
  };

  const handleForward = () => {
    if (forwardStack.length > 0) {
      const nextPath = forwardStack[0];
      setCurrentPath(nextPath);
      setActiveFolder(getChildrenById(nextPath.slice(-1)[0].id) || []);
      setHistory((prev) => [...prev, nextPath]);
      setForwardStack((prev) => prev.slice(1));
    }
  };

  const handleReload = () => {
    const lastItem = currentPath[currentPath.length - 1];
    setActiveFolder(getChildrenById(lastItem.id) || []);
  };

  return (
    <div className="p-0 h-full flex flex-col gap-0">
      <Toolbar
        currentPath={currentPath}
        onBreadcrumbClick={handleBreadcrumbClick}
        onBack={handleBack}
        onForward={handleForward}
        onReload={handleReload}
      />
      <div className="flex flex-row gap-5 p-0 m-0 h-full">
        <Sidebar
          foldersOne={Object.values(sectionOne).flat()}
          foldersTwo={Object.values(sectionTwo).flat()}
          foldersThree={Object.values(sectionThree).flat()}
          onFolderClick={handleFolderClick}
        />
        <ContentArea
          items={activeFolder}
          activeFolder={activeFolder}
          onFolderClick={handleFolderClick}
        />
      </div>
    </div>
  );
};

export default FileExplorer;
