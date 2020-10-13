	/**
 * Frame-by-frame video animation with ScrollMagic and GSAP
 *
 * Note that your web server must support byte ranges (most do).
 * Otherwise currentTime will always be 0 in Chrome.
 * See here: http://stackoverflow.com/a/5421205/950704
 * and here: https://bugs.chromium.org/p/chromium/issues/detail?id=121765
 */

const video = document.getElementById("video");
const long = document.getElementById("long");
let scrollpos = 0;
let lastpos;
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: long,
  triggerHook: "onEnter"
});
const startScrollAnimation = () => {
  scene
    .addTo(controller)
    .duration(long.clientHeight)
    .on("progress", (e) => {
      scrollpos = e.progress;
    });

  setInterval(() => {
    if (lastpos === scrollpos) return;
    requestAnimationFrame(() => {
      video.currentTime = video.duration * scrollpos;
      video.pause();
      lastpos = scrollpos;
      // console.log(video.currentTime, scrollpos);
    });
  }, 50);
};

const preloadVideo = (v, callback) => {
  const ready = () => {
    v.removeEventListener("canplaythrough", ready);

    video.pause();
    var i = setInterval(function () {
      if (v.readyState > 3) {
        clearInterval(i);
        video.currentTime = 0;
        callback();
      }
    }, 50);
  };
  v.addEventListener("canplaythrough", ready, false);
  v.play();
};

preloadVideo(video, startScrollAnimation);

// startScrollAnimation();



$(function () {

    var vid = $('#v0')[0]; // jquery option
    
    // pause video on load
    vid.pause();
    
    // pause video on document scroll (stops autoplay once scroll started)
    window.onscroll = function () {
        vid.pause();
        //console.log(vid.currentTime, window.pageYOffset / 400);
        $("#time").text(vid.currentTime);
      
      if (vid.currentTime > 7 && vid.currentTime < 8) {
        $('.content').addClass('active');
      } else {
        $('.content').removeClass('active');
      }
        
    };
    
    // refresh video frames on interval for smoother playback
    setInterval(function () {
        
        if((window.pageYOffset / 400) > 3 && (window.pageYOffset / 400) < 6){
            vid.pause();
        } else {
            
            vid.currentTime = window.pageYOffset / 400;
        }
        
        
    }, 32);
                
                
               
});