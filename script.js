const video = document.getElementById("video");
const play = document.getElementById("play");
const toggleIcon = document.getElementById("toggleIcon");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updatePlayIcon = () => {
  if (video.paused) {
    toggleIcon.classList.remove("fa-pause");
    toggleIcon.classList.add("fa-play");
  } else {
    toggleIcon.classList.remove("fa-play");
    toggleIcon.classList.add("fa-pause");
  }
};

const updateProgress = () => {
  return true;
};

const setVideoProgress = () => {
  return true;
};

const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
