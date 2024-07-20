import '../style.css';

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

    const toDoLabel = document.createElement('label');
    toDoLabel.htmlFor = toDoCheckbox.id;
    toDoLabel.classList.add('todo-label');

    const toDoTitle = document.createElement('h5');
    toDoTitle.classList.add('todo-title');
    toDoTitle.innerText = 'Buy milk';

    const toDoDescription = document.createElement('p');
    toDoDescription.classList.add('todo-description');
    toDoDescription.innerText = 'Milk is the best';

    const toDoDueDate = document.createElement('p');
    toDoDueDate.classList.add('todo-due-date');

    const toDoPriority = document.createElement('div');
    toDoPriority.classList.add('priority-color');

    toDoLabel.appendChild(toDoTitle);
    toDoLabel.appendChild(toDoDescription);

    toDoItem.appendChild(toDoCheckbox);
    toDoItem.appendChild(toDoLabel);
    toDoItem.appendChild(toDoDueDate);
    toDoItem.appendChild(toDoPriority);

    itemContainer.appendChild(toDoItem);
    main.appendChild(itemContainer);
};

export default renderTodo;