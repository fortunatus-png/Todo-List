const addBtn = document.getElementById("btn-add");
const clearBtn = document.getElementById("btn-clear");
const tasks = document.getElementById("tasks");
const input = document.getElementById("input");


addBtn.addEventListener("click", () => {
    if(input.value.trim() !== "") {
        let newTask = document.createElement("div");
        newTask.classList.add("task-container");
        newTask.innerHTML = `
            <input type="checkbox" class="chbox">
            <span class="task">${input.value}</span>
            <button class="material-icons">&#xe872;</button>`;
        tasks.appendChild(newTask);
        input.value = "";
    }
});