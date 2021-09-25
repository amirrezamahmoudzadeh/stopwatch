const timer = document.querySelector(".time"),
  startBtn = document.querySelector("#start"),
  stopBtn = document.querySelector("#stop"),
  resettBtn = document.querySelector("#reset");


let running = false;

function timeTostring(time) {
  let floatHours = time / 3600000;
  let hours = Math.floor(floatHours);

  let floatMinutes = (floatHours - hours) * 60;
  let minutes = Math.floor(floatMinutes);

  let floatSeconds = (floatMinutes - minutes) * 60;
  let seconds = Math.floor(floatSeconds);

  let floatMiliseconds = (floatSeconds - seconds) * 100;
  let miliseconds = Math.floor(floatMiliseconds);

  let formatMinutes = minutes.toString().padStart(2, "0");
  let formatSeconds = seconds.toString().padStart(2, "0");
  let formatMiliseconds = miliseconds.toString().padStart(2, "0");

  return `${formatMinutes}:${formatSeconds}:${formatMiliseconds}`;
}

let eplased = 0,
  startTime,
  timerInterval;

function start() {
  if (!running) {
    running = true;
    startTime = new Date() - eplased;
    timerInterval = setInterval(function printTime() {
      eplased = new Date() - startTime;
      timer.innerHTML = timeTostring(eplased);
    }, 10);
  }
}

function stopTime() {
  if (running) {
    running = false;
    clearInterval(timerInterval);
  }
}

function reset() {
  running = false
  clearInterval(timerInterval);
  timer.innerHTML = "00:00:00";
  eplased = 0;
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stopTime);
resettBtn.addEventListener("click", reset);
