// const config = {
//   dataUrl: "Build/Build.data",
//   frameworkUrl: "Build/Build.framework.js",
//   codeUrl: "Build/Build.wasm",
//   streamingAssetsUrl: "StreamingAssets",
//   companyName: "DefaultCompany",
//   productName: "Glut",
//   productVersion: "0.1",
// };
//
// const container = document.querySelector("#unity-container");
// const canvas = document.querySelector("#unity-canvas");
// const loadingBar = document.querySelector("#unity-loading-bar");
// const progressBarFull = document.querySelector("#unity-progress-bar-full");
// const fullscreenButton = document.querySelector("#unity-fullscreen-button");
// const mobileWarning = document.querySelector("#unity-mobile-warning");
//
// if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
//   container.className = "unity-mobile";
//   config.devicePixelRatio = 1;
//   mobileWarning.style.display = "block";
//   setTimeout(() => {
//     mobileWarning.style.display = "none";
//   }, 5000);
// } else {
//   canvas.style.width = "90vw";
//   canvas.style.height = "90vh";
// }
// loadingBar.style.display = "block";
//
// createUnityInstance(canvas, config, (progress) => {
//   progressBarFull.style.width = 100 * progress + "%";
// })
//   .then((unityInstance) => {
//     loadingBar.style.display = "none";
//     fullscreenButton.onclick = () => {
//       unityInstance.SetFullscreen(1);
//     };
//   })
//   .catch((message) => {
//     alert(message);
//   });

const titleElement = document.querySelector("h1 a");

titleElement.innerHTML = titleElement.textContent
  .split("")
  .map((c) => `<span>${c}</span>`)
  .join("");

let isAnimating = false;

function startAnimation() {
  isAnimating = true;
  const items = Array.from(document.querySelectorAll(".logo a span"));
  items.forEach((i) => {
    i.classList.add("animate");
    i.style.animationDuration = `${Math.random() + 0.5}s`;
  });

  setTimeout(stopAnimation, 3000);
}

function stopAnimation() {
  isAnimating = false;

  const items = Array.from(document.querySelectorAll(".logo a span"));
  items.forEach((i) => {
    i.classList.remove("animate");
  });

  setTimeout(startAnimation, Math.random() * 6000 + 3000);
}

startAnimation();

const vid = document.querySelector("video");
const muteButton = document.querySelector(".mute");
let muted = true;

muteButton.addEventListener("click", () => {
  console.log("click");
  if (muted) {
    muteButton.textContent = "Mute";
    vid.muted = false;
  } else {
    muteButton.textContent = "Unmute";
    vid.muted = true;
  }
  muted = !muted;
});

// let scrollTimeout;
//
// document.addEventListener("scroll", () => {
//   console.log('scroll');
//   clearTimeout(scrollTimeout);
//
//   if (!isAnimating) startAnimation();
//
//   scrollTimeout = setTimeout(() => {
//     stopAnimation();
//   }, 1000);
//
// });
