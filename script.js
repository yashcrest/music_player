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
const songs = [
  "tune_1",
  "tune_2",
  "tune_3",
  "tune_4",
  "tune_5",
  "tune_6",
  "tune_7",
];

// keeping track of songs
let songIndex = 0;

// initially load songs into DOM
loadSong(songs[songIndex]);

//update songs details
function loadSong(song) {
  songTitlte.innerText = song;
  audio.src = `tunes_sample/${song}.wav`;
  albumnArt.src = `images/${song}.jpg`;
}

// play song
function playSong() {
  musicPlayerBody.classList.add("play");
  playBtn.querySelector("i.fa-solid").classList.remove("fa-play");
  playBtn.querySelector("i.fa-solid").classList.add("fa-pause");

  audio.play();
}

//pause song
function pauseSong() { 
  musicPlayerBody.classList.remove("play");
  playBtn.querySelector("i.fa-solid").classList.add("fa-play");
  playBtn.querySelector("i.fa-solid").classList.remove("fa-pause");

  audio.pause();
}

//next song
function prevSong() {
    songIndex -- ; 
    
    //checking if the song index goes to smaller than the array size
    if(songIndex < 0 ) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex]);
    
    playSong();
}

//prev song
function nextSong() {
    songIndex ++ ;

    // checking if songIndex is greater than the actual size of array
    if(songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex]);

    playSong();
}


//update progress bar
function updateProgress(e) {
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

//setting the progress bar
function setProgress(e) {
  const width = this.clientWidth; // this will give you a number in pixels of the client width.
  // console.log(width);
  const clickX = e.offsetX;
  const duration = audio.duration; // total duration of song
  audio.currentTime = (clickX / width) * duration;
}



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

// change songs listener
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click' , nextSong);


//update song progress bar
audio.addEventListener('timeupdate' , updateProgress);

//click on progress bar
progressContainer.addEventListener('click', setProgress);