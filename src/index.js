"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(videoSrc) {
        this.video = document.querySelector("video");
        this.video.src = videoSrc;
        this.playButton = document.querySelector("#play");
        this.pauseButton = document.querySelector("#pause");
        this.stopButton = document.querySelector("#stop");
        this.muteButton = document.querySelector("#mute");
        this.timeSlider = document.querySelector(".time");
        this.volumeSlider = document.querySelector(".sound");
        this.skipButton = document.querySelector("#skip");
        this.backButton = document.querySelector("#back");
        this.initialize();
    }
    VideoPlayer.prototype.initialize = function () {
        var _this = this;
        window.addEventListener("load", function () { return _this.setupTimeSlider(); });
        this.playButton.addEventListener("click", function () { return _this.play(); });
        this.pauseButton.addEventListener("click", function () { return _this.pause(); });
        this.stopButton.addEventListener("click", function () { return _this.stop(); });
        this.muteButton.addEventListener("click", function () { return _this.toggleMute(); });
        this.timeSlider.addEventListener("input", function () { return _this.updateTime(); });
        this.video.addEventListener("timeupdate", function () { return _this.syncTimeSlider(); });
        this.volumeSlider.addEventListener("input", function () { return _this.updateVolume(); });
        this.skipButton.addEventListener("click", function () { return _this.skip(2); });
        this.backButton.addEventListener("click", function () { return _this.skip(-2); });
    };
    VideoPlayer.prototype.setupTimeSlider = function () {
        if (this.timeSlider) {
            this.timeSlider.value = "0";
            this.timeSlider.max = this.video.duration.toString();
        }
    };
    VideoPlayer.prototype.play = function () {
        this.video.play();
    };
    VideoPlayer.prototype.pause = function () {
        this.video.pause();
    };
    VideoPlayer.prototype.stop = function () {
        this.video.load();
        this.video.pause();
    };
    VideoPlayer.prototype.toggleMute = function () {
        this.video.muted = !this.video.muted;
        this.volumeSlider.value = "0";
    };
    VideoPlayer.prototype.updateTime = function () {
        this.video.currentTime = parseFloat(this.timeSlider.value);
    };
    VideoPlayer.prototype.syncTimeSlider = function () {
        this.timeSlider.value = this.video.currentTime.toString();
    };
    VideoPlayer.prototype.updateVolume = function () {
        this.video.volume = parseFloat(this.volumeSlider.value);
    };
    VideoPlayer.prototype.skip = function (seconds) {
        this.video.currentTime += seconds;
        if (this.video.currentTime < 0) {
            this.video.currentTime = 0;
        }
        else if (this.video.currentTime > this.video.duration) {
            this.video.currentTime = this.video.duration;
        }
    };
    return VideoPlayer;
}());
// Example usage:
var videoPlayer = new VideoPlayer('C:/Users/COMPU MARTS/Desktop/type_script/video_player_project/video.mp4');
exports.default = VideoPlayer;
