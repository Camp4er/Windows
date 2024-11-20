import React from 'react';

interface SidebarProps {
  onNavigate: (newPath: string[]) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const folders = ['Desktop', 'Documents', 'Downloads', 'Projects', 'About', 'Contact'];

  return (
    <div className="w-60 bg-gray-100 border-r border-gray-300 h-full p-4 transition-opacity duration-500 opacity-100">
      <h3 className="font-bold text-gray-700 mb-4">Quick Access</h3>
      <ul className="space-y-2">
        {folders.map((folder, index) => (
          <li key={index}>
            <button
              className="w-full text-left text-sm text-blue-500 hover:underline"
              onClick={() => onNavigate(['This PC', folder])}
            >
              {folder}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
