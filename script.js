function loco() {
    gsap.registerPlugin(ScrollTrigger);
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
            lerp:0.01,
            smooth: true,
            getDirection: true,
            smoothMobile: true,
        mobile: {
            breakpoint: 0,
            inertia: 0.2,
            lerp:0.5,
            smooth: true,
            smoothMobile: true,            
        },
        tablet: {
            breakpoint: 0,
            inertia: 0.2,
            lerp:0.5,
            smooth: true,
            getDirection: true,
            smoothMobile: true,

            },
        smartphone: {
            breakpoint: 0,
            inertia: 0.2,
            lerp:0.5,
            smooth: true,
            smoothMobile: true,
            getDirection: true,
        }
      });
      
      locoScroll.on("scroll", ScrollTrigger.update);
      
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
      
        // follwoing line is not required to work pinning on touch screen
      
         pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed"
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      
      ScrollTrigger.refresh();
  
  }
  loco();


  
gsap.from("#overlay1",{
    backgroundColor:"white",
    duration:3,
})
gsap.from("#overlay1 img",{
    y:30,
    opacity:0,
    duration:2,
    delay:1,
})

gsap.from("#overlay1 i",{
    y:10,
    repeat:-1,
    yoyo:true,
})
gsap.from("#page3text",{
    opacity:0,
    x:220,
    scrollTrigger:{
      trigger:"#page2text>h5",
      scroller:"#main",
      start:"140% 80%",
      end:"bottom 50%",
      scrub:true,
      
    }
  })
gsap.to("#scroll",{
    transform:"translateX(-223%)",
    duration:60,
    repeat:-1,
})

var tl1 = gsap.timeline();

tl1.from("#page2img",{
    x:-150,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2img",
        scroller:"#main",
        start:"top 95%",
        end:"top 70%",
        scrub:true,
        
    }
})
tl1.from("#page2text>h1",{
    x:-150,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2text>h1",
        scroller:"#main",
        start:"top 95%",
        end:"top 70%",
        scrub:true,
        
    }
})
tl1.from("#page2text>h5",{
    x:-150,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2text>h5",
        scroller:"#main",
        start:"top 95%",
        end:"top 70%",
        scrub:true,
    }
})


var tl2 = gsap.timeline();

tl2.from("#page4top>h1",{
    x:-100,
    opacity:0,
    stagger:0.8,
    scrollTrigger:{
        trigger:"#page4top h1",
        scroller:"#main",
        start:"top 97%",
        end:"bot 50%",
        scrub:true,
    }
})

tl2.from("#page4mid",{
    opacity:0,
    y:40,
    scrollTrigger:{
        trigger:"#page4mid",
        scroller:"#main",
        start:"top 97%",
        end:"bot 50%",
        scrub:true,
    }
})
tl2.from("#page4bot",{
    x:-50,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4bot",
        scroller:"#main",
        start:"top 97%",
        end:"bot 50%",
        scrub:true,
    }
})

gsap.to("body",{
    backgroundColor:"rgb(199, 102, 71)",
    scrollTrigger:{
        trigger:"#page4mid",
        scroller:"#main",
        start:"top 50%",
        end:"top 10%",
        scrub:3,
        
    }
})

gsap.from("#page4video",{
    scale:0.6,
    scrollTrigger:{
        trigger:"#page4video",
        scroller:"#main",
        start:"top 97%",
        end:"bot 50%",
        scrub:true,
    }
})

var tl2 = gsap.timeline();

tl2.from("#page5topview",{
    scale:0.78,
    scrollTrigger:{
        trigger:"#page5topview",
        scroller:"#main",
        start:"top 100%",
        end:"top 0%",
        scrub:true,
        
    }
})
tl2.to("#page5topview",{
    scrollTrigger:{
        trigger:"#page5topview",
        scroller:"#main",
        start:"-5% top",
        end:"+=200%",
        scrub:true,
        pin:true,
    }
})
gsap.to("#overlay2",{
    backgroundColor:"rgba(0, 0, 0, 0.344)",
    scrollTrigger:{
        trigger:"#topview",
        scroller:"#main",
        start:"top 100%",
        end:"top 80%",
        scrub:true,
        
    }

})
gsap.to("#imgpage5",{
    backgroundSize:"cover",
    backgroundPosition:"center",
    background:"url('./assets/swimmingwebp.png')",
    scrollTrigger:{
        trigger:"#swimming h1",
        scroller:"#main",
        start:"top 100%",
        scrub:true,
        
    }
})

var tl3 = gsap.timeline();

tl3.from("#page6 h1",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page6 h1",
        scroller:"#main",
        start:"top 100%",
        end:"top 60%",
        scrub:true,
        

    }
})

var clutter3 ="";
document.querySelector("#withLove").textContent.split("").forEach(function (dets) {
  clutter3 += `<span>${dets}</span>`;

  document.querySelector("#withLove").innerHTML = clutter3;
});

tl3.from("#withLove span",{
    opacity:0,
    x:-2,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page6 h1",
        scroller:"#main",
        start:"top 60%",
        end:"top 50%",
        scrub:true,
        
    }

})

var footerLeftText = [
    "<h1>Slice<br>Backhand<br>Smash</h1>",
    "<h1>Lob<br>Topspin<br>Putaway</h1>",
    "<h1>Serve<br>Volley<br>Return</h1>"
]
var footerRightText = [
    "<h1>Picnic<br>Lemon Trees<br>Solitude</h1>",
    "<h1>Nature<br>Coffee<br>Catch Up</h1>",
    "<h1>Swim<br>Cocktails<br>Social</h1>"
]

var footerLeft = document.getElementById("footerleft");
var footerRight = document.getElementById("footerright");
var textleft = document.getElementById("textleft");
var textRight = document.getElementById("textright");
var counterLeft=0;
var counterRight=0;


footerLeft.addEventListener('mouseleave',function(){
    setTimeout(function(){
        textleft.innerHTML=footerLeftText[counterLeft];
    },300)
    counterLeft= (counterLeft + 1) % 3;
})
footerRight.addEventListener('mouseleave',function(){
    setTimeout(function(){
        textRight.innerHTML=footerRightText[counterRight];
    },300)
    counterRight= (counterRight + 1) % 3;
})


gsap.to("#footerOverlay",{
    backgroundColor:"rgba(0, 0, 0, 0)",
    zIndex:-1,
    scrollTrigger:{
        trigger:"#contact",
        scroller:"#main",
        start:"bottom 80%",
        end:"bottom 40%",
        scrub:1,
    }

})