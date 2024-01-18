// UI elements
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Instances
let seconds, hours, minutes, secondsValue = null

// Functions utils
const showTimerValue = (value) => {
  // "e" проходит в input несмотря на type number
  if (typeof(+value) !== 'number') return
  
  seconds = value % 60;
  hours = Math.floor(value / 60 / 60);
  minutes = Math.floor(value / 60) - (hours * 60);

  let timerValue = hours + ':' + minutes + ':' + seconds;

  timerValue = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':');

  timerEl.innerHTML = timerValue
}

// Functions main
const animateTimer = (value) => {
  const interval = setInterval(function(){
    value -= 1
    if (value <= 0){clearInterval(interval)}
    showTimerValue(value)
  }, 1000)
}

// Event listeners
inputEl.addEventListener('input', e => showTimerValue(e.target.value));

buttonEl.addEventListener('click', () => {
  secondsValue = inputEl.value
  animateTimer(secondsValue);
  inputEl.value = '';
});