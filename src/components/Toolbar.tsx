import React from 'react';

const Toolbar = () => {
  return (
    <div className="flex items-center px-4 py-2 bg-gray-800 text-white border-b border-gray-700">
      {/* Navigation Buttons */}
      <div className="flex space-x-2 mr-4">
        <button className="p-2 rounded hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l4.147-4.146a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .708-.708L2.707 8.5H14.5a.5.5 0 0 0 .5-.5z" />
          </svg>
        </button>
        <button className="p-2 rounded hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M1 8a.5.5 0 0 0 .5.5h11.793l-4.147 4.146a.5.5 0 0 0 .708.708l5-5a.5.5 0 0 0 0-.708l-5-5a.5.5 0 0 0-.708.708L13.293 7.5H1.5A.5.5 0 0 0 1 8z" />
          </svg>
        </button>
        <button className="p-2 rounded hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.5 1a.5.5 0 0 1 .5.5V2h10V1.5a.5.5 0 0 1 1 0V2h.5A1.5 1.5 0 0 1 16 3.5v9A1.5 1.5 0 0 1 14.5 14H14v.5a.5.5 0 0 1-1 0V14H3v.5a.5.5 0 0 1-1 0V14h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2H2v-.5a.5.5 0 0 1 .5-.5zm1 12h9a.5.5 0 0 0 .5-.5V4h-10v8.5a.5.5 0 0 0 .5.5zm-2-10v9a.5.5 0 0 0 .5.5h.5V4h-1zM15 13.5v-9a.5.5 0 0 0-.5-.5H14v9h.5a.5.5 0 0 0 .5-.5zm-6-5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4zM4 9a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 9zm-1-3a.5.5 0 0 1 .5-.5h2A.5.5 0 0 1 6 6H4.5A.5.5 0 0 1 4 6zm9 0a.5.5 0 0 1 .5-.5H15a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
      </div>

      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-gray-300">
        <span className="cursor-pointer hover:text-white">Home</span>
        <span>{'>'}</span>
        <span className="cursor-pointer hover:text-white">Documents</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 ml-4 flex items-center">
        <input
          type="text"
          placeholder="Search Home"
          className="w-full px-2 py-1 bg-gray-900 border border-gray-700 rounded text-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-600"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 ml-4">
        <button className="hover:text-white">Sort</button>
        <button className="hover:text-white">View</button>
        <button className="hover:text-white">Filter</button>
        <button className="hover:text-white">...</button>
      </div>
    </div>
  );
};

export default Toolbar;
