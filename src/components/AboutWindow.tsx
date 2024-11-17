"use client";

import React from "react";

export default function AboutWindow() {
  return (
    <div className="p-6 bg-white rounded-md shadow-md text-gray-800 space-y-4">
      <h2 className="text-2xl font-bold">Poorva Saxena</h2>
      <p className="text-lg text-indigo-600">Front-End Developer</p>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {/* Age Card */}
        <div className="p-3 bg-indigo-50 rounded-lg shadow-sm text-center">
          <span className="text-4xl font-semibold">20</span>
          <p className="text-gray-500">Years Old</p>
        </div>

        {/* Education Card */}
        <div className="p-3 bg-indigo-50 rounded-lg shadow-sm text-center">
          <span className="text-lg font-semibold">BSc in Chemistry</span>
          <p className="text-gray-500">Graduate</p>
        </div>

        {/* Career Shift */}
        <div className="col-span-2 p-4 bg-indigo-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">My Journey</h3>
          <p className="text-gray-600">
            I transitioned to web development out of passion, bringing my analytical background from chemistry into my coding journey.
          </p>
        </div>

        {/* Interactive Skills Section */}
        <div className="col-span-2 p-4 bg-indigo-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Skills Snapshot</h3>
          <p className="text-gray-600">Hover over to learn more!</p>
          <div className="flex gap-3 mt-2">
            <button className="p-2 bg-indigo-100 rounded hover:bg-indigo-200 transition">HTML</button>
            <button className="p-2 bg-indigo-100 rounded hover:bg-indigo-200 transition">CSS</button>
            <button className="p-2 bg-indigo-100 rounded hover:bg-indigo-200 transition">React</button>
            <button className="p-2 bg-indigo-100 rounded hover:bg-indigo-200 transition">JavaScript</button>
          </div>
        </div>
      </div>
    </div>
  );
}
