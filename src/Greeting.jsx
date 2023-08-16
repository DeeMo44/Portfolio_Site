import React from 'react';

const Greeting = () => {
  const nameText = 'DeMario Ward';
  const roleText = 'Full Stack Developer|Marine Corps Veteran';

  return (
    <div className="fixed bottom-4 left-4 flex flex-col items-start greeting-animation">
      <div className="name-text">
        {nameText.split('').map((char, index) => (
          <span key={index} className={`animate-slide ${char === ' ' ? 'space' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
            {char}
          </span>
        ))}
      </div>
      <div className="role-text">
        {roleText.split('|').map((line, index) => (
          <span key={index}>
            {line.split('').map((char, charIndex) => (
              <span
                key={charIndex}
                className={`animate-slide ${char === ' ' ? 'space' : ''}`}
                style={{ animationDelay: `${(line.length + index) * 0.1 + charIndex * 0.1}s` }}
              >
                {char}
              </span>
            ))}
            {index < roleText.split('|').length - 1 && <br />}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Greeting;
