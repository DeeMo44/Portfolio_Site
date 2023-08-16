import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const Lights = () => {
  const { scene } = useThree();

  // Check if ambient light is already present
  const existingAmbientLight = scene.getObjectByName("ambientLight");
  if (!existingAmbientLight) {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    ambientLight.name = "ambientLight";
    scene.add(ambientLight);
    console.log(ambientLight)
  }

  // Check if directional light is already present
  const existingDirectionalLight = scene.getObjectByName("directionalLight");
  if (!existingDirectionalLight) {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.name = "directionalLight";
    directionalLight.position.set(0, 13, 3);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.left = -15;
    directionalLight.shadow.camera.right = 15;
    directionalLight.shadow.camera.top = 15;
    directionalLight.shadow.camera.bottom = -15;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 150;
    directionalLight.shadow.bias = -0.001;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    // Set up light target for directional light
    const lightTarget = new THREE.Object3D();
    lightTarget.position.set(4, 0, -10);
    scene.add(lightTarget);
    directionalLight.target = lightTarget;
    scene.add(directionalLight);
  }


  return null;
};

export default Lights;
