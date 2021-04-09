// Get access to the todo list elements
let addBtn = document.getElementById('submit');
let taskInput = document.getElementById('taskName');
let list = document.querySelector('.todo-list');
let clearBtn = document.querySelector('#clear');

addBtn.addEventListener('click', function(e) {
    // Preventing page refresh
    e.preventDefault();

    // Creating dom elements for adding and modifying task
    let p = document.createElement('p');
    let adjustDiv = document.createElement('div');
    let toDoItemDiv = document.createElement('div');
    let editIcon = document.createElement('i');
    let deleteIcon = document.createElement('i');
    let confirmIcon = document.createElement('i');

    // Adding selector names for styles
    editIcon.className = 'far fa-edit';
    deleteIcon.className = 'far fa-times-circle';
    confirmIcon.className = 'far fa-check-circle';
    toDoItemDiv.className = 'todo-item';

    // Adding 'title' attribute to the icon to get information about icon
    editIcon.setAttribute('title', 'Edit task name');
    deleteIcon.setAttribute('title', 'Delete task');
    confirmIcon.setAttribute('title', 'Add task to task list');

    // If task field is empty then alerting about it
    if(taskInput.value === '') {
        alert('Please enter task name');
        return;
    }
    
    // Creating task element with task name, which will be editable,
    // and icons which add, delete and edit task
    p.textContent = taskInput.value;
    adjustDiv.append(confirmIcon, editIcon, deleteIcon);
    adjustDiv.classList.add('adjust');
    toDoItemDiv.append(p, adjustDiv);
    list.append(toDoItemDiv);
    taskInput.value = '';
    p.setAttribute('contenteditable', false);
            
    // Clicking edit icon, we add paddings and borders around paragraph text and
    // making it editable setting attribute 'contenteditable' up to value 'true'
    editIcon.addEventListener('click', function() {
        p.setAttribute('contenteditable', true);
        p.style.padding = '5px';
        p.style.border = '1px solid red';
        p.focus();
    });

    // Get access to tasks list and create delete icon for it
    let tasks = document.querySelector('.tasks');
    let taskDeleteIcon = document.createElement('i');
    let tasksItemDiv = document.createElement('div');
    let taskPrg = document.createElement('p');
           
    // Clicking to confirm icon we add  task to tasks list at the bottom
    confirmIcon.addEventListener('click', function() {
        // Changing confirm icon style to the 'solid' and 'green'
        confirmIcon.className = "fas fa-check-circle";
        confirmIcon.style.color = "#0f0";

        // Disable paragraph editing and removing borders around it,
        // leaving only green one on the bottom
        p.setAttribute('contenteditable', false);
        p.style.border = 'none';
        p.style.borderBottom = '3px solid #0f0';

        // Adding task to the tasks list with delete icon and some styles for it
        taskDeleteIcon.className = 'far fa-times-circle';
        tasksItemDiv.classList.add('taskItem')

        taskPrg.textContent = p.textContent;
        
        tasksItemDiv.append(taskPrg, taskDeleteIcon);
        tasks.append(tasksItemDiv);
    });

    
    // Deleting task from non confirmed tasks list
    deleteIcon.addEventListener('click', function() {
        toDoItemDiv.remove();
    });

    // Deleting task from confirmed tasks list
    taskDeleteIcon.addEventListener('click', function() {
        // Deleting task
        tasksItemDiv.remove();

        // Changing non corfirmed task's styles
        // Removing paragraph green border, change confirm icon from solid to the regular icon
        p.style.border = 'none';
        confirmIcon.className = 'far fa-check-circle';
        confirmIcon.style.color = "#8ED3B2";
    });
});

        
// Deleting all non confirmed tasks
clearBtn.addEventListener('click', function() {
    list.innerHTML = '';
});