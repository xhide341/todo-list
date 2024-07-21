import '../style.css';
import deleteIcon from '../icons/delete.svg';
import editIcon from '../icons/edit.svg';

const renderTodo = () => {
    const main = document.getElementById('main');
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('todo-container');

    const toDoItem = document.createElement('div');
    toDoItem.classList.add('todo-item');

    // todo item components
    const toDoCheckbox = document.createElement('input');
    toDoCheckbox.type = 'checkbox';
    // toDoCheckbox.id = `todo-checkbox-${Date.now()}`; // Unique ID
    toDoCheckbox.classList.add('todo-checkbox');

    const toDoLabel = document.createElement('div');
    toDoLabel.classList.add('todo-label');

    const toDoTitle = document.createElement('h5');
    toDoTitle.classList.add('todo-title');
    toDoTitle.innerText = 'Buy milk';

    const toDoDescription = document.createElement('p');
    toDoDescription.classList.add('todo-description');
    toDoDescription.innerText = 'Milk is the best';

    const toDoDueDate = document.createElement('p');
    toDoDueDate.classList.add('todo-due-date');
    toDoDueDate.innerText = '2023-01-01';

    const toDoPriority = document.createElement('div');
    toDoPriority.classList.add('priority-color');

    // add action icons
    const toDoDelete = document.createElement('img');
    toDoDelete.src = deleteIcon;
    toDoDelete.alt = 'delete';
    toDoDelete.classList.add('todo-delete');
    const toDoEdit = document.createElement('img');
    toDoEdit.src = editIcon;
    toDoEdit.alt = 'edit';
    toDoEdit.classList.add('todo-edit');
    const actionIcons = document.createElement('div');
    actionIcons.classList.add('action-icons');

    // add divider
    const divider = document.createElement('div');
    divider.classList.add('divider');

    actionIcons.appendChild(toDoEdit);
    actionIcons.appendChild(toDoDelete);

    toDoLabel.appendChild(toDoTitle);
    toDoLabel.appendChild(toDoDueDate);

    toDoItem.appendChild(toDoCheckbox);
    toDoItem.appendChild(toDoLabel);
    // toDoItem.appendChild(toDoDescription);
    toDoItem.appendChild(toDoPriority);
    toDoItem.appendChild(actionIcons);

    itemContainer.appendChild(toDoItem);
    
    main.appendChild(itemContainer);
};

export default renderTodo;