export const folderData: FolderData = {
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

  type FolderContent = { name: string; type: 'file' | 'folder' };
type FolderData = {
  [key: string]: FolderContent[]; // Allows dynamic string keys
};


  export const folderIcons: { [key: string]: string } = {
    'This PC': '/icons/share.png',
    Documents: '/icons/share.png',
    Desktop: '/icons/share.png',
    Downloads: '/icons/share.png',
  };
  