"use client";

import React from "react";
import Image from "next/image";
import { BreadcrumbProps } from "../constants/constants";
import { FileItem } from "./FileExplorer";

const Toolbar = ({ currentPath, onBreadcrumbClick, onBack }: BreadcrumbProps) => {
  //const currentFolder = path[path.length - 1]; // Name of the last item in the path array

  const getPath = (item: FileItem) => {
    const path = [];
    let current: FileItem | undefined = item;
    while (current) {
      path.unshift(current.name);
      current = current.parent;
      if (!current) break; // Add this null check
    }
    return path.join(' / ');
  };

  return (
    <div className="h-full">
      {/* Header 1 */}
      <div className="flex items-center px-4 py-2 bg-gray-800 text-white border-b border-gray-500">
        {/* Navigation Buttons */}
        <div className="flex space-x-2 mr-4 gap-2">
          <button onClick={onBack} className="p-2 rounded hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l4.147-4.146a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .708-.708L2.707 8.5H14.5a.5.5 0 0 0 .5-.5z" />
            </svg>
          </button>
          <button className="p-2 rounded hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a.5.5 0 0 0 .5.5h11.793l-4.147 4.146a.5.5 0 0 0 .708.708l5-5a.5.5 0 0 0 0-.708l-5-5a.5.5 0 0 0-.708.708L13.293 7.5H1.5A.5.5 0 0 0 1 8z" />
            </svg>
          </button>
          <button className="p-2 rounded hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l4.147-4.146a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .708-.708L2.707 8.5H14.5a.5.5 0 0 0 .5-.5z" />
            </svg>
          </button>
          <button className="p-2 rounded hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              width="16px"
              height="16px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 .95-.22 1.84-.6 2.63l1.46 1.46C19.44 14.8 20 13.46 20 12c0-4.42-3.58-8-8-8zm6.36 9.87L17 12c-.38.88-.94 1.67-1.6 2.32l1.36 1.36C18.52 14.45 19.74 13 19.74 12c0-1.48-1.12-2.67-2.63-3.13zm-12.96-.2C4.64 12.78 4 13.33 4 14c0 1.48 1.12 2.67 2.63 3.13C7.38 17 8.06 17 8 16c-1.04-.51-1.88-1.48-1.99-2.85l1.36-1.36zM12 20v3l4-4-4-4v3c-3.31 0-6-2.69-6-6 0-.95.22-1.84.6-2.63l-1.46-1.46C4.56 9.2 4 10.54 4 12c0 4.42 3.58 8 8 8z" />
            </svg>
          </button>
        </div>

        {/* Breadcrumbs */}
        <div className="flex flex-grow items-center space-x-2 text-gray-300">
          <div className="flex items-center justify-start flex-row  w-full pl-5 pr-2 py-1 bg-gray-900  rounded text-gray-300 focus:outline-none focus:ring focus:ring-gray-600 gap-2">
              {/* Display the folder icon */}
              {/* <Image
                src={folderIcons[currentFolder] || "/icons/app.png"}
                alt={currentFolder}
                width={20}
                height={20}
              /> */}
              {/* Display the breadcrumb */}
              {/* {currentPath.map((item, index) => (
        <span key={item.id} onClick={() => onBreadcrumbClick(index)}>
          {item.name} {index < currentPath.length - 1 && '>'}
        </span>
      ))} */}
      {currentPath.map((item, index) => (
          <span key={index}>
            {index > 0 && (
              <button
                onClick={() => onBreadcrumbClick(index - 1)}
                className="text-gray-200 hover:text-gray-100"
              >
                &larr;
              </button>
            )}
            <span className="text-gray-200">{getPath(item)}</span>
          </span>
        ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 ml-4 flex items-center relative">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-2 pr-8 py-1 bg-gray-900  rounded text-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-600"
          />
          <Image
            src="/icons/search-dark.svg"
            alt="search icon"
            width={18}
            height={18}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>

      {/* Header 2 */}
      <div className="flex items-center px-4 py-2 bg-gray-900 border-b border-gray-500 text-gray-300">
        {/* Toolbar Options */}
        <div className="flex space-x-4">
          <button className="hover:bg-gray-700 p-2 rounded flex flex-row items-center justify-center gap-1">
            <Image
              src="/icons/plus.png"
              alt="plus icon"
              width={18}
              height={18}
            />
            <span className="text-white">New</span>
          </button>
          <button className="hover:bg-gray-700 p-2 rounded">
            <Image
              src="/icons/scissors.png"
              alt="scissors icon"
              width={18}
              height={18}
            />
          </button>
          <button className="hover:bg-gray-700 p-2 rounded">
            <Image
              src="/icons/duplicate.png"
              alt="duplicate icon"
              width={18}
              height={18}
            />
          </button>
          <button className="hover:bg-gray-700 p-2 rounded">
            <Image
              src="/icons/paste.png"
              alt="paste icon"
              width={18}
              height={18}
            />
          </button>
          <button className="hover:bg-gray-700 p-2 rounded">
            <Image
              src="/icons/rename.png"
              alt="rename icon"
              width={18}
              height={18}
            />
          </button>
          <button className="hover:bg-gray-700 p-2 rounded">
            <Image
              src="/icons/share.png"
              alt="share icon"
              width={18}
              height={18}
            />
          </button>
          <button className="hover:bg-gray-700 p-2 rounded">
            <Image
              src="/icons/delete.png"
              alt="delete icon"
              width={18}
              height={18}
            />
          </button>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="hover:bg-gray-700 p-2 rounded flex flex-row items-center justify-center gap-1">
            <Image
              src="/icons/sort.png"
              alt="sort icon"
              width={18}
              height={18}
            />
            <span className="text-white">Sort</span>
          </button>
          <button className="hover:bg-gray-700 p-2 rounded flex flex-row items-center justify-center gap-1">
            <Image
              src="/icons/analysis.png"
              alt="analysis icon"
              width={18}
              height={18}
            />
            <span className="text-white">View</span>
          </button>
          <button className="hover:bg-gray-700 p-2 rounded flex flex-row items-center justify-center gap-1">
            <Image
              src="/icons/filter.png"
              alt="filter icon"
              width={18}
              height={18}
            />
            <span className="text-white">Filter</span>
          </button>
          <button className="hover:bg-gray-700 p-2 rounded">
            <Image
              src="/icons/more.png"
              alt="more icon"
              width={18}
              height={18}
            />
          </button>
          <button className="hover:bg-gray-700 p-2 rounded flex flex-row items-center justify-center gap-1">
            <Image
              src="/icons/schedule.png"
              alt="schedule icon"
              width={18}
              height={18}
            />
            <span className="text-white">Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
