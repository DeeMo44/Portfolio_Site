import React from 'react';

const ProjectModal = ({ onClose }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-md m-5 projects" onClick={(e) => e.stopPropagation()}>
        <div className="text-xl mb-4">My Projects</div>
        <ul >
          <li>
            <a href="https://ara.onrender.com/" className="project-list">
            ➤ ARA (Anime Repository App)
            </a>
          </li>
          <li>
            <a href="https://github.com/learn-academy-2023-bravo/apartment-app-backend-lux-r-us" className="project-list">
            ➤ LUX R US (Luxurious Apartments App)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectModal;