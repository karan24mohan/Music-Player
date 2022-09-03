let audio = document.querySelector("#audio");
let songName = document.querySelector(".song-name");
let artistName = document.querySelector(".artist-name");
let disk = document.querySelector(".disk");
let seekBar = document.querySelector(".seek-bar");
let currentTime = document.querySelector(".current-time");
let songDuration = document.querySelector(".song-duration");
let prevBtn = document.querySelector(".backward-btn");
let playBtn = document.querySelector(".play-btn");
let nextBtn = document.querySelector(".forward-btn");

//Songs data
const songs = [
  {
    name: "3:59 AM",
    artist: "Divine",
    path: "/Music/Divine.mp3",
    cover: "/Images/Divine.jpg",
  },
  {
    name: "47",
    artist: "Sidhu Moose Wala",
    path: "/Music/47.mp3",
    cover: "/Images/47.jpg",
  },
  {
    name: "Arrogant",
    artist: "AP Dhillon",
    path: "/Music/Arrogant.mp3",
    cover: "/Images/Arrogant.jpg",
  },
  {
    name: "Bad",
    artist: "Sidhu Moose Wala",
    path: "/Music/Bad.mp3",
    cover: "/Images/Bad.jpg",
  },
  {
    name: "Chauffeur",
    artist: "Diljit Dosanjh",
    path: "/Music/Chauffeur.mp3",
    cover: "/Images/Chauffeur.jpg",
  },
  {
    name: "Click That B Kickin It",
    artist: "Karan Aujla",
    path: "/Music/Click That B Kickin It.mp3",
    cover: "/Images/Click That B Kickin It.jpg",
  },
  {
    name: "G Shit",
    artist: "Sidhu Moose Wala",
    path: "/Music/G Shit.mp3",
    cover: "/Images/G Shit.jpg",
  },
  {
    name: "Levels",
    artist: "Sidhu Moose Wala",
    path: "/Music/Levels.mp3",
    cover: "/Images/Levels.jpg",
  },
  {
    name: "Spaceship",
    artist: "AP Dhillon",
    path: "/Music/Spaceship.mp3",
    cover: "/Images/Spaceship.jpg",
  },
];

//Keep track of songs
let songIndex = 0;

//Initially load song info DOM
loadSong(songIndex);

//Update song details
function loadSong(i) {
  let song = songs[i];
  songName.innerHTML = song.name;
  artistName.innerHTML = song.artist;
  audio.src = song.path;
  disk.style.backgroundImage = `url("${song.cover}")`;
  currentTime.innerHTML = "00:00";
  setTimeout(() => {
    seekBar.max = audio.duration;
    songDuration.innerHTML = formatTime(audio.duration);
  }, 300);
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songIndex);
  playSong();
}

function nxtSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songIndex);
  playSong();
}

const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
    min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min} : ${sec}`;
};

//Update Current Time
setInterval(() => {
  currentTime.value = audio.currentTime;
  currentTime.innerHTML = formatTime(audio.currentTime);
}, 100);

//Update Seek Bar
seekBar.addEventListener("change", () => {
  audio.currentTime = seekBar.value;
});

//Event listeners
playBtn.addEventListener("click", () => {
  playBtn.classList.toggle("pause");
  // const isPlaying = playBtn.classList.contains("pause");
  // if (isPlaying) {
  //   pauseSong();
  // } else {
  //   playSong();
  // }
  if (playBtn.classList.contains("pause")) {
    pauseSong();
  } else {
    playSong();
  }
});

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nxtSong);
