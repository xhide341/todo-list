// utils/storage.js

export const saveTodos = (category, todos) => {
  localStorage.setItem(`todos-${category}`, JSON.stringify(todos));
};

export const loadTodos = (category) => {
  const todos = localStorage.getItem(`todos-${category}`);
  return todos ? JSON.parse(todos) : [];
};

export const saveProjects = (projects) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

export const loadProjects = () => {
  const projects = localStorage.getItem("projects");
  return projects ? JSON.parse(projects) : [];
};
