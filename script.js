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
            <button class="material-icons deleteBtn" type="button">&#xe872;</button>`;
        tasks.appendChild(newTask);
        input.value = "";
    }
});

tasks.addEventListener("click", (e) => {
    const target = e.target;
    const taskContainer = target.closest(".task-container");
    if(!taskContainer) return;
    const task = taskContainer.querySelector(".task");
    const chbox = taskContainer.querySelector(".chbox");
    const btn = taskContainer.querySelector(".deleteBtn");
    
    if(target === "checkbox") {
        task.classList.toggle("done", chbox.checked);
    }

    if(target === btn) {
        taskContainer.remove();
    }
});

clearBtn.addEventListener("click", () => {
    tasks.textContent = "";
});