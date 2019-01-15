window.addEventListener("load", init);

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

// To Change Level

const currentLevel = levels.hard;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition"
];

// INITIALIZE GAME
function init() {
  // SHOW NUMBER OF SECONDS IN UI
  seconds.innerHTML = currentLevel;
  console.log("init");
  // LOAD WORD FROM ARRAY
  showWord(words);
  // START MATCHING ON WORD INPUT
  wordInput.addEventListener("input", startMatch);
  // CALL COUNTDOWN EVERY SECOND
  setInterval(countdown, 1000);
  // CHECK GAME STATUS
  setInterval(checkStatus, 50);
}

// START MATCH
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// MATCH CURRENT WORD TO WORDINPUT
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML === "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// PICK & SHOW RANDOM WORD
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  // OUTPUT RANDOM WORD
  currentWord.innerHTML = words[randIndex];
  console.log(randIndex);
}

// COUNTDOWN TIMER
function countdown() {
  // MAKE SURE TIME IS NOT RUN OUT
  if (time > 0) {
    // DECREASE TIME
    time--;
  } else if (time === 0) {
    // GAME IS OVER
    isPlaying = false;
  }
  // SHOW TIME
  timeDisplay.innerHTML = time;
}

// CHECK GAME STATUS
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
