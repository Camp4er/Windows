"use client";
import { useState } from "react";
import { FileItem } from "./FileExplorer";
import Banner from "./Banner";
import Image from "next/image";

type ContentAreaProps = {
  items: FileItem[];
  onFolderClick: (folder: FileItem, isSidebarClick: boolean) => void;
};

const ContentArea: React.FC<ContentAreaProps> = ({ items, onFolderClick }) => {
  const [selectedItem, setSelectedItem] = useState<FileItem | null>(null);

  return (
    <div className="w-full p-4 bg-gray-900 text-white flex-1">
      {selectedItem && selectedItem.children ? (
      <table className="w-full rounded-md shadow-sm">
        <thead className="text-white text-sm border-b-8 border-gray-900">
          <tr>
            <th className="px-5 text-left border-gray-500 border-r-2">Name</th>
            <th className="px-5 text-left border-gray-500 border-r-2">Type</th>
            <th className="px-5 text-left border-gray-500 border-r-2">Date Modified</th>
            <th className="px-5 text-left border-gray-500 border-r-2">Size</th>
          </tr>
        </thead>
        {/* the rounded property in tr of tbody only works of i give it flex as well but then the issue of gap arrises */}
          <tbody className="text-gray-100 rounded text-sm">
            {selectedItem.children.map((child) => (
              <tr
                key={child.id}
                onClick={() => {
                  onFolderClick(child, false);
                  setSelectedItem(child);
                }}
                className="hover:bg-gray-700 cursor-pointer hover:rounded"
              >
                <td className="px-5 py-1 flex flex-row">
                  <Image src={child.icons} width={25} height={20} alt={child.name} className="pr-2"/>
                  {child.name}
                </td>
                <td className="px-5 py-1">{child.type}</td>
                <td className="px-5 py-1">{child.dateModified}</td>
                <td className="px-5 py-1">{child.size}</td>
              </tr>
            ))}
          </tbody>
          </table>
        ) : !selectedItem ? (
          items.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedItem(item);
                onFolderClick(item, false);
              }}
            >
              {item.name}
            </div>
          ))
        ) : (
          <div className="w-full">
            <Banner />
          </div>
        )}  
    </div>
  );
};

export default ContentArea;
