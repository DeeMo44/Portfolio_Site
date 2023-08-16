import React, { useState } from 'react';
import AboutModal from './AboutModal';
import ContactModal from './ContactModal';
import ProjectModal from './ProjectModal';
import SkillModal from './SkillModal';

const Buttons = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalType) => {
    setOpenModal(modalType);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="container mx-auto py-4 flex justify-center space-x-4">
        <button className="button" onClick={() => handleOpenModal('about')}>About</button>
        <button className="button" onClick={() => handleOpenModal('skills')}>Skills</button>
        <button className="button" onClick={() => handleOpenModal('projects')}>Projects</button>
        <button className="button" onClick={() => handleOpenModal('contact')}>Contact</button>
      </div>

      {/* Render the appropriate modal based on openModal state */}
      {openModal === 'about' && <AboutModal onClose={handleCloseModal} />}
      {openModal === 'skills' && <SkillModal onClose={handleCloseModal} />}
      {openModal === 'projects' && <ProjectModal onClose={handleCloseModal} />}
      {openModal === 'contact' && <ContactModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Buttons;
