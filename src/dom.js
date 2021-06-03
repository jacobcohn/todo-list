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
        tasks.displayAllTasksInProject(projectName);
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

    const findTaskObj = (taskId) => {
        const tasksArray = JSON.parse(localStorage.getItem('tasks'));
        let finalTaskObj;
        tasksArray.forEach(taskObj => {
            if (taskObj.id == taskId) {
                finalTaskObj = taskObj;
            };
        });
        return finalTaskObj;
    };

    const findTasksArray = (projectName) => {
        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        let tasksArray;
        projectsArray.forEach(project => {
            if (project.name == projectName) {
                tasksArray = project.tasks;
            };
        });
        return tasksArray;
    };

    const displayATask = (taskId) => {
        const allTasksContainer = document.getElementById('allTasksContainer');
        const taskObj = findTaskObj(taskId);
        
        // create taskDiv
        const taskDiv = document.createElement('div');
        taskDiv.id = taskObj.id + ' taskDiv';
        taskDiv.classList.toggle('taskDiv');
        allTasksContainer.appendChild(taskDiv);

        // create taskPriority
        const taskPriority = document.createElement('div');
        taskPriority.id = taskObj.id + ' taskPriority';
        taskPriority.classList.toggle('taskPriority');
        taskPriority.classList.toggle(taskObj.priority);
        taskDiv.appendChild(taskPriority);

        // create taskStatus
        const taskStatus = document.createElement('div');
        taskStatus.id = taskObj.id + ' taskStatus';
        taskStatus.classList.toggle('taskStatus');
        taskDiv.appendChild(taskStatus);

        // create taskStatusIcon
        const taskStatusIcon = document.createElement('i');
        taskStatusIcon.id = taskObj.id + ' taskStatusIcon';
        taskStatusIcon.classList.toggle('fas');
        taskStatusIcon.classList.toggle('fa-check');
        taskStatusIcon.classList.toggle('taskStatusIcon');
        taskStatusIcon.classList.toggle('displayNone');
        taskStatus.appendChild(taskStatusIcon);

        // create taskName
        const taskName = document.createElement('div');
        taskName.id = taskObj.id + ' taskName';
        taskName.classList.toggle('taskName');
        taskName.textContent = taskObj.name;
        taskDiv.appendChild(taskName);

        // create taskDueDate
        const taskDueDate = document.createElement('div');
        taskDueDate.id = taskObj.id + ' taskDueDate';
        taskDueDate.classList.toggle('taskDueDate');
        taskDueDate.textContent = taskObj.dueDate;
        taskDiv.appendChild(taskDueDate);

        // create taskEditIcon
        const taskEditIcon = document.createElement('i');
        taskEditIcon.id = taskObj.id + ' taskEditIcon';
        taskEditIcon.classList.toggle('fas');
        taskEditIcon.classList.toggle('fa-edit');
        taskEditIcon.classList.toggle('taskEditIcon');
        taskDiv.appendChild(taskEditIcon);

        // create taskDeleteIcon
        const taskDeleteIcon = document.createElement('i');
        taskDeleteIcon.id = taskObj.id + ' taskDeleteIcon';
        taskDeleteIcon.classList.toggle('fas');
        taskDeleteIcon.classList.toggle('fa-trash');
        taskDeleteIcon.classList.toggle('taskDeleteIcon');
        taskDiv.appendChild(taskDeleteIcon);
    };

    const displayNewTask = (taskId) => { // parameter taskId might be a problem
        const selectedProject = sessionStorage.getItem('selectedProject');
        const taskObj = findTaskObj(taskId);
        if (taskObj.project == selectedProject) {
            displayATask(taskObj.id);
        };
    };

    const displayAllTasksInProject = (projectName) => {
        const tasksArray = findTasksArray(projectName);
        tasksArray.forEach(task => displayATask(task));
    };

    return {changeTitle, displayNewTask, displayAllTasksInProject};
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