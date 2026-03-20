const addBtn = document.getElementById("btn-add");
const clearBtn = document.getElementById("btn-clear");
const tasks = document.getElementById("tasks");
const input = document.getElementById("input");

const renderTask = ({done, text}) => {
    const newTask = document.createElement("div");
    newTask.classList.add("task-container");

    const checkBox = createCheckBox();
    const spanWithValue = createSpanWithValue();
    const deleteBtn = createButtonWithIcon();

    checkBox.checked = done;
    spanWithValue.textContent = text;
    spanWithValue.classList.toggle("done", done);

    newTask.appendChild(checkBox);
    newTask.appendChild(spanWithValue);    
    newTask.appendChild(deleteBtn);

    tasks.appendChild(newTask);
};

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
        renderTask({done, text});
        
        const taskObj = {done, text};
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

const getTasks = () => {
    try {
        const taskArr = JSON.parse(localStorage.getItem("tasks"));
        if(!Array.isArray(taskArr)) {return [];}
        return taskArr;
    } catch(err) {
        return [];
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
clearBtn.addEventListener("click", () => {
    tasks.textContent = "";
    localStorage.clear();
});