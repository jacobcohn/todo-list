const dom = (() => {
    const initiate = () => {
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
        tasks.deleteAllTasksInDisplay();
        tasks.displayAllTasksInProject(projectName);
    };

    const addTask = () => {
        const addTaskProjectSelect = document.getElementById('addTaskProjectSelect');
        tasks.resetProjectOptionsToSelect(addTaskProjectSelect);
        tasks.selectedProjectIsPreselected(addTaskProjectSelect);
        const addTaskModalBackground = document.getElementById('addTaskModalBackground');
        tasks.switchTaskModalOnOff(addTaskModalBackground);
    };

    const cancelAddTask = () => {
        const addTaskModalBackground = document.getElementById('addTaskModalBackground');
        tasks.switchTaskModalOnOff(addTaskModalBackground);
    };

    const submitAddTask = () => {
        const addTaskModalBackground = document.getElementById('addTaskModalBackground');
        tasks.switchTaskModalOnOff(addTaskModalBackground);
        tasks.displayNewTask();
    };

    const changeStatus = (taskId) => {
        tasks.changeStatusClasses(taskId);
    };

    const selectTask = (taskId) => {
        tasks.changeTextContentForDisplayTaskModal(taskId);
        const displayTaskModalBackground = document.getElementById('displayTaskModalBackground');
        tasks.switchTaskModalOnOff(displayTaskModalBackground);
    };

    const closeSelectTask = () => {
        const displayTaskModalBackground = document.getElementById('displayTaskModalBackground');
        tasks.switchTaskModalOnOff(displayTaskModalBackground);
    };

    const deleteTask = (taskId) => {
        tasks.removeTaskFromDisplay(taskId);
    };

    const editTask = (taskId) => {
        const editTaskProjectSelect = document.getElementById('editTaskProjectSelect');
        tasks.resetProjectOptionsToSelect(editTaskProjectSelect);
        tasks.changeValueForEditTaskModal(taskId);
        const editTaskModalBackground = document.getElementById('editTaskModalBackground');
        tasks.switchTaskModalOnOff(editTaskModalBackground);
    };

    const cancelEditTask = () => {
        const editTaskModalBackground = document.getElementById('editTaskModalBackground');
        tasks.switchTaskModalOnOff(editTaskModalBackground);
    };

    const submitEditTask = () => {
        const editTaskModalBackground = document.getElementById('editTaskModalBackground');
        tasks.switchTaskModalOnOff(editTaskModalBackground);
        tasks.editDisplayOfEditedTask();
    };

    return {initiate, addProject, cancelAddProject, submitNewProject, displayError, 
        closeErrorModal, deleteProject, selectProject, addTask, cancelAddTask, 
        submitAddTask, changeStatus, selectTask, closeSelectTask, deleteTask, editTask, 
        cancelEditTask, submitEditTask};
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

    const deleteAllTasksInDisplay = () => {
        const allTasksContainer = document.getElementById('allTasksContainer');
        while (allTasksContainer.firstChild) {
            allTasksContainer.removeChild(allTasksContainer.firstChild);
        };
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

        if (taskObj.status == 'complete') changeStatusClasses(taskObj.id);
    };

    const displayNewTask = () => {
        const taskObj = JSON.parse(localStorage.getItem('tasks')).pop();
        const selectedProject = sessionStorage.getItem('selectedProject');
        if (selectedProject == taskObj.project || selectedProject == 'Home') {
            displayATask(taskObj.id);
        };
    };

    const displayAllTasksInProject = (projectName) => {
        const tasksArray = findTasksArray(projectName);
        tasksArray.forEach(task => displayATask(task));
    };

    const resetProjectOptionsToSelect = (select) => {
        while (select.firstChild) select.removeChild(select.firstChild);
        const projectNamesArray = JSON.parse(localStorage.getItem('projects')).map(project => project.name);
        projectNamesArray.shift(); // removes Home
        projectNamesArray.forEach(projectName => {
            const optionForSelect = document.createElement('option');
            optionForSelect.value = projectName;
            optionForSelect.textContent = projectName;
            select.appendChild(optionForSelect);
        });
    };

    const selectedProjectIsPreselected = () => {
        const selectedProject = sessionStorage.getItem('selectedProject');
        if (selectedProject !== 'Home') {
            const taskProject = document.getElementById('addTaskProjectSelect');
            const taskProjectOptions = Array.from(taskProject.querySelectorAll('option'));
            const projectSelectedOptionIndex = taskProjectOptions.findIndex(option => option.value == selectedProject);
            taskProject.selectedIndex = projectSelectedOptionIndex;
        };
    };

    const switchTaskModalOnOff = (modalBackground) => {
        modalBackground.classList.toggle('displayNone');
        modalBackground.classList.toggle('displayFlex');
    };

    const changeStatusClasses = (taskId) => {
        const taskDiv = document.getElementById(taskId + ' taskDiv');
        taskDiv.classList.toggle('taskDivCompleted');
        const taskStatusIcon = document.getElementById(taskId + ' taskStatusIcon');
        taskStatusIcon.classList.toggle('displayNone');
        const taskName = document.getElementById(taskId + ' taskName');
        taskName.classList.toggle('lineThrough');
        const taskDueDate = document.getElementById(taskId + ' taskDueDate');
        taskDueDate.classList.toggle('lineThrough');
    };

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const changeTextContentForDisplayTaskModal = (taskId) => {
        const taskObj = findTaskObj(taskId);

        const taskName = document.getElementById('displayTaskNameDescription');
        taskName.textContent = taskObj.name;

        const taskNotes = document.getElementById('displayTaskNotesDescription');
        taskNotes.textContent = taskObj.notes;

        const taskDueDate = document.getElementById('displayTaskDueDateDescription');
        taskDueDate.textContent = taskObj.dueDate;

        const taskPriority = document.getElementById('displayTaskPriorityDescription');
        taskPriority.textContent = capitalizeFirstLetter(taskObj.priority);

        const taskProject = document.getElementById('displayTaskProjectDescription');
        taskProject.textContent = taskObj.project;
    };

    const removeTaskFromDisplay = (taskId) => {
        const taskDiv = document.getElementById(taskId + ' taskDiv');
        taskDiv.remove();
    };

    const changeValueForEditTaskModal = (taskId) => {
        const taskObj = findTaskObj(taskId);

        const taskName = document.getElementById('editTaskNameInput');
        taskName.value = taskObj.name;

        const taskNotes = document.getElementById('editTaskNotesTextArea');
        taskNotes.value = taskObj.notes;

        const taskDueDate = document.getElementById('editTaskDueDateInput');
        taskDueDate.value = taskObj.dueDate;

        const taskPriority = document.getElementById('editTaskPrioritySelect');
        const taskPriorityOptions = Array.from(taskPriority.querySelectorAll('option'));
        const prioitySelectedOptionIndex = taskPriorityOptions.findIndex(option => option.value == taskObj.priority);
        taskPriority.selectedIndex = prioitySelectedOptionIndex;

        const taskProject = document.getElementById('editTaskProjectSelect');
        const taskProjectOptions = Array.from(taskProject.querySelectorAll('option'));
        const projectSelectedOptionIndex = taskProjectOptions.findIndex(option => option.value == taskObj.project);
        taskProject.selectedIndex = projectSelectedOptionIndex;
    };

    const editDisplayOfEditedTask = () => {
        const taskId = sessionStorage.getItem('selectedTask');
        const taskObj = findTaskObj(taskId);
        const selectedProject = sessionStorage.getItem('selectedProject');

        if (taskObj.project !== selectedProject && selectedProject !== 'Home') {
            removeTaskFromDisplay(taskObj.id);
            return;
        };

        if (taskObj.status == 'complete') changeStatusClasses(taskObj.id);

        const taskPriority = document.getElementById(taskObj.id + ' taskPriority');
        if (taskPriority.classList.contains('low')) taskPriority.classList.toggle('low');
        if (taskPriority.classList.contains('medium')) taskPriority.classList.toggle('medium');
        if (taskPriority.classList.contains('high')) taskPriority.classList.toggle('high');
        taskPriority.classList.toggle(taskObj.priority);

        const taskName = document.getElementById(taskObj.id + ' taskName');
        taskName.textContent = taskObj.name;

        const taskDueDate = document.getElementById(taskObj.id + ' taskDueDate');
        taskDueDate.textContent = taskObj.dueDate;
    };

    return {changeTitle, deleteAllTasksInDisplay, displayNewTask, displayAllTasksInProject, 
        resetProjectOptionsToSelect, selectedProjectIsPreselected, switchTaskModalOnOff, 
        changeStatusClasses, changeTextContentForDisplayTaskModal, removeTaskFromDisplay, 
        changeValueForEditTaskModal, editDisplayOfEditedTask};
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