// controllers/projectController.js
import { saveProjects, loadProjects } from '../utils/storage.js';

export const initProjectController = () => {
    const projectList = document.getElementById('project-list');
    const addProjectBtn = document.getElementById('add-project');
    const projectModal = document.getElementById('project-modal');
    const projectForm = document.getElementById('project-form');
    const closeBtn = projectModal.querySelector('.modal-close');
    const sidebar = document.getElementById('sidebar');

    const renderProjects = () => {
        let projects = loadProjects();
        const defaultProjects = [
            { name: 'Work', id: 'work-default', class: 'category-item' },
            { name: 'Fitness', id: 'fitness-default', class: 'category-item'},
            { name: 'Grocery', id: 'grocery-default', class: 'category-item' }
        ];
        
        // Filter out any default projects that might already be in the loaded projects
        projects = projects.filter(project => 
            !defaultProjects.some(defaultProject => defaultProject.name === project.name)
        );
    
        // Prepend default projects
        projects = [...defaultProjects, ...projects];
    
        projectList.innerHTML = ''; // Clear existing projects
    
        projects.forEach(project => {
            const projectElement = createProjectElement(project);
            projectList.appendChild(projectElement);
        });
    };
    

    const createProjectElement = (project) => {
        const div = document.createElement('div');
        div.classList.add('category-item');
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
    };

    addProjectBtn.addEventListener('click', () => {
        projectModal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        projectModal.style.display = 'none';
    });

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const projectName = projectForm.projectName.value;
        addProject(projectName);
        projectForm.reset();
        projectModal.style.display = 'none';
    });

    const deleteAllProjects = () => {
        const confirmation = confirm('Are you sure you want to delete all projects? This cannot be undone.');
        if (confirmation) {
          saveProjects([]); // Save an empty array to clear projects
          renderProjects(); // Re-render to display the empty list
        }
      };
    
    // Initial render
    renderProjects();
};