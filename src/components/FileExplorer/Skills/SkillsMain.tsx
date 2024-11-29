import { useState } from 'react';
import { skillsCard } from '@/components/constants';
import Image from 'next/image';

const SkillsMain = () => {
  const [currentFolder, setCurrentFolder] = useState('Skills'); // Default folder
  const [breadcrumb, setBreadcrumb] = useState(['Home', 'Skills']); // Initial breadcrumb

  const handleRowClick = (folderName: string) => {
    // Update folder view
    setCurrentFolder(folderName);

    // Update breadcrumbs
    setBreadcrumb((prev) => [...prev, folderName]);
  };

  return (
    <div className="p-4">
      {/* Breadcrumb */}
      <div className="flex gap-2 items-center text-white text-sm font-semibold mb-4">
        {breadcrumb.map((crumb, index) => (
          <span key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            <button
              onClick={() => {
                // Navigate to a specific breadcrumb
                setCurrentFolder(crumb);
                setBreadcrumb(breadcrumb.slice(0, index + 1));
              }}
              className="hover:underline"
            >
              {crumb}
            </button>
          </span>
        ))}
      </div>

      {currentFolder === 'Skills' ? (
        <table className="w-full rounded-md shadow-sm border-separate border-spacing-y-2">
          {/* Table Header */}
          <thead className="text-white text-sm font-semibold">
            <tr>
              <th className="px-5 text-left border-b border-gray-300 pb-1">Name</th>
              <th className="px-5 text-left border-b border-gray-300 pb-1">Date Modified</th>
              <th className="px-5 text-left border-b border-gray-300 pb-1">Type</th>
              <th className="px-5 text-left border-b border-gray-300 pb-1">Size</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-white text-sm font-semibold">
            {skillsCard.map((skill) => (
              <tr
                key={skill.name}
                className="hover:bg-gray-700 cursor-pointer rounded-md"
                onClick={() => handleRowClick(skill.name)} // Navigate to folder
              >
                <td className="px-5 py-1">
                  <div className="flex items-center gap-2">
                    <Image src={skill.icon} alt="icon" width={20} height={20} />
                    <span>{skill.name}</span>
                  </div>
                </td>
                <td className="px-5 py-1">{skill.datemodified}</td>
                <td className="px-5 py-1">{skill.type}</td>
                <td className="px-5 py-1">{skill.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-white text-sm">
          <h3 className="text-lg font-bold">{currentFolder}</h3>
          <p>Details about the {currentFolder} folder...</p>
        </div>
      )}
    </div>
  );
};

export default SkillsMain;
