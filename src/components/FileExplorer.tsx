import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Sidebar from './Sidebar';
import FileContents from './FileContents';

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
    <div>
        <div className="header1 bg-gray-700 flex">
            <div className="arrows flex items-start hover:bg-gray-600 p-2">
            <div className="flex items-center">
                <img src="/icons/whiteleftarrow.svg" alt="arrow" />
            </div>
            <div className="flex items-center">
                <img src="/icons/whiterightarrow.svg" alt="arrow" />
            </div>
            <div className="flex items-center">
                <img src="/icons/whiteuparrow.svg" alt="arrow" />
            </div>
            <div className="flex items-center">
                <img src="/icons/whitereload.png" alt="reload" className='w-6 h-3' />
            </div>
            </div>
            <div className="breadcrumbs">
            <Breadcrumb path={path} onNavigate={navigateTo} />
            </div>
            <div className="searchbar">
                <input type="text" placeholder='Search' />
                    <img src="" alt="search icon" />
            </div>
        </div>
        <div className="header2 flex"></div>
    <div className="flex h-full bg-white border border-gray-300 rounded-md overflow-hidden">
      {/* Sidebar */}
      <Sidebar onNavigate={navigateTo} />

      {/* Main Explorer Area */}
      <div className="flex-1 flex flex-col">
        {/* Breadcrumb */}
        <Breadcrumb path={path} onNavigate={navigateTo} />

        {/* Folder Contents with Sliding Animation */}
        <div
          className={`flex-1 transform transition-transform duration-500 ease-in-out ${
            slideDirection === 'right' ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <FileContents folderContents={folderContents} onOpen={openItem} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default FileExplorer;
