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

const toggleTaskDone = e => {
    const target = e.target;
    if(target.type !== "checkbox") return;
    
    const task = target.closest(".task");
    task.classList.toggle("done", target.checked);
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
    btnEl.classList.add("material-icons");
    btnEl.setAttribute("type", "button");
    btnEl.innerHTML = "&#xe872;";
    return btnEl;
};

const clearInput = () => input.value = "";

addBtn.addEventListener("click", addTask);
tasks.addEventListener("click", toggleTaskDone);