
var tl= gsap.timeline()

var tl2= gsap.timeline()


tl.from("nav", {
    y: -100,
    duration: 1.5,
    stagger: 0.8  // Set stagger value to 0.2 seconds
  });

tl2.from(".left_section h1",{
    y:200,
    duration:1,
    scrub:3
    scale:1.2
},"a")