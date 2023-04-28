import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;
    this.roomChildren = {};

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.setModel();
    this.onMouseMove();
  }

  setModel() {
    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.recieveShadow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupChild) => {
          groupChild.castShadow = true;
          groupChild.receiveShadow = true;
        });
      }
      if (child.name === "Computer") {
        child.children[2].material = new THREE.MeshBasicMaterial({
          map: this.resources.items.screen,
        });
      }
      if (child.name === "Mini_floor") {
        child.position.x = 2.57889;
        child.position.z = -1.62817;
      }
      // if(child.name === "Mail_box" ||
      // child.name === "Lamp" ||
      // child.name === "Dirt" ||
      // child.name === "Flower" ||
      // child.name === "Step_1" ||
      // child.name === "Step_2" ||
      // child.name === "Step_3"
      // ){
      //   child.scale.set(0,0,0)
      //   // console.log(child)
      // }

      child.scale.set(0, 0, 0);
      if (child.name === "Cube") {
        // child.scale.set(1, 1, 1);
        child.position.set(0, -1, 0);
        child.rotation.y = -Math.PI / 4;
      }

      this.roomChildren[child.name] = child;
    });

    const width = 0.47;
    const height = 0.09;
    const intensity = 5;
    const rectLight = new THREE.RectAreaLight(
      0xffffff,
      intensity,
      width,
      height
    );
    rectLight.position.set(2.85, 3.25, 1);
    // rectLight.rotation.z = -Math.PI / 2;
    rectLight.rotation.y = -Math.PI / 4;
    // rectLight.rotation.x = -Math.PI / 4;
    this.actualRoom.add(rectLight);

    this.roomChildren['rectLight'] = rectLight;

    // const rectLightHelper = new RectAreaLightHelper(rectLight);
    // rectLight.add(rectLightHelper);

    this.scene.add(this.actualRoom);
    this.actualRoom.scale.set(0.11, 0.11, 0.11);
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * 0.2;
    });
  }

  resize() {}

  update() {
    this.lerp.current = GSAP.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease
    );
    this.actualRoom.rotation.y = this.lerp.current;
  }
}
