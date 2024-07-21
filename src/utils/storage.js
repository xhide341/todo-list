// utils/storage.js

export const saveTodos = (category, todos) => {
    localStorage.setItem(`todos-${category}`, JSON.stringify(todos));
};

export const loadTodos = (category) => {
    const todos = localStorage.getItem(`todos-${category}`);
    return todos ? JSON.parse(todos) : [];
};