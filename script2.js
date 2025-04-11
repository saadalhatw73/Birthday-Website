var radius = 240; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees
var imgWidth = 120; // width of images (unit: px)
var imgHeight = 170; // height of images (unit: px)

// Link of background music
var bgMusicURL = 'https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a';
var bgMusicControls = true;

// ===================== start =======================
setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid]; // combine 2 arrays

ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform =
      "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  if (tY > 180) tY = 180;
  if (tY < 0) tY = 0;
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = yes ? 'running' : 'paused';
}

var sX, sY, nX, nY, desX = 0,
  desY = 0,
  tX = 0,
  tY = 10;

// auto spin
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// background music
if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
  <audio id="bg-music" src="${bgMusicURL}" ${bgMusicControls ? 'controls' : ''} autoplay loop></audio>
  `;
}

// interaction music play
window.addEventListener('click', function () {
  const audio = document.getElementById('bg-music');
  if (audio && audio.paused) {
    audio.play().catch(e => {
      console.log('Autoplay prevented:', e);
    });
  }
}, { once: true });

// drag spin logic
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
    sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
      nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function (e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};

// ================= FINAL BUTTON LOGIC =================
function goToFinal() {
  Swal.fire({
    title: "Are you ready for the final surprise?",
    icon: "question",
    confirmButtonText: "Yes, let's go! 🎁",
    showCancelButton: true,
    cancelButtonText: "Not yet"
  }).then(result => {
    if (result.isConfirmed) {
      window.location.href = "s.html"; // 🔁 Change this to your final surprise page
    }
  });
}

function playHighlightedVideo() {
  const video = document.querySelector('.highlight-video');
  if (video) {
    video.muted = false;
    video.play().catch(err => console.warn("Playback blocked:", err));
  }
}

function playHighlightedVideo() {
  const video = document.querySelector('.highlight-video');
  if (video) {
    video.muted = false;
    video.play().catch(err => console.warn("Playback error:", err));
  }
}

function goToFinal() {
  // Redirect to final surprise page
  window.location.href = "flower.html"; // or update the path
}

function playHighlightedVideo() {
  const video = document.querySelector('.highlight-video');
  if (video) {
    video.muted = false;
    video.play().catch(err => console.warn("Playback error:", err));
  }
}

function goToFinal() {
  window.location.href = "index3.html"; // Update with your final surprise page
}
