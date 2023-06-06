// a file to make the code nicer and easier to read


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
  

  function formatTime(time) {
    return String(time).padStart(2, '0');
  }
  
  function addLeadingZero({ days, hours, minutes, seconds }) {
    const formatDays = formatTime(days);
    const formatHours = formatTime(hours);
    const formatMinutes = formatTime(minutes);
    const formatSeconds = formatTime(seconds);
  
    return { formatDays, formatHours, formatMinutes, formatSeconds };
  }

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
  
  export { convertMs, formatTime, addLeadingZero, createPromise };
  