let path3 = document.querySelector("#line3");
let path2 = document.querySelector("#line2")

let controller3 = new ScrollMagic.Controller();
let controller4 = new ScrollMagic.Controller();

pathPrepare(path2);
pathPrepare(path3);

let tween3 = new TimelineMax()
  .add(TweenMax.to(path2, 3, { strokeDashoffset: 0, ease: Linear.easeNone }));
let tween4 = new TimelineMax()
  .add(TweenMax.to(path3, 1, { strokeDashoffset: 0, ease: Linear.easeNone })) 


  let scene3 = new ScrollMagic.Scene({
    triggerElement: '#line2',
    triggerHook: 'onCenter',
    duration: 1100,
    reverse: true,
    tweenChanges: true
  })
    .setTween(tween3)
    .addTo(controller3);


    let scene4 = new ScrollMagic.Scene({
      triggerElement: '#footer',
      triggerHook: "onEnter",
      duration: 0,
      reverse: true,
      tweenChanges: true
    })
      .setTween(tween4)
      .addTo(controller4);

    function pathPrepare(el) {
      let lineLength = el.getTotalLength();
      el.style.strokeDasharray = lineLength;
      el.style.strokeDashoffset = lineLength;
    }
    