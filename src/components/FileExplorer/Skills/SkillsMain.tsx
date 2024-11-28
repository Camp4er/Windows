import { skillsCard } from '@/components/constants';
import Image from 'next/image';
import React from 'react';

const SkillsMain = () => {
  return (
    <div className="p-4">
      <table className="w-full rounded-md shadow-sm">
        {/* Table Header */}
        <thead className="text-white text-sm font-semibold">
          <tr>
            <th className="p-3 m-2 text-left border-r border-gray-300 ">Name</th>
            <th className="p-3 m-2 text-left border-r border-gray-300 ">Date Modified</th>
            <th className="p-3 m-2 text-left border-r border-gray-300 ">Type</th>
            <th className="p-3 m-2 text-left border-r border-gray-300 ">Size</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {skillsCard.map((skill) => (
            <tr
              key={skill.name}
              className="hover:bg-gray-700 cursor-pointer rounded-md"
            >
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <Image src={skill.icon} alt="icon" width={20} height={20} />
                  <span>{skill.name}</span>
                </div>
              </td>
              <td className="p-3">{skill.datemodified}</td>
              <td className="p-3">{skill.type}</td>
              <td className="p-3">{skill.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsMain;
