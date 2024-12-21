import { sidebarData } from "@/constants/folderData";
import { FileItem } from "./FileExplorer";

export const getChildrenById = (id: string | number) => {
  // Your folderData structure should be hierarchical like this:
  // { '1': { id: '1', children: [...] }, '1.1': { id: '1.1', children: [...] } }
  const allFiles = Object.values(sidebarData).flat(); // Get all sidebar sections
  const matchingFile = allFiles.find(file => file.id === id); 
  return matchingFile ? matchingFile.children : [];
};
