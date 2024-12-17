"use client";

import React, { useState } from "react";

const skillsData = [
  { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React.js", url: "https://reactjs.org/docs/getting-started.html" },
  { name: "Node.js", url: "https://nodejs.org/en/docs/" },
  { name: "Bootstrap", url: "https://getbootstrap.com/docs/" },
  { name: "DBMS", url: "https://en.wikipedia.org/wiki/Database_management_system" },
  { name: "jQuery", url: "https://api.jquery.com/" },
];

export default function SkillsWindow() {
  const [unlockedSkills, setUnlockedSkills] = useState(["HTML", "CSS"]);

  const handleUnlockSkill = (skillName: string) => {
    if (!unlockedSkills.includes(skillName)) {
      setUnlockedSkills([...unlockedSkills, skillName]);
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md text-gray-800 space-y-6 h-full">
      <h2 className="text-2xl font-bold text-indigo-700">Skills Adventure</h2>
      <p className="text-gray-500">Hover or click on a skill to unlock more!</p>
      
      <div className="grid grid-cols-3 gap-4 mt-4">
        {skillsData.map((skill) => (
          <button
            key={skill.name}
            className={`p-4 rounded-lg shadow ${
              unlockedSkills.includes(skill.name) ? "bg-indigo-200" : "bg-gray-200 opacity-50"
            }`}
            onClick={() => handleUnlockSkill(skill.name)}
          >
            {unlockedSkills.includes(skill.name) ? (
              <a
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-semibold hover:underline"
              >
                {skill.name}
              </a>
            ) : (
              <span className="text-gray-500">Locked</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
