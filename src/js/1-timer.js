import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('button[data-start]');
const timerface = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const datetimePicker = document.querySelector('#datetime-picker');
const pickerOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      notifyError();
      startBtn.disabled = true;
      return;
    }
    userSelectedDate = selectedDates[0];
    startBtn.disabled = false;
  },
};

let userSelectedDate = null;
let isActive = false;
let intervalId = null;

flatpickr(datetimePicker, pickerOptions);
initTimer();

startBtn.addEventListener('click', startTimer);

function startTimer() {
  if (isActive) {
    return;
  }

  isActive = true;
  startBtn.disabled = true;
  datetimePicker.disabled = true;
  let deltaTime = userSelectedDate - Date.now();
  updateTimerface(convertMs(deltaTime));

  intervalId = setInterval(() => {
    deltaTime = userSelectedDate - Date.now();

    if (deltaTime <= 0) {
      stopTimer();
      return;
    }

    updateTimerface(convertMs(deltaTime));
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  initTimer();
  isActive = false;
  datetimePicker.disabled = false;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value < 10 ? String(value).padStart(2, '0') : String(value);
}

function updateTimerface({ days, hours, minutes, seconds }) {
  timerface.days.textContent = addLeadingZero(days);
  timerface.hours.textContent = addLeadingZero(hours);
  timerface.minutes.textContent = addLeadingZero(minutes);
  timerface.seconds.textContent = addLeadingZero(seconds);
}

function initTimer() {
  timerface.days.textContent = '00';
  timerface.hours.textContent = '00';
  timerface.minutes.textContent = '00';
  timerface.seconds.textContent = '00';
}

function notifyError() {
  iziToast.show({
    message: 'Please choose a date in the future',
    messageColor: '#FFFFFF',
    backgroundColor: '#ef4040',
    iconColor: '#FFFFFF',
    iconUrl: '../img/icon-error.svg',
    position: 'topRight',
    timeout: 3000,
    closeOnClick: true,
    drag: false,
    pauseOnHover: false,
    close: false,
    progressBar: false,
    animateInside: false,
    transitionIn: 'fadeIn',
    transitionOut: 'fadeOut',
  });
}
