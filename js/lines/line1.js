let path1 = document.querySelector("#line1");
pathPrepare(path1);

let controller1 = new ScrollMagic.Controller();
let tween1 = new TimelineMax()
  .add(TweenMax.to(path1, 3, { strokeDashoffset: 0, ease: Linear.easeNone }))

let scene1 = new ScrollMagic.Scene({
  triggerElement: '#line1',
  triggerHook: 'onEnter',
  duration: '100%',
  tweenChanges: true
})
  .setTween(tween1)
  .addTo(controller1);

function pathPrepare(el) {
  let lineLength = el.getTotalLength();
  el.style.strokeDasharray = lineLength;
  el.style.strokeDashoffset = lineLength;
}

