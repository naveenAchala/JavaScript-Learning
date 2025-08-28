const tasks = [];

//EventListners
document.querySelector(".js-add-task").addEventListener("click", addTask);
document
  .querySelector(".js-task-input")
  .addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
document.querySelector(".js-remove-task").addEventListener("click", (event) => {
  const taskIndex = event.target.dataset.index;
  removeTask(taskIndex);
});

function addTask() {
  const taskInput = document.querySelector(".js-task-input");
  const taskDate = document.querySelector(".js-task-date");
  const task = taskInput.value;
  const date = taskDate.value;
  tasks.push({ name: task, dueDate: date });
  console.log(tasks);
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  const taskList = document.querySelector(".task-list__items");
  taskList.innerHTML = "";
  let todoListHtml = "";

  tasks.forEach((task, index) => {
    todoListHtml += `
      <div class="input-group task-group">
        <input type="text" class="input block__input" value="${task.name}" readonly />
        <input type="date" class="input input__date" value="${task.dueDate}" readonly />
        <button class="btn btn--accent js-remove-task" data-index="${index}">Remove</button>
      </div>`;
  });
  taskList.innerHTML = todoListHtml;
}

function removeTask(taskIndex) {
  tasks.splice(taskIndex, 1);
  renderTasks();
}
