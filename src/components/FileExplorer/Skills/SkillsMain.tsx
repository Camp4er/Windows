import { skillsCard } from '@/components/constants';
import Image from 'next/image';
import React from 'react';

const SkillsMain = () => {
  return (
    <div className="p-4">
      <table className="w-full rounded-md shadow-sm">
        {/* Table Header */}
        <thead className="border border-gray-300  text-white text-sm font-semibold">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Date Modified</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Size</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {skillsCard.map((skill) => (
            <tr
              key={skill.name}
              className="border-t hover:bg-gray-100 transition"
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
