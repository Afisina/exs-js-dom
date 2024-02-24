const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
  const newTaskInput = document.querySelector("input[id=taskInput]");
  const newTaskValue = newTaskInput.value.trim();

  if (newTaskValue === "") {
    alert("Please enter a task!");
    return;
  }

  const newTaskLi = document.createElement("li");

  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Set task text
  newTaskLi.textContent = newTaskValue;

  // Append checkbox and task text to list item
  newTaskLi.prepend(checkbox);

  // Create delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "x";
  deleteBtn.style.color = "red";

  // Append delete button to list item
  newTaskLi.appendChild(deleteBtn);

  // Append list item to task list
  taskList.appendChild(newTaskLi);

  // Event for delete button
  deleteBtn.addEventListener("click", function (e) {
    newTaskLi.remove();
  });

  // Event for checkbox
  checkbox.addEventListener("click", function () {
    newTaskLi.classList.toggle("completed");
  });

  // Reset input value
  newTaskInput = "";

  alert("Task added successfully");
});
