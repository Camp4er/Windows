import React, { useState } from "react";
import { skills } from "../constants";

const Skills = () => {
  const [viewMode, setViewMode] = useState("details"); // "details", "icons", "tiles"

  const handleRightClick = (event: React.MouseEvent, skillName: string) => {
    event.preventDefault();
    alert(`Right-clicked on ${skillName}`); // Implement context menu here
  };

  const renderSkills = () => {
    if (viewMode === "details") {
      return (
        <table className="w-full text-left border-collapse border border-gray-600">
          <thead>
            <tr>
              <th className="p-2 border border-gray-600">Name</th>
              <th className="p-2 border border-gray-600">Type</th>
              <th className="p-2 border border-gray-600">Size</th>
              <th className="p-2 border border-gray-600">Added</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr
                key={skill.name}
                onContextMenu={(e) => handleRightClick(e, skill.name)}
                className="cursor-pointer hover:bg-gray-800"
              >
                <td className="p-2 border border-gray-600">{skill.name}</td>
                <td className="p-2 border border-gray-600">{skill.type}</td>
                <td className="p-2 border border-gray-600">{skill.size}</td>
                <td className="p-2 border border-gray-600">{skill.added}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    // Add additional layouts for icons or tiles here
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <select
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
          className="p-2 bg-gray-700 text-white rounded"
        >
          <option value="details">Details</option>
          <option value="icons">Icons</option>
          <option value="tiles">Tiles</option>
        </select>
      </div>
      {renderSkills()}
    </div>
  );
};

export default Skills;
