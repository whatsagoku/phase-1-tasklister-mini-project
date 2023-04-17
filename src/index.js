const createTaskForm = document.querySelector('#create-task-form');
const tasksList = document.querySelector('#tasks');

createTaskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTaskInput = document.querySelector('#new-task-input');
  const taskDescription = newTaskInput.value;
  if (taskDescription.trim() !== '') {
    const newTask = document.createElement('li');

    // Create a div to hold the task description and priority select
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    newTask.appendChild(taskDiv);

    // Create a span to hold the task description text
    const taskDescriptionSpan = document.createElement('span');
    taskDescriptionSpan.className = 'task-description';
    taskDescriptionSpan.textContent = taskDescription + ' 🙂'; // add the smiley face here
    taskDiv.appendChild(taskDescriptionSpan);

    // Create a select element to hold the priority options
    const prioritySelect = document.createElement('select');
    prioritySelect.className = 'priority-select';
    taskDiv.appendChild(prioritySelect);

    // Add priority options to the select element
    const priorityOptions = ['', 'Low', 'Medium', 'High'];
    for (let i = 0; i < priorityOptions.length; i++) {
      const option = document.createElement('option');
      option.value = priorityOptions[i];
      option.textContent = priorityOptions[i];
      prioritySelect.appendChild(option);
    }

    // Create a delete button element
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    newTask.appendChild(deleteButton);
    
    tasksList.appendChild(newTask);
    newTaskInput.value = '';
  }
});

// Add a click event listener to the tasksList that delegates to the delete button
tasksList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) { // Check if the clicked element is a delete button
    const taskItem = event.target.parentElement;
    taskItem.remove();
  }
});