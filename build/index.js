"use strict";
const video = document.querySelector("video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const Stop = document.querySelector("#stop");
const mute = document.querySelector("#mute");
const time = document.querySelector(".time");
const sound = document.querySelector(".sound");
const skip = document.querySelector("#skip");
const back = document.querySelector("#back");
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
