let path1 = document.querySelector("#line1");
pathPrepare(path1);
let controller1 = new ScrollMagic.Controller();

let tween1 = new TimelineMax()
    .add(TweenMax.to(path1, 6, { strokeDashoffset: 0, ease: Linear.easeNone }))

let scene1 = new ScrollMagic.Scene({
    triggerElement: '#line1',
    triggerHook: 'onEnter',
    duration: 1800,
    tweenChanges: true
})
    .setTween(tween1)
    .addTo(controller1);


let path2 = document.querySelector("#line2");
pathPrepare(path2);

let tween2 = new TimelineMax()
    .add(TweenMax.to(path2, 6, { strokeDashoffset: 0, ease: Linear.easeNone }))

let scene2 = new ScrollMagic.Scene({
    triggerElement: '#line2',
    triggerHook: 'onCenter',
    duration: 1000,
    tweenChanges: true
})
    .setTween(tween2)
    .addTo(controller1);


let path3 = document.querySelector("#line3");
pathPrepare(path3);

let tween3 = new TimelineMax()
    .add(TweenMax.to(path3, 2, { strokeDashoffset: 0, ease: Linear.easeNone }))

let scene3 = new ScrollMagic.Scene({
    triggerElement: '#trigger',
    triggerHook: 'onCenter',
    duration: 100,
    tweenChanges: true
})
    .setTween(tween3)
    .addTo(controller1);

function pathPrepare(el) {
    lineLength = el.getTotalLength();
    el.style.strokeDasharray = lineLength;
    el.style.strokeDashoffset = lineLength;
}
