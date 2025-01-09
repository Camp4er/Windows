import { FileItem } from "@/components/FileExplorer/FileExplorer";

export interface BreadcrumbProps {
  currentPath: FileItem[];
  onBreadcrumbClick: (index: number) => void;
  onBack?: () => void;
  onForward?: () => void;
  onRefresh?: () => void;
  onUpArrowClick?: () => void;  
  onSearch?:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ContentAreaProps {
  path: string[];
  // folderContents: { [key: string]: { name: string; type: 'file' | 'folder' }[] };
  folderContents: any;
  onNavigate: (folderName: string) => void; // Add navigation handler for subfolders
}

const notepadContent = {
  "3.1": "This is the About section description...",
  "5.1.1": "Details about Project A's Description",
};