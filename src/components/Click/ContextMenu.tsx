import React, { useState } from 'react';

const ContextMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  };

  const handleClick = () => {
    setIsVisible(false);
  };

  const menuItems = [
    {
      id: 1,
      label: 'View',
      submenu: [
        { id: 1, label: 'Large Icons', action: () => console.log('Large Icons') },
        { id: 2, label: 'Medium Icons', action: () => console.log('Medium Icons') },
        { id: 3, label: 'Small Icons', action: () => console.log('Small Icons') },
        { id: 4, label: 'Show Desktop Icons', action: () => console.log('Toggle Desktop Icons') },
      ],
    },
    { id: 2, label: 'Refresh', action: () => window.location.reload() },
    {
      id: 3,
      label: 'Sort By',
      submenu: [
        { id: 1, label: 'Name', action: () => console.log('Sort by Name') },
        { id: 2, label: 'Size', action: () => console.log('Sort by Size') },
        { id: 3, label: 'Date Modified', action: () => console.log('Sort by Date') },
      ],
    },
    { id: 4, label: 'Next Desktop Background', action: () => console.log('Next Background') },
    { id: 5, label: 'Undo Delete', action: () => console.log('Undo Delete') },
    { id: 6, label: 'Open In Windows Terminal', action: () => console.log('Open Terminal') },
    { id: 7, label: 'Personalize', action: () => console.log('Personalize') },
    { id: 8, label: 'About', action: () => console.log('About') },
  ];

  return (
    <div
      className="w-screen h-screen relative"
      onContextMenu={handleContextMenu}
      onClick={handleClick}
    >
      {isVisible && (
        <ul
          className="absolute bg-white shadow-lg rounded-md text-sm p-2"
          style={{ top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }}
        >
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={item.action}
            >
              {item.label}
              {item.submenu && (
                <ul className="absolute left-full top-0 bg-white shadow-lg rounded-md p-2 hidden group-hover:block">
                  {item.submenu.map((subItem) => (
                    <li
                      key={subItem.id}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={subItem.action}
                    >
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContextMenu;
