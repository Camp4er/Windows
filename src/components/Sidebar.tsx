import Image from "next/image";
import React from "react";
import { FileItem } from "./FileExplorer";

interface SidebarProps {
	folders: FileItem[];
	onFolderClick: (folder: FileItem, isSidebarClick: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ folders, onFolderClick }) => {

	return (
		<div className="w-60 bg-gray-900 border-r border-gray-500 h-full p-4 transition-opacity duration-500 opacity-100">
			{/* First  section */}
			<div className="flex flex-col items-start space-x-2 mb-4">
      {folders.map(folder => (
        <button key={folder.id} onClick={() => onFolderClick(folder,true)}>{folder.name}</button>
				))}
			</div>
      <br className="text-white"/>

			{/* Second section */}
			{/* <ul className="space-y-2">
        {folders.map((folder, index) => (
          <li key={index} className="flex pl-8 hover:bg-gray-700 cursor-pointer rounded">
            <button
              className="w-full flex items-center justify-start gap-1 text-center text-sm text-white rounded py-1 pl-1"
              onClick={() => onNavigate(["This PC", folder])}
            >
              <Image src="/icons/user-folder.png" alt="Windows icon" width={20} height={20} />
              {folder}
            </button>
          </li>
        ))}
      </ul>

      <br className="text-white"/> */}

			{/* Third section */}
			{/* <ul className="space-y-2">
        {mainFolders.map((folder, index) => (
          <li key={index} className="flex pl-8 hover:bg-gray-700 cursor-pointer rounded">
            <button
              className="w-full flex items-center justify-start gap-1 text-sm text-white rounded py-1 pl-1"
              onClick={() => onNavigate([folder])}
            >
              <Image src="/icons/user-folder.png" alt="Windows icon" width={20} height={20} />
              {folder}
            </button>
          </li>
        ))}
      </ul> */}
		</div>
	);
};

export default Sidebar;