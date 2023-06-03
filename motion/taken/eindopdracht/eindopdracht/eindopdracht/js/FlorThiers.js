gsap.registerPlugin(ScrollTrigger);


/*
let panels = gsap.utils.toArray(".panel");
// we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    pin: true, 
    pinSpacing: false 
  });
});

var imgmovement=document.getElementById("follow");
document.onmousemove=function(){
    var x=event.clientX*100/window.innerWidth+"%";
    var y=event.clientY*100/window.innerHeight+"%";

    for(var i=0;i<2;i++){
        imgmovement.style.left=x;
        imgmovement.style.top=y;
        imgmovement.style.transform="translate(-"+x+",-"+y+")";
    }
}


*/


function FlorThiers(fase) {
    let section = document.getElementById("FlorThiers");

    

    if( ! section.init) {
        section.init = true;
        //eigen animatie
        console.log("FlorThiers.js: init");
        section.tl

        
        .to("#FlorThiers .box", {
            backgroundColor: "yellow",
            rotation: 360,
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            duration: 0.5,
        })
        .add("deel2")
        .to("#FlorThiers .box", {
            backgroundColor: "yellow",

            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            duration: 6,
        }, "deel2")
        .from("#lat", {
            rotation: 360,
            delay: 2,
            duration: 3,
        }, "deel2")
        .from("#Pira", {
            left: "60vw",
            delay: 7,
            duration: 4,
        }, "deel2")


        .add("deel3")
        .to("#FlorThiers .box", {
            backgroundColor: "green",

            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            duration: 6,
        }, "deel3")
        .from("#maya", {
            height: "1vh",
            delay: 4,
            duration: 1,
        }, "deel3")
        .from("#PiOog1", {
            rotationY: 360,
            delay: 7,
            duration: 1,
        }, "deel3")



        .to("#FlorThiers .box", {
            borderRadius: "50%",
            backgroundColor: "white",

            left: "40vw",
            top: "calc(50vh - 10vw)",
            width: "19vw",
            height: "19vw",
            duration: 8,
        })


        .to("#FlorThiers .box", {
            borderRadius: "0",
            backgroundColor: "white",
            rotation: 360,
            left: "47.6vw",
            top: "calc(50vh - 10vw)",
            width: "2vw",
            height: "20vw",
            duration: 2,
        })


        .add("deel4")
        .to("#FlorThiers .box", {
            borderRadius: "0",
            backgroundColor: "red",

            left: "47.6vw",
            top: "calc(50vh - 10vw)",
            width: "2vw",
            height: "20vw",
            duration: 2,
        }, "deel4")
        .from("#vliegtuig", {
            right: "100vw",
            delay: 3,
            duration: 2,
        }, "deel4")
        .from("#drone", {
            top: "100vh",
            delay: 4,
            duration: 1,
        }, "deel4")


        .to("#FlorThiers .box", {
            borderRadius: "50%",
            backgroundColor: "white",

            left: "34.5vw",
            top: "calc(50vh - 10vw)",
            width: "24vw",
            height: "24vw",
            duration: 3 ,
        })



        .to("#FlorThiers .box", {
            borderRadius: "0",
            backgroundColor: "white",

            left: "40vw",
            top: "calc(50vh - 10vw)",
            width: "20vw",
            height: "20vw",
            duration: 1,
        })

    }
    console.log("FlorThiers.js: fase = " + fase);
    console.log("FlorThiers.js");

}