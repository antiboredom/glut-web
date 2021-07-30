const config = {
  dataUrl: "Build/Build.data",
  frameworkUrl: "Build/Build.framework.js",
  codeUrl: "Build/Build.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "Glut",
  productVersion: "0.1",
};

const container = document.querySelector("#unity-container");
const canvas = document.querySelector("#unity-canvas");
const loadingBar = document.querySelector("#unity-loading-bar");
const progressBarFull = document.querySelector("#unity-progress-bar-full");
const fullscreenButton = document.querySelector("#unity-fullscreen-button");
const mobileWarning = document.querySelector("#unity-mobile-warning");

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  container.className = "unity-mobile";
  config.devicePixelRatio = 1;
  mobileWarning.style.display = "block";
  setTimeout(() => {
    mobileWarning.style.display = "none";
  }, 5000);
} else {
  canvas.style.width = "90vw";
  canvas.style.height = "90vh";
}
loadingBar.style.display = "block";

createUnityInstance(canvas, config, (progress) => {
  progressBarFull.style.width = 100 * progress + "%";
})
  .then((unityInstance) => {
    loadingBar.style.display = "none";
    fullscreenButton.onclick = () => {
      unityInstance.SetFullscreen(1);
    };
  })
  .catch((message) => {
    alert(message);
  });
