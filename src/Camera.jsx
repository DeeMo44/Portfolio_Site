import React, { useRef } from "react";
import { OrthographicCamera } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";

const Camera = () => {
  const camera = useRef();
  const { size } = useThree();

  const aspect = size.width / size.height;
  const zoom = 2.5;
  const frustumHeight = zoom * 2;
  const frustumWidth = frustumHeight * aspect;

  const left = -frustumWidth / 2;
  const right = frustumWidth / 2;
  const top = frustumHeight / 2;
  const bottom = -frustumHeight / 2;
  const near = -100;
  const far = 100;

  useFrame(() => {
    // Update the camera's properties each frame to maintain correct aspect ratio
    camera.current.left = left;
    camera.current.right = right;
    camera.current.top = top;
    camera.current.bottom = bottom;
    camera.current.updateProjectionMatrix();
  });

  return (
    <OrthographicCamera
      ref={camera}
      makeDefault
      position={[0, 4, 0]}
      rotation={[-Math.PI / 8, 0, 0]}
      left={left}
      right={right}
      top={top}
      bottom={bottom}
      near={near}
      far={far}
      zoom={0.25}
    />
  );
};

export default Camera;
