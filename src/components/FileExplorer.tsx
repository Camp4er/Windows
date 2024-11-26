import React, { useState } from 'react';
import Sidebar from './Sidebar';
import FileContents from './FileContents';
import Toolbar from './Toolbar';
import ContentArea from './ContentArea';

type FolderContent = { name: string; type: 'file' | 'folder' };
type FolderData = {
  [key: string]: FolderContent[]; // Allows dynamic string keys
};

const folderData: FolderData = {
  'This PC': [
    { name: 'Desktop', type: 'folder' },
    { name: 'Documents', type: 'folder' },
    { name: 'Downloads', type: 'folder' },
    { name: 'Projects', type: 'folder' },
  ],
  Desktop: [
    { name: 'About', type: 'folder' },
    { name: 'Resume.pdf', type: 'file' },
  ],
  Projects: [
    { name: 'Portfolio', type: 'folder' },
    { name: 'Snake Game.js', type: 'file' },
  ],
  About: [
    { name: 'README.md', type: 'file' },
  ],
};

const FileExplorer = () => {
  const [path, setPath] = useState<string[]>(['This PC']);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const currentFolder = path[path.length - 1]; // Get the last item in the path array
  const folderContents = folderData[currentFolder] || []; // Access folder contents dynamically

  // Navigate to a new path
  const navigateTo = (newPath: string[]) => {
    const goingBack = newPath.length < path.length; // Check if user is going back
    setSlideDirection(goingBack ? 'left' : 'right');
    setPath(newPath);
  };

  // Open a specific folder or file
  const openItem = (name: string) => {
    const item = folderContents.find((content) => content.name === name);
    if (item && item.type === 'folder') {
      setSlideDirection('right');
      setPath([...path, name]); // Add folder name to path
    }
  };

  return (
    <div className='p-0'>
        <Toolbar path={path} onNavigate={navigateTo} />
        <div className="p-0 m-0 flex flex-row gap-10">
          <Sidebar onNavigate={navigateTo} />
    <ContentArea path={path} />

        </div>

    
    </div>
  );
};

export default FileExplorer;
