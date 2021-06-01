const dom = (() => {
    const initiate = () => {
        // display home and all of its tasks
        projects.displayAllProjects();
    };

    const addProject = () => {
        projects.switchAddProjectElements();
    };

    const cancelAddProject = () => {
        projects.switchAddProjectElements();
    };

    const submitNewProject = () => {
        projects.switchAddProjectElements();
        projects.displayNewProject();
    };

    const deleteProject = (projectName) => {
        projects.removeProjectFromDisplay(projectName);
    };

    return {initiate, addProject, cancelAddProject, submitNewProject, deleteProject};
})();

const projects = (() => {
    const switchAddProjectElements = () => {
        const addProjectBtnDiv = document.querySelector('#addProjectBtnDiv');
        const addProjectFormDiv = document.querySelector('#addProjectFormDiv');
        addProjectBtnDiv.classList.toggle('displayDefault');
        addProjectBtnDiv.classList.toggle('displayNone');
        addProjectFormDiv.classList.toggle('displayDefault');
        addProjectFormDiv.classList.toggle('displayNone');
    };

    const displayAProject = (projectName) => {
        const allProjectsContainer = document.querySelector('#allProjectsContainer');

        // create projectDiv
        const projectDiv = document.createElement('div');
        projectDiv.id = projectName + ' projectDiv';
        projectDiv.classList.toggle('projectDiv');
        allProjectsContainer.appendChild(projectDiv);

        // create projectBtn
        const projectBtn = document.createElement('button');
        projectBtn.id = projectName + ' projectBtn';
        projectBtn.classList.toggle('projectBtn');
        projectBtn.textContent = projectName;
        projectDiv.appendChild(projectBtn);

        // create projectDeleteIcon
        const projectDeleteIcon = document.createElement('i');
        projectDeleteIcon.id = projectName + ' projectDeleteIcon';
        projectDeleteIcon.classList.toggle('fas');
        projectDeleteIcon.classList.toggle('fa-trash');
        projectDeleteIcon.classList.toggle('projectDeleteIcon');
        projectDiv.appendChild(projectDeleteIcon);
    };

    const displayNewProject = () => {
        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        const newProjectName = projectsArray[projectsArray.length - 1].name;
        displayAProject(newProjectName);
    };

    const displayAllProjects = () => {
        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        const projectNamesArray = projectsArray.map(element => element.name);
        projectNamesArray.forEach(projectName => {
            if (projectName == 'Home') return;
            displayAProject(projectName);
        });
    };

    const removeProjectFromDisplay = (projectName) => {
        const projectDiv = document.getElementById(projectName + ' projectDiv');
        projectDiv.remove();
    };

    return {switchAddProjectElements, displayNewProject, displayAllProjects, removeProjectFromDisplay};
})();

const tasks = (() => {


    return {};
})();

export {dom}