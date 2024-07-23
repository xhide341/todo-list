import { initTodoController } from "./controllers/todoController.js";
import {
  initProjectController,
  resetProject,
} from "./controllers/projectController.js";
import {
  updateActiveCategory,
  refreshCategories,
  addCategoryEventListeners,
} from "./utils/categoryUtils.js";

document.addEventListener("DOMContentLoaded", () => {
  let currentCategory = "Home";
  let todoController = initTodoController(currentCategory);

  // Initialize the project controller
  initProjectController(todoController);

  // Set up event listeners for category selection
  refreshCategories(todoController);

  // Add category event listeners
  const sidebar = document.getElementById("sidebar");
  const categories = ["Home", "Today", "Upcoming", ...getProjectCategories()];
  addCategoryEventListeners(
    sidebar,
    categories,
    todoController,
    (newCategory) => {
      currentCategory = newCategory;
    },
  );

  // Set up event listener for add task button
  const addTaskButton = document.querySelector(".add-task");
  addTaskButton.addEventListener("click", () => {
    todoController.onAddTask();
    updateActiveCategory(currentCategory);
  });

  const resetProjectsBtn = document.querySelector(".reset-project");
  resetProjectsBtn.addEventListener("click", () => {
    if (
      confirm(
        "Are you sure you want to delete all projects? This action cannot be undone.",
      )
    ) {
      resetProject(todoController);
      currentCategory = "Home";
      updateActiveCategory(currentCategory);
    }
  });

  updateActiveCategory(currentCategory);
  todoController.updateTaskCount();
});

function getProjectCategories() {
  const projectItems = document.querySelectorAll(
    "#project-list .category-item",
  );
  return Array.from(projectItems).map((item) =>
    item.querySelector("p").textContent.trim(),
  );
}
