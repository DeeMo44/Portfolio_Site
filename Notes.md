Time on video: 2:56:53
File: ?

just go back one minute

5 51 10


 // animations ----------------------------------------------
    //mini platform animation
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
        this.room.children.forEach((child) => {
          if (child.name === "Mini_floor") {
            gsap.to(child.position, {
              x: -0.290226,
              z: 1.47369,
              duration: 0.5,
            });
          }
        })
      )
      .to(
        this.room.children.forEach((child) => {
          if (child.name === "Mail_box") {
            gsap.to(child.scale, {
              x: 1,
              y: 1,
              z: 1,
              duration: 0.5,
            });
          }
        })
      );