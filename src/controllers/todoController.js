// controller/todoController.js
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/todoService.js';
import { renderTodoList } from '../components/todoList.js';

export const initTodoController = (category) => {
    const main = document.getElementById('main');
    const modal = document.getElementById('todo-modal');
    const form = document.getElementById('todo-form');

    // Controller functions
    const renderTodos = () => {
        const todos = getTodos(category);
        renderTodoList(todos, category, onToggleTodo, onEditTodo, onDeleteTodo);
    };

    const onAddTask = () => {
        modal.style.display = 'block';
        form.reset();
    };

    const onToggleTodo = (todoId, isCompleted) => {
        updateTodo(category, todoId, { completed: isCompleted });
    };

    const onEditTodo = (todoId) => {
        const todos = getTodos(category);
        const todo = todos.find(t => t.id === todoId);
        form.title.value = todo.title;
        form.dueDate.value = todo.dueDate;
        form.priority.value = todo.priority;
        modal.style.display = 'block';
        form.onsubmit = (e) => handleFormSubmit(e, todoId);
    };

    const onDeleteTodo = (todoId) => {
        deleteTodo(category, todoId);
        renderTodos();
    };

    const handleFormSubmit = (e, todoId = null) => {
        e.preventDefault();
        const todoData = {
            title: form.title.value,
            dueDate: form.dueDate.value,
            priority: form.priority.value
        };
        if (todoId) {
            updateTodo(category, todoId, todoData);
        } else {
            addTodo(category, todoData);
        }
        modal.style.display = 'none';
        renderTodos();
    };

    // Set up event listeners
    form.onsubmit = handleFormSubmit;

    // Initial render
    renderTodos();

    // Return public methods if needed
    return {
        onAddTask,
        renderTodos
    };
};