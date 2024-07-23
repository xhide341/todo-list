// components/TodoItem.js
import "../style.css";
import deleteIcon from "../icons/delete.svg";
import editIcon from "../icons/edit.svg";

export const renderTodoItem = (todo, onToggle, onEdit, onDelete) => {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("todo-container");
  itemContainer.dataset.id = todo.id; // Set the todo ID as a data attribute

  const toDoItem = document.createElement("div");
  toDoItem.classList.add("todo-item");

  // Checkbox
  const toDoCheckbox = document.createElement("input");
  toDoCheckbox.type = "checkbox";
  toDoCheckbox.classList.add("todo-checkbox");
  toDoCheckbox.checked = todo.completed || false;
  toDoCheckbox.addEventListener("change", () => {
    onToggle(todo.id, toDoCheckbox.checked);
    updateCompletedStyle(toDoCheckbox.checked, toDoTitle, toDoDueDate);
  });

  // Label container
  const toDoLabel = document.createElement("div");
  toDoLabel.classList.add("todo-label");

  // Title
  const toDoTitle = document.createElement("h5");
  toDoTitle.classList.add("todo-title");
  toDoTitle.textContent = todo.title;

  // Due date
  const toDoDueDate = document.createElement("p");
  toDoDueDate.classList.add("todo-due-date");
  toDoDueDate.textContent = todo.dueDate;

  // Set initial completed style
  updateCompletedStyle(todo.completed, toDoTitle, toDoDueDate);

  // Priority indicator
  const priorityColor = getPriorityColor(todo.priority);
  itemContainer.style.borderLeft = `5px solid ${priorityColor}`;

  // Action icons container
  const actionIcons = document.createElement("div");
  actionIcons.classList.add("action-icons");

  // Edit icon
  const toDoEdit = document.createElement("img");
  toDoEdit.src = editIcon;
  toDoEdit.alt = "edit";
  toDoEdit.classList.add("todo-edit");
  toDoEdit.addEventListener("click", () => onEdit(todo.id));

  // Delete icon
  const toDoDelete = document.createElement("img");
  toDoDelete.src = deleteIcon;
  toDoDelete.alt = "delete";
  toDoDelete.classList.add("todo-delete");
  toDoDelete.addEventListener("click", () => onDelete(todo.id));

  toDoLabel.appendChild(toDoTitle);
  toDoLabel.appendChild(toDoDueDate);

  actionIcons.appendChild(toDoEdit);
  actionIcons.appendChild(toDoDelete);

  toDoItem.appendChild(toDoCheckbox);
  toDoItem.appendChild(toDoLabel);
  toDoItem.appendChild(actionIcons);

  itemContainer.appendChild(toDoItem);

  return itemContainer;
};

// Helper function to get color based on priority
const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case "high":
      return "#ff4d4d";
    case "medium":
      return "#ffa500";
    case "low":
      return "#4caf50";
    default:
      return "#808080";
  }
};

// Helper function to update completed style
const updateCompletedStyle = (isCompleted, titleElement, dateElement) => {
  if (isCompleted) {
    titleElement.classList.add("completed");
    dateElement.classList.add("completed");
  } else {
    titleElement.classList.remove("completed");
    dateElement.classList.remove("completed");
  }
};
