// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const date = new Date();
  const gap = xmasDay - date;
  const day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  const hours = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.ceil((gap % (1000 * 60)) / 1000);
  timerTitle.innerText = `${day}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

const timerContainer = document.querySelector(".js-timer"),
  timerTitle = timerContainer.querySelector("h2");

function init() {
  getTime();
  setInterval(getTime, 1000);
}
