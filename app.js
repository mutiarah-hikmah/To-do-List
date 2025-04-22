let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("task-list");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${task}
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Hapus</button>
      </li>
    `;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("task-input");
  const value = input.value.trim();
  if (value) {
    tasks.push(value);
    input.value = "";
    renderTasks();
  }
}

function editTask(index) {
  const newTask = prompt("Edit tugas:", tasks[index]);
  if (newTask !== null) {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  if (confirm("Yakin hapus tugas ini?")) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

renderTasks();
