const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

const tl = gsap.timeline({defaults :{ease : "power4.inOut",duration:2}})

tl.to("nav",{y:"0",opacity:1})
tl.fromTo(".navHref",{y:"-50%",opacity:0},{y:"0%",opacity:1,stagger:.1},"-=2")
tl.to(".text",{"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",opacity:1,y:0,duration:2},"-=2.4")
tl.to(".text2",{"clip-path": "polygon(1% 0%, 100% 0%, 100% 100%, 0% 100%)",opacity:1,y:0,duration:2},"-=2.5");
tl.fromTo(".circle",{ease: "elastic.out(1, 0.3)",opacity:0},{opacity:1,duration:3,},"-=2.1")

let hg = gsap.timeline({
  scrollTrigger: {
    trigger: '.box',
    start:"top 90%",
    end: () =>`+=${document.querySelector(".box").offsetHeight}`,
    scrub:1,
    toggleActions :"restart reverse none none"
  }
})



hg.from(".box",{y:50,opacity:0,stagger:.3})

ScrollTrigger.create({
  start: "top 0%",
  end: "bottom 3%",
  toggleClass:{targets: "header", className: "sticky"},
})


// const navBar = document.querySelector("header")
// console.log(navBar)

// window.addEventListener("scroll", ()=>{

//   const navbar = document.querySelector("header")

//   navbar.classList.toggle("sticky",window.scrollY>0)
// })
