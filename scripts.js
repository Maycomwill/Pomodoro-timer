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
let INITIAL_SECONDS_AMOUNT = 300 // 5 minutes * 60 = 300 seconds
let secondsToDecress = INITIAL_SECONDS_AMOUNT;

function selectMode(mode) {
  console.log(mode)
  if (mode === 'easy') {
    return (
      mode = "easy",
      minutesElement.innerHTML = "05",
      secondsElement.innerHTML = "00",
      clearInterval(timer),
      playButton.removeAttribute('disabled'),
      defineMode()
    )
  } else if (mode === 'medium') {
    return (
      mode = "medium",
      minutesElement.innerHTML = "15",
      secondsElement.innerHTML = "00",
      clearInterval(timer),
      playButton.removeAttribute('disabled'),
      defineMode()
    )
  } else if (mode === 'hard') {
    return (
      mode = "hard",
      minutesElement.innerHTML = "25",
      secondsElement.innerHTML = "00",
      clearInterval(timer),
      playButton.removeAttribute('disabled'),
      defineMode()
    )
  }
}

function convertMinutesToSeconds(minutes) {
  return (
    INITIAL_SECONDS_AMOUNT = minutes * 60,
    secondsToDecress = INITIAL_SECONDS_AMOUNT // Valor de minutos iniciais convertido em segundos
  )
}

function defineMode() {
  if (mode === "easy") {
    convertMinutesToSeconds(5)
  } else if (mode === "medium") {
    convertMinutesToSeconds(15)
  } else if (mode === "hard") {
    convertMinutesToSeconds(25)
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
  defineMode()
}

function resetTimer() {
  console.log("timer reseted")
  playButton.removeAttribute('disabled')
  clearInterval(timer)
  defineMode()
  minutesElement.innerHTML = Math.floor(INITIAL_SECONDS_AMOUNT / 60).toString().padStart(2, "0")
  secondsElement.innerHTML = String(INITIAL_SECONDS_AMOUNT % 60).padStart(2, "0")
}
