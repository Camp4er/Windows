import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import ContentArea from './ContentArea';
import { folderData } from '@/constants/folderData';

const FileExplorer = () => {
  const [path, setPath] = useState<string[]>(['This PC']); // Global path state

  // Navigate to a new path
  const navigateTo = (newPath: string[]) => setPath(newPath);

  // Go back one level
  const handleBack = () => path.length > 1 && setPath((prev) => prev.slice(0, -1));

  // Go forward (for later implementation)
  const handleForward = () => {};

  type FileType = 'folder' | 'file';

type FileItem = {
  id: number;
  name: string;
  type: FileType;
  children?: FileItem[]; // For nested folders
  onClick?: () => void; // Optional click handler for files
};

type FileExplorerProps = {
  initialData: FileItem[];
};


  return (
    <div className="p-0">
      <Toolbar 
        path={path} 
        onNavigate={navigateTo} 
        onBack={handleBack} 
      />
      <div className="flex flex-row gap-5 p-0 m-0">
        <Sidebar onNavigate={navigateTo} />
        <ContentArea 
          path={path} 
          folderContents={folderData} 
          onNavigate={(subfolder) => navigateTo([...path, subfolder])} 
        />
      </div>
    </div>
  );
};

export default FileExplorer;
