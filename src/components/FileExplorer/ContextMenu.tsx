import React from "react";

interface ContextMenuProps {
  skill: string;
  position: { x: number; y: number };
  onClose: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ skill, position, onClose }) => {
  return (
    <div
      style={{ top: position.y, left: position.x }}
      className="absolute bg-gray-800 text-white shadow-md rounded"
    >
      <ul>
        <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={onClose}>
          Open Documentation
        </li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={onClose}>
          Copy Name
        </li>
        <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={onClose}>
          View Details
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
