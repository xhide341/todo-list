import { initTodoController } from './controllers/todoController.js';


document.addEventListener('DOMContentLoaded', () => {
    const categories = ['Home', 'Today', 'Upcoming', 'Work', 'Fitness', 'Grocery'];
    let currentCategory = 'Home'; // Default category

    const main = document.getElementById('main');
    const sidebar = document.getElementById('sidebar');

    // Initialize the todo controller with the default category
    initTodoController(currentCategory);

    // Set up event listeners for category selection
    sidebar.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const categoryName = e.currentTarget.querySelector('p').textContent;
            if (categories.includes(categoryName)) {
                currentCategory = categoryName;
                updateActiveCategory(categoryName);
                initTodoController(currentCategory);
            }
        });
    });

    // Set up event listener for add task button
    const addTaskButton = document.querySelector('.add-task');
    addTaskButton.addEventListener('click', () => {
        const modal = document.getElementById('todo-modal');
        modal.style.display = 'block';
    });

    // Set up event listener for modal close button
    const closeButton = document.querySelector('.modal-close');
    closeButton.addEventListener('click', () => {
        const modal = document.getElementById('todo-modal');
        modal.style.display = 'none';
    });

    // Helper function to update active category in sidebar
    function updateActiveCategory(category) {
        sidebar.querySelectorAll('.category-item').forEach(item => {
            item.classList.remove('active');
            if (item.querySelector('p').textContent === category) {
                item.classList.add('active');
            }
        });
    }

    // Initial active category
    updateActiveCategory(currentCategory);
});