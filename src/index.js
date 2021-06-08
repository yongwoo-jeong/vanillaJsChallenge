const tasksForm = document.querySelector(".tasksForm"),
  tasksInput = tasksForm.querySelector("input"),
  taskList = document.querySelector(".pending"),
  doneList = document.querySelector(".finished");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let taskArray = [];
let finishedArray = [];

function deleteTask(event) {
  const btn = event.target;
  const li = btn.parentNode;
  taskList.removeChild(li);
  const cleanTaskArray = taskArray.filter(function (task) {
    return task.id !== parseInt(li.id);
  });
  taskArray = cleanTaskArray;
  saveTasks();
}

function paintFinished(bringText) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "✖";
  delBtn.addEventListener("click", deleteTask);
  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = "⏮";
  // doneBtn.addEventListener("click", doneTask);
  const span = document.createElement("span");
  const newId = finishedArray.length + 1;

  li.appendChild(bringText);
  li.appendChild(delBtn);
  li.appendChild(doneBtn);
  li.id = newId;
  doneList.appendChild(li);
  const finishObj = {
    text: bringText,
    id: newId,
  };
  finishedArray.push(finishObj);
  saveDones();
}

function doneTask(event) {
  const btn = event.target;
  const nodeLi = btn.parentNode;
  const text = nodeLi.firstChild;
  paintFinished(text);
  deleteTask(event);
}

function saveDones() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedArray));
}
function saveTasks() {
  localStorage.setItem(PENDING_LS, JSON.stringify(taskArray));
}

function paintTasks(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "✖";
  delBtn.addEventListener("click", deleteTask);
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "✔";
  doneBtn.addEventListener("click", doneTask);
  const span = document.createElement("span");
  const newId = taskArray.length + 1;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(doneBtn);
  li.id = newId;
  taskList.appendChild(li);
  const taskObj = {
    text: text,
    id: newId,
  };
  taskArray.push(taskObj);
  saveTasks();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = tasksInput.value;
  paintTasks(currentValue);
  tasksInput.value = "";
}

function loadTasks() {
  const loadedTasks = localStorage.getItem(PENDING_LS);
  if (loadedTasks !== null) {
    const parsedTasks = JSON.parse(loadedTasks);
    parsedTasks.forEach(function (task) {
      paintTasks(task.text);
    });
  } else {
  }
}

function init() {
  loadTasks();
  tasksForm.addEventListener("submit", handleSubmit);
}

init();
