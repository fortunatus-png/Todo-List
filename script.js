const addBtn = document.getElementById("btn-add");
const clearBtn = document.getElementById("btn-clear");
const tasks = document.getElementById("tasks");
const input = document.getElementById("input");

document.addEventListener('DOMContentLoaded', () => {
    const taskArray = getTasks();
    taskArray.forEach(task => {
        renderTask(task);
    });
});

const addTask = () => {
    if(input.value.trim() !== "") {
        const taskArray = getTasks();      
        const done = false;
        const text = input.value;
        const taskObj = {done, text};
        renderTask(taskObj);
        
        taskArray.push(taskObj);
        localStorage.setItem("tasks", JSON.stringify(taskArray));
        
        clearInput();
    }
};

const toggleTaskDoneOrRemove = e => {
    const target = e.target;
    const taskContainer = target.closest(".task-container");
    if(!taskContainer) return;
    const task = taskContainer.querySelector(".task");
    
    const taskArray = getTasks();
    
    if(target.closest(".chbox")) {
        task.classList.toggle("done", target.checked);
        taskArray.forEach(item => {
            if(item.text === task.innerText) {
                item.done = target.checked;
            }
        });
        localStorage.setItem("tasks", JSON.stringify(taskArray));
    } else if(target.closest(".deleteBtn")) {
        const index = taskArray.findIndex(t => t.text === task.innerText);
        taskArray.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(taskArray));
        
        taskContainer.remove();
    }
};


const createCheckBox = () => {
    const checkboxEl = document.createElement("input");
    checkboxEl.classList.add("chbox");
    checkboxEl.setAttribute("type", "checkbox");
    return checkboxEl;
};

const createSpanWithValue = (text) => {
    const spanEl = document.createElement("span");
    spanEl.classList.add("task");
    spanEl.innerText = text;
    return spanEl;
};

const createButtonWithIcon = () => {
    const btnEl = document.createElement("button");
    btnEl.setAttribute("type", "button");
    btnEl.classList.add("deleteBtn", "material-icons");
    btnEl.innerHTML = "&#xe872;";
    return btnEl;
};

const renderTask = ({done, text}) => {
    const newTask = document.createElement("div");
    newTask.classList.add("task-container");

    const checkBox = createCheckBox();
    const spanWithValue = createSpanWithValue(text);
    const deleteBtn = createButtonWithIcon();

    checkBox.checked = done;
    spanWithValue.classList.toggle("done", done);

    newTask.appendChild(checkBox);
    newTask.appendChild(spanWithValue);    
    newTask.appendChild(deleteBtn);

    tasks.appendChild(newTask);
};

const getTasks = () => {
    try {
        const taskArr = JSON.parse(localStorage.getItem("tasks"));
        if(!Array.isArray(taskArr)) {return [];}
        return taskArr;
    } catch(err) {
        return [];
    }
};

const clearInput = () => input.value = "";

addBtn.addEventListener("click", addTask);
tasks.addEventListener("click", toggleTaskDoneOrRemove);
clearBtn.addEventListener("click", () => {
    tasks.textContent = "";
    localStorage.clear();
});