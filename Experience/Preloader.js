import { EventEmitter } from "events";
import Experience from "./Experience";
import { gsap } from "gsap";
import convert from "./Utils/convertDivsToSpans.js";

export default class Preloader extends EventEmitter {
  constructor() {
    super();

    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.world = this.experience.world;

    this.world.on("worldready", () => {
      this.setAssets();
      this.playIntro();
    });
  }

  setAssets() {
    convert(document.querySelector(".intro-text"));
    convert(document.querySelector(".hero-main-title"));
    convert(document.querySelector(".hero-main-description"));
    this.room = this.experience.world.room.actualRoom;
    this.roomChildren = this.experience.world.room.roomChildren;
    // console.log(this.roomChildren)
  }

  firstIntro() {
    return new Promise((resolve) => {
      this.timeline = new gsap.timeline();

      this.timeline.set(".animatedis", { y: 0, yPercent: 100 });

      this.timeline.to(".preloader", {
        opacity: 0,
        onComplete: () => {
          document.querySelector(".preloader").classList.add("hidden");
        },
      });

      this.room.position.set(0, 0, 4);
      this.timeline
        .to(
          this.roomChildren.Cube.scale,
          {
            x: 0.7,
            y: 0.7,
            z: 0.7,
            duration: 0.5,
          },
          "cube"
        )
        .to(
          this.room.position,
          {
            z: -1,
            ease: "back.out(1)",
            duration: 1,
          },
          "cube"
        );

      this.timeline
        .to(".intro-text .animatedis", {
          yPercent: 0,
          stagger: 0.05,
          ease: "back.out(3.5)",
        })
        .to({}, { delay: 0.3, onComplete: resolve });
    });
  }

  secondIntro() {
    return new Promise((resolve) => {
      this.secondTimeline = new gsap.timeline();

      this.secondTimeline
        .to(
          ".intro-text .animatedis",
          {
            yPercent: 100,
            stagger: 0.04,
            ease: "back.out(1.5)",
          },
          "fadeout"
        )
        .to(
          ".arrow-svg-wrapper",
          {
            opacity: 0,
          },
          "fadeout"
        )
        .to(this.room.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.4,
        })
        .to(
          this.roomChildren.Cube.rotation,
          {
            y: 2 * Math.PI + Math.PI / 4,
            duration: 1,
            ease: "power1.inOut",
          },
          "same"
        )
        .to(
          this.roomChildren.Cube.scale,
          {
            x: 4.5,
            y: 4.5,
            z: 4.5,
            ease: "back.out(2)",
            duration: 0.5,
          },
          "scaling"
        )
        .to(
          this.roomChildren.Cube.position,
          {
            x: 0,
            y: 3.8,
            z: 0,
          },
          "same"
        )
        .to(this.roomChildren.Cube.scale, {
          x: 0,
          y: 0,
          z: 0,
        })
        .to(
          ".hero-main-title .animatedis",
          {
            yPercent: 0,
            stagger: 0.1,
            ease: "back.out(2.5)",
          },
          "same"
        )
        .to(
          this.roomChildren.Body.scale,
          {
            x: 1,
            y: 1,
            z: 1,
          },
          "scaling"
        )
        .to(
          this.roomChildren.Wood_floor.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(0.5)",
            duration: 0.3,
          },
          "hex"
        )
        .to(this.roomChildren.Floor_trim.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(1.5)",
          duration: 0.3,
        })
        .to(this.roomChildren.Desks.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.25,
        })
        .to(
          this.roomChildren.Bed_bottom.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(2)",
            duration: 0.25,
          },
          "bedtop"
        )
        .to(this.roomChildren.Bed_top.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2)",
          duration: 0.25,
        })
        .to(
          this.roomChildren.Clock.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(2)",
            duration: 0.2,
          },
          "hex"
        )
        .to(
          this.roomChildren.Curtains.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(2)",
            duration: 0.3,
          },
          "bedtop"
        )
        .to(this.roomChildren.Floor_items.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(0.5)",
          duration: 0.25,
        })

        .to(
          this.roomChildren.Hex.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(2)",
            duration: 0.2,
          },
          "hex"
        )
        .to(
          this.roomChildren.Mouse.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(2)",
            duration: 0.2,
          },
          "shelf"
        )
        .to(
          this.roomChildren.Shelf.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(2)",
            duration: 0.25,
          },
          "shelf"
        )
        .to(
          this.roomChildren.Computer.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(2)",
            duration: 0.3,
          },
          "shelf"
        )
        .to(this.roomChildren.Bean_bag_chair.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "back.out(2)",
          duration: 0.2,
        })
        .to(
          this.roomChildren.Mini_floor.scale,
          {
            x: 1,
            y: 1,
            z: 1,
          },
          "scaling"
        )
        .to(
          this.roomChildren.Chair.scale,
          {
            x: 1,
            y: 1,
            z: 1,
          },
          "chair"
        )
        .to(
          ".hero-main-description .animatedis",
          {
            yPercent: 0,
            stagger: 0.1,
            ease: "back.out(1.5)",
          },
          "hex"
        )
        .to(
          this.roomChildren.Chair.rotation,
          {
            y: 4 * Math.PI + Math.PI / 4 + 0.5,
            ease: "back.out(3)",
            duration: 2,
          },
          "chair"
        )
        .to(".arrow-svg-wrapper", {
          opacity: 1,
        })
        .to(
          ".toggle-bar",
          {
            opacity: 1,
          },
          "chair"
        )
        .to(
          ".qb",
          {
            opacity: 1,
            onComplete: resolve,
          },
          "chair"
        );
    });
  }

  async playIntro() {
    await this.firstIntro();
    this.playSecondIntro();
  }

  async playSecondIntro() {
    await this.secondIntro();
    window.scrollBy(0, 1);
    console.log("second intro done");
  }

  move() {
  }

  update() {
  }
}
