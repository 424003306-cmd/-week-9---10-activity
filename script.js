const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    const task = taskInput.value;

    if (task.trim() === "") {
        alert("Please enter a task");
        return;
    }

    // create li
    const li = document.createElement("li");

    // put text inside li
    li.textContent = task;

    // add li to ul
    taskList.appendChild(li);

    // clear input
    taskInput.value = "";
});
