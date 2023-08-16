import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";

const Room = () => {
  const ref = useRef();
  const room = useGLTF("models/room.glb");

  room.scene.children.forEach((child) => {
    if (child.name === "Back_walls") {
      child.visible = false;
    }
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.scale.set(0, 0, 0);
    } else {
      child.children.forEach((groupChild) => {
        groupChild.castShadow = true;
        groupChild.receiveShadow = true;
        groupChild.scale.set(0, 0, 0);
      });
    }
  });
  // Initialize initial rotation values and lerp factors
  let targetRotationY = 0;
  let targetRotationX = 0;
  const lerpFactor = 0.1;

  function lerp(a, b, t) {
    return (1 - t) * a + t * b;
  }

  useFrame(({ mouse }) => {
    // Calculate rotation based on mouse position
    const rotationY = (mouse.x * Math.PI * 2) / window.innerWidth;
    const rotationX = (mouse.y * Math.PI * 2) / window.innerHeight;

    // Update target rotation values using lerping
    targetRotationY = lerp(targetRotationY, rotationY * 45, lerpFactor);
    targetRotationX = lerp(targetRotationX, -rotationX * 5, lerpFactor);

    // Apply the target rotation values to the object
    ref.current.rotation.y = targetRotationY;
    ref.current.rotation.x = targetRotationX;
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
    // Use GSAP to animate the scaling of each child
    room.scene.traverse((child) => {
      if (child.name === "Body") {
        child.children.forEach((groupChild) => {
          gsap.to(groupChild.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "back.out(2)",
          });
        });
      }
      if (child.name === "Bed_top") {
        child.children.forEach((groupChild) => {
          gsap.to(groupChild.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 1.8
          });
        });
      }
      if (child.name === "Mail_box") {
        child.children.forEach((groupChild) => {
          gsap.to(groupChild.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 2.5
          });
        });
      }
      if (child.name === "Flower") {
        child.children.forEach((groupChild) => {
          gsap.to(groupChild.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 3
          });
        });
      }
      if (child.name === "Bed_bottom") {
        child.children.forEach((groupChild) => {
          gsap.to(groupChild.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 1.5
          });
        });
      }
      if (child.name === "Hex") {
        child.children.forEach((groupChild) => {
          gsap.to(groupChild.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 0.5
          });
        });
      }
      if (child.name === "Desks") {
        child.children.forEach((groupChild) => {
          gsap.to(groupChild.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.6,
            ease: "power",
            delay: 1
          });
        });
      }
      if (child.name === "Floor_items") {
        child.children.forEach((groupChild) => {
          gsap.to(groupChild.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 1.6
          });
        });
      }
      if (child.name === "Computer") {
        child.children.forEach((groupChild) => {
          gsap.to(groupChild.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 1.3
          });
        });
      }
      if (child.name === "Mouse") {
        child.children.forEach((groupChild) => {
          gsap.to(groupChild.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 0.5
          });
        });
      }
      if (child.name === "Shelf") {
        child.children.forEach((groupChild) => {
          gsap.to(groupChild.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 0.5
          });
        });
      }
      if (child.name === "Clock") {
        child.children.forEach((groupChild) => {
          gsap.to(groupChild.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 0.5
          });
        });
      }
      if (child.name === "Lamp") {
        child.children.forEach((groupChild) => {
          gsap.to(groupChild.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 2.7
          });
        });
      }
      if (child.name === "Chair") {
        gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: "back",
          delay: 2,
        });
        gsap.to(child.rotation, {
          y: Math.PI * 4.5, // Rotate by 720 degrees (360 degrees * 2)
          duration: 3,    // Animation duration for rotation
          ease: "back.out(3)", // Easing function
          delay: 2, // Add a delay for the rotation animation
        });
      }
      if (child.name === "Bean_bag_chair") {
        gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: "back",
          delay: 1.8,
        });
      }
      if (child.name === "Curtains") {
        gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: "back",
          delay: 0.2,
        });
      }
      if (child.name === "Wood_floor") {
        gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: "back",
          delay: 0.2,
        });
      }
      if (child.name === "Floor_trim") {
        gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: "back",
          delay: 0.2,
        });
      }
      if (child.name === "Mini_floor") {
        gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          delay: 0.4,
        })
        gsap.to(child.position,{
          x: -0.3139514923095703,
          y: -0.3114509880542755,
          z: 1.4678760766983032,
          duration: 10,
          ease: "back",
        })
      }
      if (child.name === "Step_1") {
        gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: "back",
          delay: 1.4,
        });
      }
      if (child.name === "Step_2") {
        gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: "back",
          delay: 1.8,
        });
      }
      if (child.name === "Step_3") {
        gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: "back",
          delay: 2.2,
        });
      }
      if (child.name === "Dirt") {
        gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: "back",
          delay: 2.5,
        });
      }
    });
  },1000)
    return () => clearTimeout(timeoutId);
  }, [room.scene]);

  return (
    <group ref={ref}>
      <primitive object={room.scene} />
    </group>
  );
};

export default Room;