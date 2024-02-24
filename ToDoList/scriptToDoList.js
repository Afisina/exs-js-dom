const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.onclick = function () {
  const newTask = document.querySelector("input[id=taskInput]");
  const newtaskValue = newTask.value;
  const newTaskLi = document.createElement("li");
  const newTaskTxt = document.createTextNode(newtaskValue);

  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  newTaskLi.appendChild(checkbox);
  newTaskLi.appendChild(newTaskTxt);
  alert("task ditambahkan");

  // Create delete button
  const deleteBtn = document.createElement("span");
  const deleteMark = document.createTextNode("x");
  deleteBtn.appendChild(deleteMark);
  deleteBtn.style.color = "red";

  // Wrap both newTaskLi and deleteBtn in a container
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  taskContainer.appendChild(newTaskLi);
  taskContainer.appendChild(deleteBtn);

  // Append the container to the task list
  document.getElementById("taskList").appendChild(taskContainer);

  // Event close button
  deleteBtn.onclick = function (e) {
    e.target.previousElementSibling.style.display = "none";
    e.target.style.display = "none";
  };

  // Event checked
  checkbox.onclick = function () {
    newTaskLi.classList.toggle("completed");
  };
};
