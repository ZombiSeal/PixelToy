// let games = document.querySelectorAll('.game');
// let height = document.body.clientHeight - document.querySelector(".footer").clientHeight + 10;
// let lineLength = 0;
// console.log(height);
// document.querySelector('.container').style.height = height + "px";

// window.addEventListener('resize', (e) => {
//     let height = document.body.clientHeight - document.querySelector(".footer").clientHeight;
//     document.querySelector('.container').style.height = height + "px";
// });


let path1 = document.querySelector("#line1");
pathPrepare(path1);
let controller1 = new ScrollMagic.Controller();

let tween1 = new TimelineMax()
    .add(TweenMax.to(path1, 3, { strokeDashoffset: 0, ease: Linear.easeNone }))

let scene1 = new ScrollMagic.Scene({
    triggerElement: '#line1',
    triggerHook: 'onEnter',
    duration: 1600,
    tweenChanges: true
})
    .setTween(tween1)
    .addTo(controller1);

let path2 = document.querySelector("#line2");
pathPrepare(path2);

let tween2 = new TimelineMax()
    .add(TweenMax.to(path2, 3, { strokeDashoffset: 0, ease: Linear.easeNone }));

let scene2 = new ScrollMagic.Scene({
    triggerElement: '#trigger',
    triggerHook: 'onEnter',
    duration: 2000,
    tweenChanges: true
})
    .setTween(tween2)
    .addTo(controller1);


let path3 = document.querySelector("#line3");
pathPrepare(path3);

let tween3 = new TimelineMax()
    .add(TweenMax.to(path3, 3, { strokeDashoffset: 0, ease: Linear.easeNone }));

let scene3 = new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    triggerHook: 'onEnter',
    duration: 1250,
    tweenChanges: true
})
    .setTween(tween3)
    .addTo(controller1);



function pathPrepare(el) {
    lineLength = el.getTotalLength();
    el.style.strokeDasharray = lineLength;
    el.style.strokeDashoffset = lineLength;
}
