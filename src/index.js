var video = document.querySelector("video");
var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
var Stop = document.querySelector("#stop");
var mute = document.querySelector("#mute");
var time = document.querySelector(".time");
var sound = document.querySelector(".sound");
var skip = document.querySelector("#skip");
var back = document.querySelector("#back");
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
