
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskClick);
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function handleTaskClick(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    } else {
        e.target.classList.toggle('completed');
    }
}
