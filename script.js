const musicPlayerBody = document.querySelector(".music-player-body");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const songTitlte = document.querySelector("#song-title");
const albumnArt = document.querySelector("#albumn-art");

//songs list

// play song
function playSong() {
  musicPlayerBody.classList.add("play");
  playBtn.querySelector("i.fa-solid").classList.remove("fa-play");
  playBtn.querySelector("i.fa-solid").classList.add("fa-pause");
}

//pause song
function pauseSong() {
  musicPlayerBody.classList.remove("play");
  playBtn.querySelector("i.fa-solid").classList.add("fa-play");
  playBtn.querySelector("i.fa-solid").classList.remove("fa-pause");
}

//next song
function prevBtn() {}

//prev song
function nextBtn() {}

//event listener
playBtn.addEventListener("click", () => {
  // getting to see, if the music is playing or paused
  const isPlaying = musicPlayerBody.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
