import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import ContentArea from './ContentArea';
import { folderData, folderIcons } from '@/constants/folderData';

const FileExplorer = () => {

  const [path, setPath] = useState<string[]>(['This PC']); // Current navigation path

  const navigateTo = (newPath: string[]) => setPath(newPath); //Update path on navigation

  return (
    <div className='p-0'>
        <Toolbar path={path} onNavigate={navigateTo} folderIcons={folderIcons} />
        <div className="p-0 m-0 flex flex-row gap-5">
          <Sidebar onNavigate={navigateTo} />
    <ContentArea path={path} folderContents={folderData} onNavigate={(subfolder) => navigateTo([...path, subfolder])}/>

        </div>

    
    </div>
  );
};

export default FileExplorer;
