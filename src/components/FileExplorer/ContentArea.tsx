"use client";
import { useEffect, useState } from "react";
import { FileItem } from "./FileExplorer";
import Banner from "./Banner";
import Image from "next/image";

type ContentAreaProps = {
  items: FileItem[];
  activeFolder: FileItem[];  // This updates on sidebar click
  onFolderClick: (folder: FileItem, isSidebarClick: boolean) => void;
};

// Helper function to check for nested children
const getNestedChildren = (folder: FileItem | null): FileItem[] => {
  if (!folder) return [];
  if (folder.children && folder.children.length > 0) return folder.children;
  return [];
};

const ContentArea: React.FC<ContentAreaProps> = ({
  items,
  activeFolder,
  onFolderClick,
}) => {
  const [selectedItem, setSelectedItem] = useState<FileItem | null>(null);

  // Reset selectedItem if activeFolder changes
  useEffect(() => {
    setSelectedItem(null);
  }, [activeFolder]);

  // Fetch children or fallback to nested children
  const currentItems = selectedItem
    ? getNestedChildren(selectedItem)
    : items;

  return (
    <div className="w-full p-4 bg-gray-900 text-white flex-1">
      {currentItems && currentItems.length > 0 ? (
        <table className="w-full rounded-md shadow-sm">
          <thead className="text-white text-sm border-b-8 border-gray-900">
            <tr>
              <th className="px-5 text-left border-gray-500 border-r-2">Name</th>
              <th className="px-5 text-left border-gray-500 border-r-2">Type</th>
              <th className="px-5 text-left border-gray-500 border-r-2">Date Modified</th>
              <th className="px-5 text-left border-gray-500 border-r-2">Size</th>
            </tr>
          </thead>
          <tbody className="text-gray-100 rounded text-sm">
            {currentItems.map((child) => (
              <tr
                key={child.id}
                onClick={() => {
                  setSelectedItem(child);
                  onFolderClick(child, false);
                }}
                className="hover:bg-gray-700 cursor-pointer"
              >
                <td className="px-5 py-1 flex flex-row">
                  <Image
                    src={child.icons}
                    width={25}
                    height={20}
                    alt={child.name}
                    className="pr-2"
                  />
                  {child.name}
                </td>
                <td className="px-5 py-1">{child.type}</td>
                <td className="px-5 py-1">{child.dateModified || "-"}</td>
                <td className="px-5 py-1">{child.size || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="w-full">
          <Banner />
        </div>
      )}
    </div>
  );
};

export default ContentArea;
