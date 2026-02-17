// Selecting elements using DOM
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", function () {

    if (input.value === "") {
        alert("Enter a task!");
        return;
    }

    // create list item
    const li = document.createElement("li");
    li.textContent = input.value;

    // mark completed
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);

    input.value = "";
});
