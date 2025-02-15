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
  folderContents: { [key: string]: FileItem[] };
  onNavigate: (folderName: string) => void; // Add navigation handler for subfolders
}
