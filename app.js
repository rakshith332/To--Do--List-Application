const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// we can  Add a new task by:
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value;

  if (taskText) {
    // To Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // To Add a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      li.remove(); // To Remove the task
    });

    //we can  Append the delete button and task to the list
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // we can Clear the input field
    taskInput.value = "";
  }
});
