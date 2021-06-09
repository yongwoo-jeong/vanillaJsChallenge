const tasksForm = document.querySelector(".tasksForm"),
  tasksInput = tasksForm.querySelector("input"),
  pendingList = document.querySelector(".pending"),
  finishedList = document.querySelector(".finished");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";
const SPAN_LS = "span";

let taskArray = [];
let finishedArray = [];

function deleteTask(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanTaskArray = taskArray.filter(function (task) {
    return task.id !== parseInt(li.id);
  });
  taskArray = cleanTaskArray;
  saveTasks();
}

function deleteTaskV2(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);
  const cleanDoneArray = finishedArray.filter(function (task) {
    return task.id !== parseInt(li.id);
  });
  finishedArray = cleanDoneArray;
  saveDones();
}

function doneTask(event) {
  const btn = event.target;
  const nodeLi = btn.parentNode;
  const text = nodeLi.firstChild;
  const textString = text.innerText;
  const getId = nodeLi.id;
  paintFinished(textString, getId);
  deleteTask(event);
}

function beforeTask(event) {
  const btn = event.target;
  const nodeLi = btn.parentNode;
  const text = nodeLi.firstChild;
  const textString = text.innerText;
  const getId = nodeLi.id;
  paintPending(textString, getId);
  deleteTaskV2(event);
}

function saveDones() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedArray));
}
function saveTasks() {
  localStorage.setItem(PENDING_LS, JSON.stringify(taskArray));
}

function paintPending(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "✖";
  delBtn.addEventListener("click", deleteTask);
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "✔";
  doneBtn.addEventListener("click", doneTask);
  const span = document.createElement("span");
  const newId = Math.floor(Math.random() * 10000000);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(doneBtn);
  li.id = newId;
  pendingList.appendChild(li);
  const taskObj = {
    id: newId,
    text: text,
  };
  taskArray.push(taskObj);
  console.log(taskObj);

  saveTasks();
}

function paintFinished(bringText, getId) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "✖";
  delBtn.addEventListener("click", deleteTaskV2);
  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = "⏮";
  doneBtn.addEventListener("click", beforeTask);
  const newId = Number(getId);
  const span = document.createElement("span");
  span.innerText = bringText;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(doneBtn);
  li.id = newId;
  finishedList.appendChild(li);
  const finishObj = {
    id: newId,
    text: bringText,
  };
  finishedArray.push(finishObj);
  console.log(finishObj);
  saveDones();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = tasksInput.value;
  paintPending(currentValue);
  tasksInput.value = "";
}

function loadFinished() {
  const loadedFinished = localStorage.getItem(FINISHED_LS);
  if (loadedFinished !== null) {
    const parsedFinished = JSON.parse(loadedFinished);
    parsedFinished.forEach(function (task) {
      paintFinished(task.text, task.id);
    });
  }
}

function loadPending() {
  const loadedPending = localStorage.getItem(PENDING_LS);
  if (loadedPending !== null) {
    const parsedpending = JSON.parse(loadedPending);
    parsedpending.forEach(function (task) {
      paintPending(task.text);
    });
  } else {
  }
}

function init() {
  loadPending();
  loadFinished();
  tasksForm.addEventListener("submit", handleSubmit);
}

init();
