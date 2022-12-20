const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const notificationAudio = document.querySelector(".notification-sound")

const modeEasy = document.querySelector(".easy");
const modeMedium = document.querySelector(".medium");
const modeHard = document.querySelector(".hard");

const playButton = document.querySelector(".play")
const stopButton = document.querySelector(".stop")
const resetButton = document.querySelector(".reset")

let mode = "easy"
let minutesValue = 5
let INITIAL_SECONDS_AMOUNT = 300
let secondsToDecress = INITIAL_SECONDS_AMOUNT;

function easySelected() {
  mode = "easy";
  minutesElement.innerHTML = "05"
  secondsElement.innerHTML = "00"
  clearInterval(timer)
  playButton.removeAttribute('disabled')
  defineTimer()
}
function mediumSelected() {
  mode = "medium";
  minutesElement.innerHTML = "15"
  secondsElement.innerHTML = "00"
  clearInterval(timer)
  playButton.removeAttribute('disabled')
  defineTimer()
}
function hardSelected() {
  mode = "hard"
  minutesElement.innerHTML = "25"
  secondsElement.innerHTML = "00"
  clearInterval(timer)
  playButton.removeAttribute('disabled')
  defineTimer()
}

function convertMinutesToSeconds(minutes) {
  return (
    INITIAL_SECONDS_AMOUNT = minutes * 60,
    secondsToDecress = INITIAL_SECONDS_AMOUNT // Valor de minutos iniciais convertido em segundos
  )
}

function defineTimer() {
  if (mode === "easy") {
    minutesValue = 5
    convertMinutesToSeconds(minutesValue)
  } else if (mode === "medium") {
    minutesValue = 15;
    convertMinutesToSeconds(minutesValue)
  } else if (mode === "hard") {
    minutesValue = 25
    convertMinutesToSeconds(minutesValue)
  }
}

let timer

function startTimer() {
  if (secondsToDecress != 0) {
    timer = setInterval(contdownTimer, 1000)
  } else {
    alert("Choose a mode to start the timer")
  }
  playButton.setAttribute('disabled', true)
}


function contdownTimer() {
  if (secondsToDecress != 0) {
    let minutes = Math.floor(secondsToDecress / 60);
    let seconds = secondsToDecress % 60;
    console.log(secondsToDecress)
    return (
      secondsToDecress = secondsToDecress - 1,
      minutesElement.innerHTML = String(minutes).padStart(2, '0'),
      secondsElement.innerHTML = String(seconds).padStart(2, '0')
    );
  } else if (secondsToDecress <= 0) {
    console.log("acabou os segundos")
    return (
      minutesElement.innerHTML = '00',
      secondsElement.innerHTML = '00',
      clearInterval(timer),
      notificationAudio.play()
    )
  }
}


function pauseTimer() {
  console.log("timer paused")
  playButton.removeAttribute('disabled')
  clearInterval(timer)
}

function stopTimer() {
  console.log("timer stopped")
  playButton.removeAttribute('disabled')
  clearInterval(timer)
  defineTimer()
}

function resetTimer() {
  console.log("timer reseted")
  playButton.removeAttribute('disabled')
  clearInterval(timer)
  defineTimer()
  minutesElement.innerHTML = Math.floor(INITIAL_SECONDS_AMOUNT/60).toString().padStart(2,"0")
  secondsElement.innerHTML = String(INITIAL_SECONDS_AMOUNT % 60).padStart(2, "0")
}
