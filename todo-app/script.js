const form = document.querySelector(".input-section");
const taskInput = document.querySelector(".input-text");
const taskList = document.querySelector(".task-list");
const taskItem = document.querySelector("task-item");
const taskCount = document.querySelector("#taskCount");
const errorMsg = document.querySelector("#errorMsg");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = task.taskCompleted ? "task-item completed" : "task-item";

    const label1 = document.createElement("label1");
    label1.textContent = task.text;
    label1.addEventListener("click", () => toggleTask(task.id));

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "削除";
    button.addEventListener("click", () => deleteTask(task.id));

    li.appendChild(label1);
    li.appendChild(button);
    taskList.appendChild(li);
  });
  taskCount.textContent = `タスク一覧(${tasks.length})件`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = taskInput.value.trim();

  if (text === "") {
    errorMsg.style.display = "block";
    return;
  }

  tasks.push({ id: Date.now(), text: text, taskCompleted: false });
  taskInput.value = "";
  errorMsg.style.display = "none";
  renderTasks();
});

taskInput.addEventListener("input", () => {
  if (taskInput.value.trim() !== "") {
    errorMsg.style.display = "none";
  }
});

function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, taskCompleted: !task.taskCompleted } : task,
  );
  renderTasks();
}

// function deleteTask(id) {
//   tasks = tasks.filter((task) => task.id !== id);
//   renderTasks();
// }

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

renderTasks;

// function renderTask() {
//   taskList.innerHTML = "";

//   tasks.forEach((task) => {
//     const li = document.createElement("li");
//     li.className = task.taskCompleted ? "task-item completed" : "task-item";
//   });
//   const label1 = document.createElement("label1");
//   label1.textContent = task.text;

//   const button = createElement("button");
//   button.type = "button";
//   button.textContent = "削除";
//   button.addEventListener("click", () => {
//     deleteTask(task.id);

//     li.appendChild(label1);
//     li.appendChild(button);
//     taskList.appendChild(li);
//   });
//   taskCount.textContent = `タスク一覧（${tasks.length} 件）`;
// }

// form.addEventListener("submit", (event) => {
//   const text = taskInput.value.trm();
// });

// function deleteTask(id) {
//   tasks = tasks.filter(tasks, (task) => {
//     task.id !== id;
//   });
// }
