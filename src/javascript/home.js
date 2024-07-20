import '../style.css';
import renderTodo from './todo';

const renderHome = () => {
    console.log('rendering home');
    const main = document.getElementById('main');
    const home = document.createElement('div');
    const pageTitle = document.createElement('h1');
    home.classList.add('home');
    pageTitle.classList.add('page-title');

    pageTitle.innerText = 'Home';
    
    home.appendChild(pageTitle);

    main.appendChild(home);
    renderTodo();
};

export default renderHome;