import flatpickr from 'https://cdn.jsdelivr.net/npm/flatpickr';
import iziToast from 'https://cdn.jsdelivr.net/npm/izitoast/dist/js/iziToast.min.js';

const datetimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]');

let timerInterval = null;
let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);

startButton.addEventListener('click', () => {
  if (userSelectedDate && userSelectedDate > new Date()) {
    startTimer();
    startButton.disabled = true;
    datetimePicker.disabled = true;
  }
});

function startTimer() {
  timerInterval = setInterval(() => {
    const now = new Date();
    const timeRemaining = userSelectedDate - now;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      updateTimerDisplay(0, 0, 0, 0);
      datetimePicker.disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeRemaining);
    updateTimerDisplay(days, hours, minutes, seconds);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerDisplay(days, hours, minutes, seconds) {
  daysField.textContent = addLeadingZero(days);
  hoursField.textContent = addLeadingZero(hours);
  minutesField.textContent = addLeadingZero(minutes);
  secondsField.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
