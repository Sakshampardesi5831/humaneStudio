const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnime() {
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1.5,
  });
  tl.to(".boundingelem", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 0.2,
    delay: -0.1,
  });
  tl.from("#herofooter", {
    y: "-10",
    opacity: 0,
    delay: -0.1,
    ease: Expo.easeInOut,
    duration: 1.5,
  });
}
var timerout;
function circleChaptaKaro() {
  var xscale = 1;
  var yscale = 1;
  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function (dets) {
   clearTimeout(timerout);
    xscale=  gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale=  gsap.utils.clamp(0.8, 1.2,dets.clientY - yprev);
    xprev = dets.clientX;
    yprev = dets.clientY;
    circleFollower(xscale,yscale);
  timerout=  setTimeout(() => {
        document.querySelector(
            "#minicircle"
          ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}

function circleFollower(xscale,yscale) {
  window.addEventListener("mousemove", function (dets) {
    // console.log(dets.clientX, dets.clientY);
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
  });
}
firstPageAnime();
circleChaptaKaro()
circleFollower();

document.querySelectorAll('.elem').forEach((elem)=>{
    var rotate=0;
    var mainDiff=0;  
    elem.addEventListener("mousemove",function(dets){
     var diff= dets.clientY-elem.getBoundingClientRect().top; 
     mainDiff=dets.clientX-rotate;
     rotate=dets.clientX;
     gsap.utils.clamp(-20,20,mainDiff);
       gsap.to(elem.querySelector("img"),{
          opacity:1,
          ease:Power3,
          top:diff,
          left:dets.clientX,
          rotate: gsap.utils.clamp(-20,20,mainDiff*0.2)
       });
    })
    elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
           opacity:0,
           ease:Power3,
        });
  })
})