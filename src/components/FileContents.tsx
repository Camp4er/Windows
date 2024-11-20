import React from 'react';

interface FileContentsProps {
  folderContents: { name: string; type: 'file' | 'folder' }[];
  onOpen: (name: string) => void;
}

const FileContents: React.FC<FileContentsProps> = ({ folderContents, onOpen }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 transform transition-transform duration-500 ease-in-out">
      {folderContents.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-sm cursor-pointer hover:text-blue-500 group"
          onClick={() => onOpen(item.name)}
        >
          {/* Folder/File Icon */}
          <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded transition-transform duration-300 group-hover:scale-105">
            {item.type === 'folder' ? (
              <span className="material-icons text-yellow-500">folder</span>
            ) : (
              <span className="material-icons text-gray-500">insert_drive_file</span>
            )}
          </div>
          <p className="mt-2 text-center">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FileContents;
