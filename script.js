const addBtn = document.getElementById("btn-add");
const clearBtn = document.getElementById("btn-clear");
const delBtn = document.getElementById("material-icons");
const tasks = document.getElementById("tasks");
const input = document.getElementById("input");


addBtn.addEventListener("click", () => {
    if(input.value !== "") {
        tasks.innerHTML += `<div class="task-container">
            <input type="checkbox" class="chbox">
            <span class="task">${input.value}</span>
            <button class="material-icons">&#xe872;</button></div>`;
        input.value = "";
    }
});