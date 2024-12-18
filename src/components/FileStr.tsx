import { sidebarData } from "@/constants/folderData";
import { FileItem } from "./FileExplorer";

export const getChildrenById = (id: number | string): FileItem[] => {
  const sections = Object.values(sidebarData); 
  const idParts = id.toString().split('.'); 
  let currentChildren: FileItem[] = sections.flatMap((section) => section ); // Ensures type

  idParts.forEach(part => {
    const currentId = parseFloat(part); 
    const folder = currentChildren.find(item => item.id === currentId);
    currentChildren = folder?.children || []; 
  });

  return currentChildren;
};
