// components/TodoList.js

import { renderTodoItem } from './TodoItem.js';

export const renderTodoList = (todos, onToggle, onEdit, onDelete) => {
    const main = document.getElementById('main');
    main.innerHTML = ''; // Clear main content

    // Add category title
    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = todos.length > 0 ? todos[0].category : 'No tasks';
    main.appendChild(categoryTitle);

    // Create todo list container
    const todoList = document.createElement('div');
    todoList.id = 'todo-list';
    
    todos.forEach(todo => {
        const todoElement = renderTodoItem(todo, onToggle, onEdit, onDelete);
        todoList.appendChild(todoElement);
    });

    main.appendChild(todoList);
};