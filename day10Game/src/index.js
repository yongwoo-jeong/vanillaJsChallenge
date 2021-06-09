const range = document.querySelector(".js-range"),
  userChoose = document.querySelector(".js-userNumber"),
  playButton = document.querySelector(".js-playButton"),
  winOrLose = document.querySelector(".js-winOrLose"),
  h2 = document.querySelector("h2"),
  yourChoice = document.querySelector(".js-yourChoice");

function MachiningNumber() {
  const rangeValue = range.value;
  const min = Math.ceil(10);
  const maxNumber = Math.floor(rangeValue);
  const machinPick = Math.floor(Math.random() * (maxNumber - min + 1)) + min;
  return machinPick;
}

function renameChoice() {
  let machineNumber = MachiningNumber();
  const userNumber = Number(userChoose.value);
  yourChoice.innerText = `You chose: ${userNumber}, the machine chose: ${machineNumber}.`;
}

function compareNumber() {
  let machineNumber = MachiningNumber();
  let userNumber = Number(userChoose.value);
  if (machineNumber == userNumber) {
    winOrLose.innerText = "You Win!";
  } else {
    winOrLose.innerText = "You Lose!";
  }
  renameChoice();
}

function renameRange() {
  const rangeValue = range.value;
  h2.innerText = `Generate a number between 0 and ${rangeValue}`;
}

function init() {
  playButton.addEventListener("click", compareNumber);
  range.addEventListener("input", renameRange);
}

init();

/*function MachineNumber(max) {
  const min = Math.ceil(10);
  const maxNumber = Math.floor(max);
  const machinPick = Math.floor(Math.random() * (maxNumber - min + 1)) + min;
  return machinPick;
}

function popRandom() {
  const rangeValue = range.value;
  const machinePickNumber = MachineNumber(rangeValue);
  return machinePickNumber;
}

function init() {
  range.addEventListener("input", popRandom);
}

init();*/
