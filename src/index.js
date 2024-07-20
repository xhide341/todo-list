import './style.css';
import renderHome from './javascript/home';

const main = document.getElementById('main');
const sidebar = document.getElementById('sidebar');


function clearContent() {
    if (main.hasChildNodes()) {
        main.innerHTML = '';
    }
}

const addCategoryListener = () => {
    const categoryItems = document.querySelectorAll(`#sidebar .category-item`);
    categoryItems.forEach((categoryItem) => {
        categoryItem.addEventListener('click', () => {
            clearContent();
            if (categoryItem.classList.contains('home-category')) {
                renderHome();
            }
            if (categoryItem.classList.contains('today-category')) {
                console.log('today');
            }
            if (categoryItem.classList.contains('upcoming-category')) {
                console.log('upcoming');
            }
        });
    });
}

renderHome();
addCategoryListener();