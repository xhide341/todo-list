// components/TodoList.js

import { renderTodoItem } from "./todoItem.js";

export const renderTodoList = (todos, category, onToggle, onEdit, onDelete) => {
  const main = document.getElementById("main");
  main.innerHTML = ""; // Clear main content

  // Add category title
  const pageTitle = document.createElement("h2");
  pageTitle.textContent = category;
  pageTitle.classList.add("page-title");
  main.appendChild(pageTitle);

  // Create todo list container
  const todoList = document.createElement("div");
  todoList.id = "todo-list";

  todos.forEach((todo) => {
    const todoElement = renderTodoItem(todo, onToggle, onEdit, onDelete);
    todoList.appendChild(todoElement);
  });

  main.appendChild(todoList);
};
