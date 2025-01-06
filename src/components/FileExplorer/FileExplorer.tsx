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
  const [history, setHistory] = useState<FileItem[][]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);

  useEffect(() => {
    const initialChildren = getChildrenById(initialSidebarId) as FileItem[];
    setActiveFolder(initialChildren);
    setCurrentPath([
      { id: initialSidebarId, name: "Home", type: "folder", icons: "" },
    ]);
    setHistory([
      [{ id: initialSidebarId, name: "Home", type: "folder", icons: "" }],
    ]);
    setHistoryIndex(0);
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
      setActiveFolder(folder.children || []);
      updateHistory([
        {
          id: folder.id,
          name: folder.name,
          type: "folder",
          icons: folder.icons,
        },
      ]);
    } else {
      setCurrentPath((prevPath) => {
        const folderIndex = prevPath.findIndex((item) => item.id === folder.id);
        const newPath =
          folderIndex !== -1
            ? prevPath.slice(0, folderIndex + 1)
            : [...prevPath, folder];
        const newChildren =
          folder.children && folder.children.length > 0 ? folder.children : [];
        setActiveFolder(newChildren);
        updateHistory(newPath);
        return newPath;
      });
    }
  };

  const handleBreadcrumbClick = (index: number) => {
    const newPath = currentPath.slice(0, index + 1);
    const lastItem = newPath[newPath.length - 1];
    const children = getChildrenById(lastItem.id);
    setActiveFolder(lastItem.children || getChildrenById(lastItem.id) || []);
    setCurrentPath(newPath);
    updateHistory(newPath);
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setCurrentPath(history[newIndex]);
      const lastItem = history[newIndex][history[newIndex].length - 1];
      setActiveFolder(lastItem.children || getChildrenById(lastItem.id) || []);
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setCurrentPath(history[newIndex]);
      const lastItem = history[newIndex][history[newIndex].length - 1];
      setActiveFolder(lastItem.children || getChildrenById(lastItem.id) || []);
    }
  };

  const handleRefresh = () => {
    const initialChildren = getChildrenById(1) as FileItem[];
    setActiveFolder(initialChildren);
    setCurrentPath([{ id: 1, name: "Home", type: "folder", icons: "" }]);
    setHistory([[{ id: 1, name: "Home", type: "folder", icons: "" }]]);
    setHistoryIndex(0);
  };

  const handleUpArrowClick = () => {
    setCurrentPath([{ id: 10, name: "This PC", type: "folder", icons: "" }]);
    const newChildren = (getChildrenById(10) as FileItem[]) || [];
    setActiveFolder(newChildren);
    updateHistory([{ id: 10, name: "This PC", type: "folder", icons: "" }]);
  };

  const updateHistory = (newPath: FileItem[]) => {
    const updatedHistory = history.slice(0, historyIndex + 1);
    updatedHistory.push(newPath);
    setHistory(updatedHistory);
    setHistoryIndex(updatedHistory.length - 1);
  };

  return (
    <div className="p-0 h-full flex flex-col gap-0">
      <Toolbar
        currentPath={currentPath}
        onBreadcrumbClick={handleBreadcrumbClick}
        onBack={handleBack}
        onForward={handleForward}
        onRefresh={handleRefresh}
        onUpArrowClick={handleUpArrowClick}
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
