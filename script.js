const addBtn = document.getElementById("btn-add");
const clearBtn = document.getElementById("btn-clear");
const tasks = document.getElementById("tasks");
const input = document.getElementById("input");

const addTask = () => {
    if(input.value.trim() !== "") {
        const newTask = document.createElement("div");
        newTask.classList.add("task-container");
    
        const checkboxEl = document.createElement("input");
        checkboxEl.classList.add("chbox");
        checkboxEl.setAttribute("type", "checkbox");
        newTask.appendChild(checkboxEl);
    
        const spanEl = document.createElement("span");
        spanEl.classList.add("task");
        spanEl.innerText = input.value;
        newTask.appendChild(spanEl);
    
        const btnEl = document.createElement("button");
        btnEl.classList.add("material-icons");
        btnEl.setAttribute("type", "button");
        btnEl.innerHTML = "&#xe872;";
        newTask.appendChild(btnEl);
    
        tasks.appendChild(newTask);
        input.value = "";
    }
};

addBtn.addEventListener("click", addTask);

const toggleTaskDone = e => {
    const target = e.target;
    if(target.type !== "checkbox") return;

    const taskContainer = target.closest(".task-container");
    if(!taskContainer) return;

    const task = taskContainer.querySelector(".task");
    task.classList.toggle("done", target.checked);
};

tasks.addEventListener("click", toggleTaskDone);