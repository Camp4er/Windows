"use client"

import React from "react";
import { FileItem } from "./FileExplorer";
import Image from "next/image";

interface SidebarProps {
	foldersOne: FileItem[];
  foldersTwo: FileItem[];
  foldersThree: FileItem[];
	onFolderClick: (folder: FileItem, isSidebarClick: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ foldersOne, foldersTwo, foldersThree, onFolderClick }) => {

	return (
		<div className="w-52 h-full  bg-gray-900 border-r border-gray-500 p-4 transition-opacity duration-500 opacity-100">
			{/* First section */}

      <ul className="space-y-2">
        {foldersOne.map(folder => (
          <li key={folder.id} className="flex pl-8 hover:bg-gray-700 cursor-pointer rounded">
            <button
              className="w-full flex items-center justify-start gap-1 text-center text-sm text-white rounded py-1 pl-1"
              onClick={() => onFolderClick(folder, true)}
            >
              <Image src={folder.icons} alt={folder.name} width={20} height={20} className="mr-2"/>
              {folder.name}
            </button>
          </li>
        ))}
      </ul>


      <br className="text-white"/>

      {/* Second section */}
			<ul className="space-y-2">
        {foldersTwo.map(folder => (
          <li key={folder.id} className="flex pl-8 hover:bg-gray-700 cursor-pointer rounded">
            <button
              className="w-full flex items-center justify-start gap-1 text-center text-sm text-white rounded py-1 pl-1"
              onClick={() => onFolderClick(folder, true)}
            >
              <Image src={folder.icons} alt={folder.name} width={20} height={20} className="mr-2"/>
              {folder.name}
            </button>
          </li>
        ))}
      </ul>

      <br className="text-white"/>

      {/* Third section */}
			<ul className="space-y-2">
        {foldersThree.map(folder => (
          <li key={folder.id} className="flex pl-8 hover:bg-gray-700 cursor-pointer rounded">
            <button
              className="w-full flex items-center justify-start gap-1 text-center text-sm text-white rounded py-1 pl-1"
              onClick={() => onFolderClick(folder, true)}
            >
              <Image src={folder.icons} alt={folder.name} width={20} height={20} className="mr-2"/>
              {folder.name}
            </button>
          </li>
        ))}
      </ul>
		</div>
	);
};

export default Sidebar;