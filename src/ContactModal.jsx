import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";

const ContactModal = ({ onClose }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-md m-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xl mb-4">Contact Me</div>
        <div className="text-gray-600">
          <p className="mb-4">
            Feel free to reach out to me through any of the following channels:
          </p>
          <div className="flex justify-center items-center mb-2 space-x-10">
            <a
              href="https://www.linkedin.com/in/demario-ward/"
              target="_blank"
              rel="noopener noreferrer"
              title="Connect With Me On LinkedIn"
            >
              <FaLinkedin
                size={60}
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              />
            </a>
            <a
              href="https://github.com/DeeMo44"
              target="_blank"
              rel="noopener noreferrer"
              title="Check Out My GitHub"
            >
              <FaGithub
                size={60}
                className="text-gray-800 hover:text-gray-900 transition duration-300"
              />
            </a>
            <a href="mailto:demario326@gmail.com" title="Email Me">
              <FaEnvelope
                size={60}
                className="text-red-600 hover:text-red-800 transition duration-300"
              />
            </a>
            <a
              href="/resume/dw_resume.pdf"
              download="DeMario Ward's Resume"
              title="Download My Resume"
            >
              <FaDownload
                size={60}
                className="text-green-600 hover:text-green-800 transition duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;