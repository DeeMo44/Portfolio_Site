import React, { useState, useEffect } from 'react';
import { Circle } from '@react-three/drei';

const Floor = ({ color, startDelay }) => {
  const segments = 128;
  const startScale = 0;
  const maxScale = 20;
  const startOffset = -3;
  const maxOffset = -3.5;
  const animationDuration = 22000;

  const [scale, setScale] = useState(startScale);
  const [offset, setOffset] = useState(startOffset);

  useEffect(() => {
    let animationFrameId;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / animationDuration;

      if (progress < 1) {
        const newScale = startScale + (maxScale - startScale) * progress;
        const newOffset = startOffset + (maxOffset - startOffset) * progress;

        setScale(newScale);
        setOffset(newOffset);

        animationFrameId = requestAnimationFrame(animate);
      } else {
        setScale(startScale);
        setOffset(startOffset);
        startTime = null;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const delayTimeout = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, startDelay);

    return () => {
      clearTimeout(delayTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [maxOffset, startDelay, startOffset]);

  return (
    <Circle
      args={[10, segments]}
      position={[0, offset, -10]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
      scale={[scale, scale, scale]}
    >
      <meshStandardMaterial color={color} />
    </Circle>
  );
};

const App = () => {
  const colors = ['#FFA500', '#FF8C00', '#FF6347', '#FF4500', '#FF5733', '#FFA07A'];
  const animationDelay = 3666; // milliseconds

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // After the total delay, set showContent to true
    const delayTimeout = setTimeout(() => {
      setShowContent(true);
    });

    // Clear the timeout when the component unmounts
    return () => clearTimeout(delayTimeout);
  }, []);

  return (
    <>
      {showContent && (
        <>
          {colors.map((color, index) => (
            <Floor key={index} color={color} startDelay={index*animationDelay + 3000} />
          ))}
        </>
      )}
    </>
  );
};

export default App;
