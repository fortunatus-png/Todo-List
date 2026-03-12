const addBtn = document.getElementById("btn-add");
const clearBtn = document.getElementById("btn-clear");
const tasks = document.getElementById("tasks");
const input = document.getElementById("input");

const addTask = () => {
    if(input.value.trim() !== "") {
        const newTask = document.createElement("div");
        newTask.classList.add("task-container");
    
        newTask.appendChild(createCheckBox());
        newTask.appendChild(createSpanWithValue());    
        newTask.appendChild(createButtonWithIcon());
    
        tasks.appendChild(newTask);
        clearInput();
    }
};

const toggleTaskDoneOrRemove = e => {
    const target = e.target;
    const taskContainer = target.closest(".task-container");
    if(!taskContainer) return;
    const task = taskContainer.querySelector(".task");
    
    if(target.type === "checkbox") {
        task.classList.toggle("done", target.checked);
    }else if(target.classList.contains("deleteBtn")) {
        taskContainer.remove();
    }
};

const createCheckBox = () => {
    const checkboxEl = document.createElement("input");
    checkboxEl.classList.add("chbox");
    checkboxEl.setAttribute("type", "checkbox");
    return checkboxEl;
};

const createSpanWithValue = () => {
    const spanEl = document.createElement("span");
    spanEl.classList.add("task");
    spanEl.innerText = input.value;
    return spanEl;
};

const createButtonWithIcon = () => {
    const btnEl = document.createElement("button");
    btnEl.setAttribute("type", "button");
    btnEl.classList.add("deleteBtn", "material-icons");
    btnEl.innerHTML = "&#xe872;";
    return btnEl;
};

const clearInput = () => input.value = "";

addBtn.addEventListener("click", addTask);
tasks.addEventListener("click", toggleTaskDoneOrRemove);
clearBtn.addEventListener("click", () => tasks.textContent = "");
