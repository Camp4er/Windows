"use client";

import React, { useState } from "react";

const projects = [
  {
    title: "Heat-Map",
    date: "Dec 2023",
    description: [
      "A front-end-only heat map, showcasing data visualization skills and innovative problem-solving in HTML, CSS, and JavaScript.",
      "Crafted an engaging and interactive user interface, leading to a 40% increase in user satisfaction.",
    ],
    githubLink: "https://github.com/yourusername/heat-map",
    liveLink: "https://heatmap-example.com",
    images: ["/images/heatmap1.png", "/images/heatmap2.png"],
  },
  {
    title: "Snake Game",
    date: "Jan 2024",
    description: [
      "Real-time data update capabilities for enhancing relevance and usability.",
      "Integrated game components like snake movement and collision detection, achieving a flawless 100% completion rate.",
    ],
    githubLink: "https://github.com/yourusername/snake-game",
    liveLink: "https://snakegame-example.com",
    images: ["/images/snakegame1.png", "/images/snakegame2.png"],
  },
  // Add more projects here following the same structure
];

export default function ProjectsWindow() {
  const [selectedProjectImages, setSelectedProjectImages] = useState<string[] | null>(null);

  const handleImageClick = (images: string[]) => {
    setSelectedProjectImages(images);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md text-gray-800 space-y-6 h-full overflow-scroll">
      <h2 className="text-2xl font-bold text-indigo-700">Projects</h2>
      
      {projects.map((project, index) => (
        <div key={index} className="p-4 bg-indigo-50 rounded-md shadow-sm space-y-3">
          <h3 className="text-xl font-semibold text-indigo-600">{project.title} ({project.date})</h3>
          
          <ul className="list-disc list-inside space-y-1">
            {project.description.map((point, i) => (
              <li key={i} className="text-gray-600">{point}</li>
            ))}
          </ul>

          {/* Links */}
          <div className="flex gap-4 mt-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-indigo-100 rounded hover:bg-indigo-200 transition shadow-sm"
            >
              GitHub Repo
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-indigo-100 rounded hover:bg-indigo-200 transition shadow-sm"
            >
              Live Demo
            </a>
          </div>

          {/* Image Gallery Button */}
          <button
            onClick={() => handleImageClick(project.images)}
            className="p-2 mt-4 bg-indigo-100 rounded hover:bg-indigo-200 transition shadow-sm"
          >
            View Images
          </button>
        </div>
      ))}

      {/* Image Gallery */}
      {selectedProjectImages && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md space-y-4 shadow-md">
            <button
              onClick={() => setSelectedProjectImages(null)}
              className="text-gray-500 hover:text-gray-800 transition"
            >
              Close
            </button>
            <div className="space-y-4 overflow-y-auto">
              {selectedProjectImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Project image ${idx + 1}`}
                  className="rounded-md w-full shadow-sm transition transform duration-300 ease-in-out"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
