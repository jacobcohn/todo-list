const dom = (() => {
    const initiate = () => {
        selectProject('Home');
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
        projects.fixAddProjectInput();
    };

    const displayError = (message) => {
        errorModal.showErrorMessage(message);
    }

    const closeErrorModal = () => {
        errorModal.switchErrorModalOnOrOff();
    }

    const deleteProject = (projectName) => {
        projects.removeProjectFromDisplay(projectName);
    };

    const selectProject = (projectName) => {
        tasks.changeTitle(projectName);
        // display all tasks in projectName
    };

    return {initiate, addProject, cancelAddProject, submitNewProject, displayError, 
        closeErrorModal, deleteProject, selectProject};
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

    const fixAddProjectInput = () => {
        const addProjectInput = document.getElementById('addProjectInput');
        addProjectInput.value = '';
    };

    return {switchAddProjectElements, displayNewProject, displayAllProjects, removeProjectFromDisplay, 
        fixAddProjectInput};
})();

const tasks = (() => {
    const changeTitle = (projectName) => {
        const taskTitle = document.getElementById('taskTitle');
        taskTitle.textContent = projectName;
    };

    return {changeTitle};
})();

const errorModal = (() => {
    const errorModalMessage = document.getElementById('errorModalMessage');
    const errorModalBackground = document.getElementById('errorModalBackground');

    const showErrorMessage = (message) => {
        errorModalMessage.textContent = message;
        switchErrorModalOnOrOff();
    };

    const switchErrorModalOnOrOff = () => {
        errorModalBackground.classList.toggle('displayNone');
        errorModalBackground.classList.toggle('displayFlex');
    };

    return {showErrorMessage, switchErrorModalOnOrOff};
})();

export {dom}