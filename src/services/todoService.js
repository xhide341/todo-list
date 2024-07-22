// services/todoService.js

import { v4 as uuidv4 } from 'uuid';
import { saveTodos, loadTodos } from '../utils/storage.js';

export const getTodos = (category) => {
    return loadTodos(category);
};

export const addTodo = (category, todo) => {
    const todos = loadTodos(category);
    const newTodo = {
        ...todo,
        id: uuidv4(),  // Generate a UUID for the todo
        completed: false
    };
    todos.push(newTodo);
    saveTodos(category, todos);
    return todos;
};

export const updateTodo = (category, todoId, updates) => {
    const todos = loadTodos(category);
    const index = todos.findIndex(todo => todo.id === todoId);
    if (index !== -1) {
        todos[index] = { ...todos[index], ...updates };
        saveTodos(category, todos);
    }
    return todos;
};

export const deleteTodo = (category, todoId) => {
    const todos = loadTodos(category).filter(todo => todo.id !== todoId);
    saveTodos(category, todos);
    return todos;
};