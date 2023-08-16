import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const GridHelper = () => {
  const { scene } = useThree();

  // Create grid helper
  const size = 100;
  const divisions = 100; 
  const colorCenterLine = '#444444'; 
  const colorGrid = '#888888'; 
  const gridHelper = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);
  
  // Add the helpers scene
  scene.add(gridHelper);

  return null; 
};

export default GridHelper;
