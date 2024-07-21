import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/todoService.js';
import { renderTodoList } from '../components/TodoList.js';

export const initTodoController = (category) => {
    const main = document.getElementById('main');
    const modal = document.getElementById('todo-modal');
    const form = document.getElementById('todo-form');

    const renderTodos = () => {
        const todos = getTodos(category);
        main.innerHTML = ''; // Clear main content
        renderTodoList(todos, onToggleTodo, onEditTodo, onDeleteTodo);
    };

    const onAddTask = () => {
        modal.style.display = 'block';
        form.reset(); // Clear form fields
    };

    const onToggleTodo = (todoId) => {
        const todos = getTodos(category);
        const todo = todos.find(t => t.id === todoId);
        updateTodo(category, todoId, { completed: !todo.completed });
        renderTodos();
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
};