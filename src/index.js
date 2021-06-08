const tasksForm = document.querySelector(".tasksForm"),
  tasksInput = tasksForm.querySelector("input"),
  taskList = document.querySelector(".pending");

const PENDING_LS = "PENDING";

const taskArray = [];

function deleteTask(event) {}

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
