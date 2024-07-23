import { loadProjects } from "./storage.js";

export function updateActiveCategory(category) {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.querySelectorAll(".category-item").forEach((item) => {
      item.classList.remove("active");
      if (item.querySelector("p").textContent.trim() === category) {
        item.classList.add("active");
      }
    });
  }
}

export function refreshCategories(todoController) {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  const categories = ["Home", "Today", "Upcoming", ...getProjectCategories()];

  // Remove old event listeners
  sidebar.querySelectorAll(".category-item").forEach((item) => {
    const newItem = item.cloneNode(true);
    if (item.parentNode) {
      item.parentNode.replaceChild(newItem, item);
    }
  });

  // Add new event listeners
  addCategoryEventListeners(
    sidebar,
    categories,
    todoController,
    (newCategory) => {
      todoController.setCategory(newCategory);
    },
  );

  // Update active category
  const currentCategory = todoController.getCategory();
  updateActiveCategory(currentCategory);
}

export function addCategoryEventListeners(
  container,
  categories,
  todoController,
  onCategoryChange,
) {
  container.querySelectorAll(".category-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      const categoryName = e.currentTarget
        .querySelector("p")
        .textContent.trim();
      if (categories.includes(categoryName)) {
        updateActiveCategory(categoryName);
        todoController.renderTodos(categoryName);
        todoController.updateTaskCount();
        if (onCategoryChange) {
          onCategoryChange(categoryName);
        }
      }
    });
  });
}

function getProjectCategories() {
  const projects = loadProjects();
  const defaultProjects = ["Work", "Fitness", "Grocery"];
  return [...new Set([...defaultProjects, ...projects.map((p) => p.name)])];
}
