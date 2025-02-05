class VideoPlayer {
  private video: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private pauseButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  private muteButton: HTMLButtonElement;
  private timeSlider: HTMLInputElement;
  private volumeSlider: HTMLInputElement;
  private skipButton: HTMLButtonElement;
  private backButton: HTMLButtonElement;

  constructor(videoSrc: string) {
    this.video = document.querySelector("video") as HTMLVideoElement;
    this.video.src = videoSrc;
    this.playButton = document.querySelector("#play") as HTMLButtonElement;
    this.pauseButton = document.querySelector("#pause") as HTMLButtonElement;
    this.stopButton = document.querySelector("#stop") as HTMLButtonElement;
    this.muteButton = document.querySelector("#mute") as HTMLButtonElement;
    this.timeSlider = document.querySelector(".time") as HTMLInputElement;
    this.volumeSlider = document.querySelector(".sound") as HTMLInputElement;
    this.skipButton = document.querySelector("#skip") as HTMLButtonElement;
    this.backButton = document.querySelector("#back") as HTMLButtonElement;

    this.initialize();
  }

  private initialize(): void {
    window.addEventListener("load", () => this.setupTimeSlider());
    this.playButton.addEventListener("click", () => this.play());
    this.pauseButton.addEventListener("click", () => this.pause());
    this.stopButton.addEventListener("click", () => this.stop());
    this.muteButton.addEventListener("click", () => this.toggleMute());
    this.timeSlider.addEventListener("input", () => this.updateTime());
    this.video.addEventListener("timeupdate", () => this.syncTimeSlider());
    this.volumeSlider.addEventListener("input", () => this.updateVolume());
    this.skipButton.addEventListener("click", () => this.skip(2));
    this.backButton.addEventListener("click", () => this.skip(-2));
  }

  private setupTimeSlider(): void {
    if (this.timeSlider) {
      this.timeSlider.value = "0";
      this.timeSlider.max = this.video.duration.toString();
    }
  }

  private play(): void {
    this.video.play();
  }

  private pause(): void {
    this.video.pause();
  }

  private stop(): void {
    this.video.load();
    this.video.pause();
  }

  private toggleMute(): void {
    this.video.muted = !this.video.muted;
    this.volumeSlider.value = "0";
  }

  private updateTime(): void {
    this.video.currentTime = parseFloat(this.timeSlider.value);
  }

  private syncTimeSlider(): void {
    this.timeSlider.value = this.video.currentTime.toString();
  }

  private updateVolume(): void {
    this.video.volume = parseFloat(this.volumeSlider.value);
  }

  private skip(seconds: number): void {
    this.video.currentTime += seconds;
    if (this.video.currentTime < 0) {
      this.video.currentTime = 0;
    } else if (this.video.currentTime > this.video.duration) {
      this.video.currentTime = this.video.duration;
    }
  }
}

// Example usage:
const videoPlayer = new VideoPlayer('C:/Users/COMPU MARTS/Desktop/type_script/video_player_project/video.mp4');
export default VideoPlayer;