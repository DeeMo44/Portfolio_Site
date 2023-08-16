import * as THREE from 'three'
import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Room from './Room';
import Lights from './Lights';
import Camera from './Camera';
import Floor from './Floor';
import Greeting from './Greeting';
import Buttons from './Buttons';
// import GridHelper from './GridHelper';
// import { OrbitControls } from '@react-three/drei';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.needsUpdate = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


const LoadingAnimation = ({ isLoading }) => {
  return (
    <div className={`loading-animation h-screen overflow-hidden ${isLoading ? 'visible' : 'hidden'}`}>
      <div className="letter">&lt;</div>
      <div className="letter d">D</div>
      <div className="letter w">W</div>
      <div className="letter">/</div>
      <div className="letter">&gt;</div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showGreeting, setShowGreeting] = useState(false);
  const canvasRef = useRef(null);

  const onCanvasCreated = (canvas) => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    setTimeout(() => {
      setShowGreeting(true);
    }, 1000);
  };

  return (
    <>
      <div className='h-screen w-screen'>
        <LoadingAnimation isLoading={isLoading} />
        <Canvas shadows className='h-full w-full' onCreated={onCanvasCreated} ref={canvasRef}>
          <Camera />
          <Lights />
          <Room />
          <Floor />
          {/* <GridHelper /> */}
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
      {showGreeting && <Greeting />}
      <Buttons />
    </>

  );
};

export default App;
