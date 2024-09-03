document.querySelector("addBtn").addEventListener("click", add);

function addT() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.Value.trim();

  if (taskText != "") {
    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    taskItem.innerHtml = `${taskText} <button class = 'delete-btn'>Delete</button>`;
    taskItem.querySelector("delete-btn").addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });
  }

  taskItem.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  taskList.appendChild(taskItem);
  taskInput.value = "";
}
