
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });








gsap.to("#scroll #outer", {
    rotate: 721,
    repeat: -1,
    duration: 40
})


function Page1Animation() {
    var tl = gsap.timeline()

    tl.from("#navbar h1, #nav-part1 h2, #nav-part1 button", {
        opacity: 0,
        delay: 0.6,
        duration: 0.5,
    }, "-=0.3")

    tl.from(".grid1 h1, .grid1 #info", {
        y: 40,
        duration: 0.8,
        opacity: 0,
        stagger: 0.2
    })
    tl.from("#solidimg", {
        y: 40,
        duration: 0.8,
        opacity: 0,
    }, "-=1")


}
Page1Animation()

function Container2() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#container2",
            scroller: "body",
            start: "top 60%",
            end: "50% 60%",
            scrub: 2
        }
    })

    tl.from("#container2 .About", {
        y: 40,
        duration: 3,
        opacity: 0,
        stagger: 0.7
    })
    tl.from("#container2 #image", {
        y: 40,
        duration: 3,
        opacity: 0,
    }, "")


}
Container2()

function Container3() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#container3",
            scroller: "body",
            start: "top 60%",
            end: "20% 60%",
            scrub: 2
        }
    })
    tl2.from("#container3 #info2", {
        y: 40,
        duration: 2,
        opacity: 0,
    })
    tl2.from("#container3 #image1", {
        y: 40,
        duration: 2,
        opacity: 0,
    },"-=1")
}
Container3()


function Container4() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#container4",
            scroller: "body",
            start: "top 75%",
            end: "50% 75%",
            scrub: 2,
        }
    })
    tl2.from("#container4 #info3 span" , {
        y: 40,
        duration: 2,
        opacity: 0,
        stagger:4
    })
    tl2.from("#container4 #info4 h3", {
        y: 40,
        duration: 2,
        opacity: 0,
        stagger:0.5
    },)
}
Container4()


function Container5() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section3 #container5",
            scroller: "body",
            start: "top 60%",
            end: "top 60%",
            scrub: 2
        }
    })
    tl2.from("#container5 #arrow", {
        y: 40,
        duration: 2,
        opacity: 0,
    })
    tl2.from("#container5 #info5", {
        y: 40,
        duration: 2,
        opacity: 0,
    })
}
Container5()


function Projects() {
   
    gsap.from("#proinfo1,#proimg1", {
        y: 50,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: "#project1",
            scroller: "body",
            start: "10% 60%",
            end: "20% 60%",
            scrub: 2
        }
    })
    gsap.from("#proinfo2, #proimg2", {
        y: 50,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: "#project2",
            scroller: "body",
            start: "10% 60%",
            end: "20% 60%",
            scrub: 2
        }
    })
    gsap.from("#proinfo3, #proimg3", {
        y: 50,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: "#project3",
            scroller: "body",
            start: "10% 60%",
            end: "20% 60%",
            scrub: 2
        }
    })
    gsap.from("#proinfo4, #proimg4", {
        y: 50,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: "#project4",
            scroller: "body",
            start: "10% 60%",
            end: "20% 60%",
            scrub: 2
        }
    })

}
Projects()

function Connect(){
    gsap.from("#connect",{
        y:100,
        opacity:0,
        duration:1,
        delay:3,
        scrollTrigger:{
            trigger:"#connect",
            scroll:"body",
            start:"top 60%",
            end:"50% 60%",
            scrub:true,
        }
    })
}
Connect()


