// controller/todoController.js
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../services/todoService.js";
import { renderTodoList } from "../components/todoList.js";

export const initTodoController = (initalCategory) => {
  let category = initalCategory;
  const main = document.getElementById("main");
  const todoModal = document.getElementById("todo-modal");
  const form = document.getElementById("todo-form");
  const formHeader = todoModal.querySelector("h2");
  const closeButton = todoModal.querySelector(".modal-close");

  // Update task count
  const updateTaskCount = () => {
    const categories = ["Home", "Today", "Upcoming", ...getProjectCategories()];
    categories.forEach((cat) => {
      const todos = getTodos(cat);
      const count = todos.length;
      const categoryItems = document.querySelectorAll(".category-item");
      categoryItems.forEach((item) => {
        const categoryName = item.querySelector("p").textContent.trim();
        if (categoryName === cat) {
          const countElement = item.querySelector(".task-count");
          if (countElement) {
            countElement.textContent = count;
          }
        }
      });
    });
  };

  // Helper function to get project categories
  const getProjectCategories = () => {
    const projectItems = document.querySelectorAll(
      "#project-list .category-item",
    );
    return Array.from(projectItems).map((item) =>
      item.querySelector("p").textContent.trim(),
    );
  };

  const setCategory = (newCategory) => {
    category = newCategory;
  };

  // Controller functions
  const renderTodos = (category) => {
    const todos = getTodos(category);
    renderTodoList(todos, category, onToggleTodo, onEditTodo, onDeleteTodo);
  };

  const onAddTask = () => {
    todoModal.style.display = "block";
    form.reset();
  };

  const onToggleTodo = (todoId, isCompleted) => {
    updateTodo(category, todoId, { completed: isCompleted });
  };

  const onEditTodo = (todoId) => {
    const todos = getTodos(category);
    const todo = todos.find((t) => t.id === todoId);
    formHeader.textContent = "Edit Task";
    form.title.value = todo.title;
    form.dueDate.value = todo.dueDate;
    form.priority.value = todo.priority;
    todoModal.style.display = "block";
    form.onsubmit = (e) => handleFormSubmit(e, todoId);
  };

  const onDeleteTodo = (todoId) => {
    deleteTodo(category, todoId);
    renderTodos(category);
    updateTaskCount();
  };

  const handleFormSubmit = (e, todoId = null) => {
    e.preventDefault();
    const todoData = {
      title: form.title.value,
      dueDate: form.dueDate.value,
      priority: form.priority.value,
    };
    if (todoId) {
      updateTodo(category, todoId, todoData);
    } else {
      addTodo(category, todoData);
      onAddTask();
    }
    todoModal.style.display = "none";
    updateTaskCount();
    renderTodos(category);
  };

  closeButton.addEventListener("click", () => {
    todoModal.style.display = "none";
  });

  // Set up event listeners
  form.onsubmit = handleFormSubmit;

  // Initial render
  renderTodos(category);

  // Return public methods if needed
  return {
    onAddTask,
    renderTodos,
    updateTaskCount,
    getCategory: () => category,
    setCategory,
  };
};
