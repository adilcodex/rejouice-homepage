function scrolleffect(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
scrolleffect()

function cursoreffect(){
    let page1content = document.querySelector(".page1-content")
let curser = document.querySelector(".curser")

page1content.addEventListener("mousemove", function(bro){
    // (js methord
//     curser.style.left = bro.x+"px"
//      curser.style.top = bro.y+"px")

// gsap method
gsap.to(curser,{
    x:bro.x,
    y:bro.y
})
 })

 page1content.addEventListener("mouseenter", function(){
    gsap.to(curser,{
        scale:1,
        opacity:1
    })
 })

 page1content.addEventListener("mouseleave", function(){
    gsap.to(curser,{
        scale:0,
        opacity:0
    })
 })


 
}
cursoreffect()

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 800,
    disableOnInteraction: true,
    
  },
});

// let btn = document.querySelector(".menubtn")
// btn.addEventListener("click",hidemenu);
// function hidemenu() {
//   document.querySelector(".menuopen").style.display = "none";
// }



// $(document).ready(function(){
//   $(".menubtn").click(function(){
//     $(".menuopen").toggle();
//   });
// });



















document.querySelector(".menubtn")
.addEventListener("click", function(){
  document.querySelector(".menuopenp").classList.toggle("open");
});











