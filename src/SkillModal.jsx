import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiRuby, DiGit } from 'react-icons/di';
import { SiJest, SiRubyonrails } from 'react-icons/si';

const SkillModal = ({ onClose }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-md m-5" onClick={(e) => e.stopPropagation()}>
        <div className="text-xl mb-4">My Skills</div>
        <div className="text-gray-600 mb-4 grid grid-cols-2 gap-4">
          <SkillItem icon={<FaHtml5 size={40} />} text="Proficient in HTML." meterValue={70} />
          <SkillItem icon={<FaCss3Alt size={40} />} text="Experienced in CSS." meterValue={70} />
          <SkillItem icon={<FaJs size={40} />} text="Skilled in JavaScript." meterValue={80} />
          <SkillItem icon={<FaReact size={40} />} text="Familiar with React." meterValue={75} />
          <SkillItem icon={<SiJest size={40} />} text="Experience with Jest." meterValue={45} />
          <SkillItem icon={<DiRuby size={40} />} text="Knowledge of Ruby." meterValue={40} />
          <SkillItem icon={<SiRubyonrails size={40} />} text="Experience with Ruby on Rails." meterValue={65} />
          <SkillItem icon={<FaPython size={40} />} text="Working knowledge of Python." meterValue={50} />
          <SkillItem icon={<FaPython size={40} />} text="Basic knowledge of Django." meterValue={25} />
          <SkillItem icon={<FaPython size={40} />} text="Experience with Web Scraping." meterValue={70} />
          <SkillItem icon={<BiLogoPostgresql size={40} />} text="Proficient in PostgreSQL." meterValue={75} />
          <SkillItem icon={<DiGit size={40} />} text="Proficient in Git." meterValue={75} />
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ icon, text, meterValue }) => (
  <div className="flex items-center">
    <div className="relative h-2 w-20 mr-2">
      <div className="absolute left-0 top-0 h-full w-full bg-gray-300 rounded-full"></div>
      <div className="absolute left-0 top-0 h-full bg-blue-500 rounded-full" style={{ width: `${meterValue}%` }}></div>
    </div>
    {icon}
    <p className="ml-2">{text}</p>
  </div>
);

export default SkillModal;
