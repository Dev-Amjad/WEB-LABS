document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.getElementById('todo-list');
    const addTaskForm = document.getElementById('add-task-form');
    const newTaskInput = document.getElementById('new-task-input');

    addTaskForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const taskText = newTaskInput.value.trim(); 

        if (taskText !== '') {
            addTask(taskText); 
            newTaskInput.value = ''; 
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText; 
        todoList.appendChild(li);
    }
});
