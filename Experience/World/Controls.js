import * as THREE from "three";
import Experience from "../Experience.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import ASScroll from "@ashthornton/asscroll";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.room = this.experience.world.room.actualRoom;
    this.room.children.forEach((child) => {
      if (child.type === "RectAreaLight") {
        this.rectLight = child;
      }
    });
    this.circleFirst = this.experience.world.floor.circleFirst;
    this.circleSecond = this.experience.world.floor.circleSecond;
    this.circleThird = this.experience.world.floor.circleThird;
    gsap.registerPlugin(ScrollTrigger);

    document.querySelector(".page").style.overflow = "visible";

    this.setSmoothScroll();
    this.setRoomScrollTrigger();
    this.setAllScrollTrigger();
  }

  setupASScroll() {
    // https://github.com/ashthornton/asscroll
    const asscroll = new ASScroll({
      ease: 0.3,
      disableRaf: true,
    });
    gsap.ticker.add(asscroll.update);
    ScrollTrigger.defaults({
      scroller: asscroll.containerElement,
    });
    ScrollTrigger.scrollerProxy(asscroll.containerElement, {
      scrollTop(value) {
        if (arguments.length) {
          asscroll.currentPos = value;
          return;
        }
        return asscroll.currentPos;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      fixedMarkers: true,
    });
    asscroll.on("update", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", asscroll.resize);
    requestAnimationFrame(() => {
      asscroll.enable({
        newScrollElements: document.querySelectorAll(
          ".gsap-marker-start, .gsap-marker-end, [asscroll]"
        ),
      });
    });
    return asscroll;
  }

  setSmoothScroll() {
    this.asscroll = this.setupASScroll();
  }

  setRoomScrollTrigger() {
    // create
    let mm = gsap.matchMedia();

    // desktop
    mm.add("(min-width: 1080px)", () => {
      console.log("desktop");

      this.rectLight.width = 0.47;
      this.rectLight.height = 0.09;
      this.room.scale.set(0.13, 0.13, 0.13);
      //first section
      this.firstMoveTimeLine = new gsap.timeline({
        scrollTrigger: {
          trigger: ".first-move",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      this.firstMoveTimeLine.to(this.room.position, {
        x: () => {
          return this.sizes.width * 0.00074;
        },
      });

      // second section and move  and scale --------------------------------

      this.secondMoveTimeLine = new gsap.timeline({
        scrollTrigger: {
          trigger: ".second-move",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })
        .to(
          this.room.position,
          {
            x: () => {
              return -this.sizes.width * 0.0019;
            },
            z: () => {
              return this.sizes.height * 0.0023;
            },
          },
          "same"
        )
        .to(
          this.room.scale,
          {
            x: 0.4,
            y: 0.4,
            z: 0.4,
          },
          "same"
        )
        .to(
          this.rectLight,
          {
            width: 0.47 * 4,
            height: 0.09 * 4,
          },
          "same"
        );

      // third section and move -------------------------------

      this.thirdMoveTimeLine = new gsap.timeline({
        scrollTrigger: {
          trigger: ".third-move",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })
        .to(
          this.camera.orthographicCamera.position,
          {
            y: 1.5,
            x: -5,
          },
          "same"
        )
        .to(
          this.room.position,
          {
            y: () => {
              return this.sizes.height * 0.00096;
            },
            z: () => {
              return this.sizes.width * 0.0005;
            },
          },
          "same"
        );

      //fourth section and move ----------------------------------

      this.fourthMoveTimeLine = new gsap.timeline({
        scrollTrigger: {
          trigger: ".fourth-move",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });
      this.fourthMoveTimeLine
        .to(
          this.room.position,
          {
            x: 0,
            z: 1.5,
            y: 0.2,
          },
          "same"
        )
        .to(
          this.room.scale,
          {
            x: 0.1,
            y: 0.1,
            z: 0.1,
          },
          "same"
        )
        .to(
          this.camera.orthographicCamera.position,
          {
            y: 0,
            x: 0,
            z: 0,
          },
          "same"
        )
        .to(
          this.rectLight,
          {
            width: 0.47,
            height: 0.09,
          },
          "same"
        );
    });

    //mobile
    mm.add("(max-width: 1079px)", () => {
      console.log("mobile");

      this.room.position.set(0, 0, 0);
      this.room.scale.set(0.06, 0.06, 0.06);
      // first section  --------------------------------
      this.firstMoveTimeLine = new gsap.timeline({
        scrollTrigger: {
          trigger: ".first-move",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      }).to(this.room.scale, {
        x: 0.08,
        y: 0.08,
        z: 0.08,
      });
      // second section  --------------------------------
      this.secondMoveTimeLine = new gsap.timeline({
        scrollTrigger: {
          trigger: ".second-move",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })
        .to(
          this.room.position,
          {
            x: -1.6,
            z: 0.9,
          },
          "same"
        )
        .to(
          this.room.scale,
          {
            x: 0.45,
            y: 0.45,
            z: 0.45,
          },
          "same"
        )
        .to(
          this.rectLight,
          {
            width: 0.47 * 3.4,
            height: 0.09 * 3.4,
          },
          "same"
        );
      // third section  --------------------------------
      this.thirdMoveTimeLine = new gsap.timeline({
        scrollTrigger: {
          trigger: ".third-move",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })
        .to(
          this.camera.orthographicCamera.position,
          {
            x: -2.2,
            y: 1.3,
          },
          "same"
        )
        .to(
          this.room.scale,
          {
            x: 0.25,
            y: 0.25,
            z: 0.25,
          },
          "same"
        )
        .to(
          this.room.position,
          {
            y: 0.1,
          },
          "same"
        );
      // fourth section  --------------------------------
      this.fourthMoveTimeLine = new gsap.timeline({
        scrollTrigger: {
          // markers: true,
          trigger: ".fourth-move",
          start: "top top",
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
      })
        .to(
          this.room.scale,
          {
            x: 0.1,
            y: 0.1,
            z: 0.1,
          },
          "same"
        )
        .to(
          this.room.position,
          {
            x: -2.2,
            z: 2.5,
            y: 0.01,
          },
          "same"
        );
    });
  }
  // animations for all----------------------------------------------
  setAllScrollTrigger() {
    this.sections = document.querySelectorAll(".section");
    this.sections.forEach((section) => {
      this.progressWrapper = section.querySelector(".progress-wrapper");
      this.progressBar = section.querySelector(".progress-bar");
      if (section.classList.contains("right")) {
        gsap.to(section, {
          borderTopLeftRadius: 10,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: 0.4,
          },
        });
        gsap.to(section, {
          borderBottomLeftRadius: 700,
          scrollTrigger: {
            trigger: section,
            start: "bottom bottom",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      } else {
        gsap.to(section, {
          borderTopRightRadius: 10,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: 0.4,
          },
        });
        gsap.to(section, {
          borderBottomRightRadius: 700,
          scrollTrigger: {
            trigger: section,
            start: "bottom bottom",
            end: "bottom top",
            scrub: 0.4,
          },
        });
      }
      gsap.from(this.progressBar, {
        scaleY: 0,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
          pin: this.progressWrapper,
          pinSpacing: false,
        },
      });
    });

    //-----------------------------------------------------------------------------------------------------------------------------
    //circle animations and other tweaks------------------------------------------------------------------------------------------------------------
    //first section
    this.firstMoveTimeLine = new gsap.timeline({
      scrollTrigger: {
        trigger: ".first-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    }).to(this.circleFirst.scale, {
      x: 2,
      y: 2,
      z: 2,
    });

    // second section and move  and scale --------------------------------
    this.secondMoveTimeLine = new gsap.timeline({
      scrollTrigger: {
        trigger: ".second-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    }).to(this.circleSecond.scale, {
      x: 3,
      y: 3,
      z: 3,
    });
    // third section and move -------------------------------
    this.thirdMoveTimeLine = new gsap.timeline({
      scrollTrigger: {
        trigger: ".third-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    }).to(this.circleThird.scale, {
      x: 3,
      y: 3,
      z: 3,
    });
    //fourth section and move ----------------------------------
    this.fourthMoveTimeLine = new gsap.timeline({
      scrollTrigger: {
        trigger: ".fourth-move",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    })
      .to(
        this.circleFirst.scale,
        {
          x: 3,
          y: 3,
          z: 3,
        },
        "same"
      )
      .to(
        this.circleSecond.scale,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        "same"
      )
      .to(
        this.circleThird.scale,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        "same"
      );
    //circle animation -------------------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------------------------------

    this.secondPartTimeLine = new gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: ".third-move",
        start: "center center",
      },
    });
    this.room.children.forEach((child) => {
      //mini flooranimation
      if (child.name === "Mini_floor") {
        this.first = gsap.to(child.position, {
          x: -0.290226,
          z: 1.47369,
          duration: 1.2,
          ease: "back.out(3)",
        });
      }
      //mailbox animation
      if (child.name === "Mail_box") {
        this.second = gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.3,
          ease: "back.out(3)",
        });
      }
      if (child.name === "Lamp") {
        this.third = gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.2,
          ease: "back.out(3)",
        });
      }
      if (child.name === "Dirt") {
        this.fourth = gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.3,
          ease: "back.out(3)",
        });
      }
      if (child.name === "Flower") {
        this.fifth = gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.4,
          ease: "back.out(3)",
        });
      }
      if (child.name === "Step_1") {
        this.sixth = gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.3,
          ease: "back.out(3)",
        });
      }
      if (child.name === "Step_2") {
        this.seventh = gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.5,
          ease: "back.out(3)",
        });
      }
      if (child.name === "Step_3") {
        this.eighth = gsap.to(child.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.8,
          ease: "back.out(3)",
        });
      }
    });
    this.secondPartTimeLine.add(this.first);
    this.secondPartTimeLine.add(this.second);
    this.secondPartTimeLine.add(this.third);
    this.secondPartTimeLine.add(this.fourth);
    this.secondPartTimeLine.add(this.fifth);
    this.secondPartTimeLine.add(this.sixth);
    this.secondPartTimeLine.add(this.seventh);
    this.secondPartTimeLine.add(this.eighth);
  }

  resize() {}

  update() {}
}
