import { sidebarData } from "@/constants/folderData";
import { FileItem } from "./FileExplorer";

export const getChildrenById = (folderId: string, level: number): FileItem[] => {
  const sections = Object.values(sidebarData); // Converts to an array of all sidebar sections
  const sidebarItem = sections.find((item) => item.id === folderId);

  if (!sidebarItem) return [];

  let currentChildren = sidebarItem.children ? Object.values(sidebarItem.children) : [];

  for (let i = 1; i < level; i++) {
    currentChildren = currentChildren.flatMap((child) => {
      if (!child.children) return []; // No children in this folder
      return Object.values(child.children);
    });
  }

  return currentChildren;
};

