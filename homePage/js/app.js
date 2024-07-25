gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1,
    effects: true,
  });

  gsap.fromTo(
    ".welcome",
    { opacity: 1 },
    {
      opacity: 0,

      scrollTrigger: {
        trigger: ".welcome",
        start: "center",
        end: "820",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".strong__h",
    { opacity: 0 },
    {
      opacity: 1,

      scrollTrigger: {
        trigger: ".strong__h",

        scrub: true,
      },
    }
  );

  gsap.fromTo(
    ".strong__box",
    { opacity: 0 },
    {
      opacity: 1,
      //   delay: 10,
      scrollTrigger: {
        trigger: ".strong__box",
        start: 1100,
        scrub: true,
      },
    }
  );
//   gsap.fromTo(
//     ".track__text",
//     { opacity: 0 },
//     {
//       opacity: 1,

//       scrollTrigger: {
//         trigger: "track__text",
        
//       },
//     }
//   );
    // gsap.fromTo(
    //   ".card__red",
    //   { width: 0 },
    //   {
    //     width: 500,

    //     scrollTrigger: {
    //       trigger: ".card__red",
    //       scrub: true,
    //     },
    //   }
    // );
}
