import { saveProjects, loadProjects } from "../utils/storage.js";
import {
  refreshCategories,
  addCategoryEventListeners,
} from "../utils/categoryUtils.js";

let projectList;
let todoController;

const renderProjects = () => {
  let projects = loadProjects();
  const defaultProjects = [
    { name: "Work", id: "work-default", class: "category-item" },
    { name: "Fitness", id: "fitness-default", class: "category-item" },
    { name: "Grocery", id: "grocery-default", class: "category-item" },
  ];

  projects = projects.filter(
    (project) =>
      !defaultProjects.some(
        (defaultProject) => defaultProject.name === project.name,
      ),
  );

  projects = [...defaultProjects, ...projects];

  projectList.innerHTML = "";

  projects.forEach((project) => {
    const projectElement = createProjectElement(project);
    projectList.appendChild(projectElement);
  });

  const categories = [
    "Home",
    "Today",
    "Upcoming",
    ...projects.map((p) => p.name),
  ];
  addCategoryEventListeners(projectList, categories, todoController);
};

const createProjectElement = (project) => {
  const div = document.createElement("div");
  div.classList.add("category-item");
  div.innerHTML = `
    <p>${project.name}</p>
    <span class="task-count">0</span>
  `;
  return div;
};

const addProject = (projectName) => {
  const projects = loadProjects();
  projects.push({ name: projectName, id: Date.now() });
  saveProjects(projects);
  renderProjects();
  refreshCategories(todoController);
};

export const initProjectController = (todoControllerInstance) => {
  todoController = todoControllerInstance;
  projectList = document.getElementById("project-list");
  const addProjectBtn = document.getElementById("add-project");
  const projectModal = document.getElementById("project-modal");
  const projectForm = document.getElementById("project-form");
  const closeButton = projectModal.querySelector(".modal-close");

  addProjectBtn.addEventListener("click", () => {
    projectModal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    projectModal.style.display = "none";
  });

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const projectName = projectForm.projectName.value;
    addProject(projectName);
    projectForm.reset();
    projectModal.style.display = "none";
  });

  // Initial render
  renderProjects();
};

export const resetProject = () => {
  saveProjects([]);
  renderProjects();
  refreshCategories(todoController);
  todoController.renderTodos("Home");
  todoController.updateTaskCount();
};
