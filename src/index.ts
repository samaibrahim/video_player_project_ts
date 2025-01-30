const video = document.querySelector("video") as HTMLVideoElement;
const play = document.querySelector("#play") as HTMLButtonElement;
const pause = document.querySelector("#pause") as HTMLButtonElement;
const Stop = document.querySelector("#stop") as HTMLButtonElement;
const mute = document.querySelector("#mute") as HTMLButtonElement;
const time = document.querySelector(".time") as HTMLInputElement;
const sound = document.querySelector(".sound") as HTMLInputElement;
const skip = document.querySelector("#skip") as HTMLButtonElement;
const back = document.querySelector("#back") as HTMLButtonElement;
 
window.addEventListener("load", function () {
  if (time) {
    time.value = "0";
    time.max = video.duration.toString();
  }
});
play.addEventListener("click", function () {
  video.play();
});
pause.addEventListener("click", function () {
  video.pause();
});
Stop.addEventListener("click", function () {
  video.load();
  video.pause();
});
mute.addEventListener("click", function () {
  video.muted = !video.muted;
  sound.value = "0";
});
time.addEventListener("input", function () {
  if (time) {
    video.currentTime = parseFloat(time.value);
  }
});
video.addEventListener("timeupdate", function () {
  time.value = video.currentTime.toString();
});
sound.addEventListener("input", function () {
  video.volume = parseFloat(this.value);
});
skip.addEventListener("click", function () {
  video.currentTime += 2;
  if (video.currentTime > video.duration) {
    video.currentTime = video.duration;
  }
});
back.addEventListener("click", function () {
  video.currentTime -= 2;
  if (video.currentTime < 0) {
    video.currentTime = 0; // Prevent the time from going below 0
  }
});
 