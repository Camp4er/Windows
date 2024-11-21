import React from "react";
import Breadcrumb from "./Breadcrumb";

const Toolbar = () => {
  return (
    <div>
      {/* Header 1 */}
      <div className="flex items-center px-4 py-2 bg-gray-800 text-white border-b border-gray-700">
        {/* Navigation Buttons */}
        <div className="flex space-x-2 mr-4">
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
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l4.147-4.146a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .708-.708L2.707 8.5H14.5a.5.5 0 0 0 .5-.5z" />
            </svg>
          </button>
        </div>

        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-gray-300">
            <div className="w-full px-2 py-1 bg-gray-900 border border-gray-700 rounded text-gray-300 focus:outline-none focus:ring focus:ring-gray-600">
          <span className="cursor-pointer hover:text-white">Home</span>
          <span>{">"}</span>
          <span className="cursor-pointer hover:text-white">Documents</span>
        </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 ml-4 flex items-center">
          <input
            type="text"
            placeholder="Search Home"
            className="w-full px-2 py-1 bg-gray-900 border border-gray-700 rounded text-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-600"
          />
        </div>
      </div>

      {/* Header 2 */}
      <div className="flex items-center px-4 py-2 bg-gray-900 text-gray-300">
        {/* Toolbar Options */}
        <div className="flex space-x-4">
          <button className="hover:text-white">New</button>
          <button className="hover:text-white">Cut</button>
          <button className="hover:text-white">Copy</button>
          <button className="hover:text-white">Paste</button>
          <button className="hover:text-white">Delete</button>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="hover:text-white">Sort</button>
          <button className="hover:text-white">View</button>
          <button className="hover:text-white">Filter</button>
          <button className="hover:text-white">...</button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
