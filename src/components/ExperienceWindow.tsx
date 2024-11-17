"use client";

import React from "react";

export default function ExperienceWindow() {
  return (
    <div className="p-6 bg-white rounded-md shadow-md text-gray-800 space-y-6">
      <h2 className="text-2xl font-bold text-indigo-700">Work Experience</h2>
      
      {/* LeopardRuns Internship */}
      <div className="p-5 bg-indigo-50 rounded-lg shadow-sm space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Software Developer Intern</h3>
        <p className="text-sm text-gray-500">LeopardRuns Innovation and Technology</p>
        <p className="text-sm text-gray-500">February 2024 – April 2024 | Remote</p>

        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
          <li>Designed user experience flows for multiple features, enhancing usability and user navigation.</li>
          <li>Developed a blood donation website, contributing to an improved user experience through compelling visuals and design.</li>
        </ul>
      </div>

      {/* Frontend50 Internship */}
      <div className="p-5 bg-indigo-50 rounded-lg shadow-sm space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Frontend Developer Intern</h3>
        <p className="text-sm text-gray-500">Frontend50</p>
        <p className="text-sm text-gray-500">June 2024 – Current | Remote</p>

        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
          <li>Redesigned core user interface components, improving user satisfaction based on feedback.</li>
          <li>Collaborated with cross-functional teams to create a mobile-responsive platform for a seamless experience on various devices.</li>
        </ul>
      </div>
    </div>
  );
}
