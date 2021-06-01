const dom = (() => {
    const initiate = () => {
        // display home and all of its tasks
        // display all projects on sidebar
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

    return {initiate, addProject, cancelAddProject, submitNewProject};
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

    const displayNewProject = () => {
        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        const newProjectName = projectsArray[projectsArray.length - 1].name;
        const allProjectsContainer = document.querySelector('#allProjectsContainer');

        // create projectDiv
        const newProjectDiv = document.createElement('div');
        newProjectDiv.id = newProjectName + ' projectDiv';
        newProjectDiv.classList.toggle('projectDiv');
        allProjectsContainer.appendChild(newProjectDiv);

        // create projectBtn
        const newProjectBtn = document.createElement('button');
        newProjectBtn.id = newProjectName + ' projectBtn';
        newProjectBtn.classList.toggle('projectBtn');
        newProjectBtn.textContent = newProjectName;
        newProjectDiv.appendChild(newProjectBtn);

        // create projectDeleteIcon
        const newProjectDeleteIcon = document.createElement('i');
        newProjectDeleteIcon.id = newProjectName + ' projectDeleteIcon';
        newProjectDeleteIcon.classList.toggle('fas');
        newProjectDeleteIcon.classList.toggle('fa-trash');
        newProjectDeleteIcon.classList.toggle('projectDeleteIcon');
        newProjectDiv.appendChild(newProjectDeleteIcon);
    };

    return {switchAddProjectElements, displayNewProject};
})();

const tasks = (() => {


    return {};
})();

export {dom}