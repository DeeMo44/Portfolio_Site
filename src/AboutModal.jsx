import React from "react";

const AboutModal = ({ onClose }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="fixed bg-white p-6 rounded-lg shadow-md m-20 top-2 bottom-2 overflow-auto md:top-0 md:bottom-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xl mb-4">About Me</div>
        <p className="text-gray-600">
          I am a passionate Full Stack Developer with a strong foundation in
          front-end and back-end web development. With proficiency in HTML/CSS,
          JavaScript, Ruby, and other programming languages, I have experience
          in building responsive and dynamic web applications. I bring to the
          table a keen attention to detail and a commitment to maintaining clear
          and concise documentation throughout the development process.
          <br />
          <br />
          I've always been fascinated by technology, spending hours exploring
          new videogames and tinkering with gadgets as a child. I pursued this
          passion by attending a technical school, where I learned the sciences
          of electricity and electronics. After graduation, I joined the Marine
          Corps as an IT Professional
          <br />
          <br />
          As a Marine Corps IT professional, I maintained and troubleshooted
          technology for my unit. I developed adaptability, creative
          problem-solving skills, and worked well under pressure. My time in the
          Marines provided invaluable experience that has helped me in my career
          as an IT professional. As I was leaving the military I decided to
          become a Full Stack Developer to continue learning more about
          technology.
          <br />
          <br />I became a fullstack developer through LEARN Academy, where I
          learned various programming languages and software development
          methodologies. The intensive bootcamp provided a supportive
          environment that allowed me to develop my skills rapidly. I feel
          confident in my ability to build complex web applications. The
          experience was rewarding, and I'm grateful to LEARN Academy for giving
          me the tools to succeed.
        </p>
      </div>
    </div>
  );
};

export default AboutModal;
