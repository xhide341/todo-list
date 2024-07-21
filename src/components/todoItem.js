// components/TodoItem.js
import "../style.css";
import deleteIcon from '../icons/delete.svg';
import editIcon from '../icons/edit.svg';

export const renderTodoItem = (todo) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('todo-container');
    itemContainer.dataset.id = todo.id;

    const toDoItem = document.createElement('div');
    toDoItem.classList.add('todo-item');

    // Checkbox
    const toDoCheckbox = document.createElement('input');
    toDoCheckbox.type = 'checkbox';
    toDoCheckbox.classList.add('todo-checkbox');
    toDoCheckbox.checked = todo.completed || false;

    // Label container
    const toDoLabel = document.createElement('div');
    toDoLabel.classList.add('todo-label');

    // Title
    const toDoTitle = document.createElement('h5');
    toDoTitle.classList.add('todo-title');
    toDoTitle.textContent = todo.title;

    // Due date
    const toDoDueDate = document.createElement('p');
    toDoDueDate.classList.add('todo-due-date');
    toDoDueDate.textContent = todo.dueDate;

    // Priority indicator
    const toDoPriority = document.createElement('div');
    toDoPriority.classList.add('priority-color');
    toDoPriority.attributeStyleMap.set('style', `border-right: 2px solid ${getPriorityColor(todo.priority)};`);

    // Action icons container
    const actionIcons = document.createElement('div');
    actionIcons.classList.add('action-icons');

    // Edit icon
    const toDoEdit = document.createElement('img');
    toDoEdit.src = editIcon;
    toDoEdit.alt = 'edit';
    toDoEdit.classList.add('todo-edit');

    // Delete icon
    const toDoDelete = document.createElement('img');
    toDoDelete.src = deleteIcon;
    toDoDelete.alt = 'delete';
    toDoDelete.classList.add('todo-delete');


    toDoLabel.appendChild(toDoTitle);
    toDoLabel.appendChild(toDoDueDate);

    actionIcons.appendChild(toDoEdit);
    actionIcons.appendChild(toDoDelete);

    toDoItem.appendChild(toDoCheckbox);
    toDoItem.appendChild(toDoLabel);
    toDoItem.appendChild(toDoPriority);
    toDoItem.appendChild(actionIcons);

    itemContainer.appendChild(toDoItem);

    itemContainer.querySelector('.todo-checkbox').addEventListener('change', () => onToggle(todo.id));
    itemContainer.querySelector('.todo-edit').addEventListener('click', () => onEdit(todo.id));
    itemContainer.querySelector('.todo-delete').addEventListener('click', () => onDelete(todo.id));

    return itemContainer;
};

export const renderAddTaskButton = (onAddTask) => {
    const button = document.createElement('button');
    button.textContent = 'Add Task';
    button.classList.add('add-task-button');
    button.addEventListener('click', onAddTask);
    return button;
};

// Helper function to get color based on priority
const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
        case 'high':
            return '#ff4d4d';
        case 'medium':
            return '#ffa500';
        case 'low':
            return '#4caf50';
        default:
            return '#808080';
    }
};