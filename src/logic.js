import { v4 as uuidv4 } from 'uuid'

const logic = (() => {
    const initiate = () => {
        projects.checkArray();
        tasks.checkArray();
    };

    const submitNewProject = () => {
        projects.addProjectToArray(projects.createNewProject(projects.getInputValue()));
    };

    const deleteProject = (projectName) => {
        projects.removeProjectFromArray(projectName);
    };

    const selectProject = (projectName) => {
        projects.setSelectedProject(projectName);
    };

    const submitAddTask = () => {
        tasks.addTaskToLocalStorage(tasks.createNewTaskFromAddTaskForm());
    };

    const isNewTaskInSelectedProject = () => {
        return questions.isNewTaskInSelectedProject();
    };

    const changeStatus = (taskId) => {
        tasks.changeStatus(taskId);
    };

    const deleteTask = (taskId) => {
        tasks.deleteTaskFromLocalStorage(taskId);
    };

    return {initiate, submitNewProject, deleteProject, selectProject, submitAddTask, 
        isNewTaskInSelectedProject, changeStatus, deleteTask};
})();

const projects = (() => {
    const checkArray = () => {
        let projectsArray = JSON.parse(localStorage.getItem('projects'));
        if (projectsArray == null) {
            projectsArray = [{
                name: 'Home',
                tasks: [],
            }];
        };
        localStorage.setItem('projects', JSON.stringify(projectsArray));
    };

    const setSelectedProject = (projectName) => {
        sessionStorage.setItem('selectedProject', projectName);
    };

    const getInputValue = () => {
        const inputValue = document.querySelector('#addProjectInput').value;
        return inputValue;
    };

    const createNewProject = (name) => {
        const tasks = [];
        return {name, tasks}
    };

    const addProjectToArray = (newProject) => {
        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        projectsArray.push(newProject);
        localStorage.setItem('projects', JSON.stringify(projectsArray));
    };

    const removeProjectFromArray = (projectName) => {
        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        const projectNamesArray = projectsArray.map(projectObject => projectObject.name);
        const index = projectNamesArray.indexOf(projectName);
        projectsArray.splice(index, 1);
        localStorage.setItem('projects', JSON.stringify(projectsArray));
    };

    return {checkArray, setSelectedProject, getInputValue, createNewProject, addProjectToArray, 
        removeProjectFromArray};
})();

const tasks = (() => {
    const checkArray = () => {
        let tasksArray = JSON.parse(localStorage.getItem('tasks'));
        if (tasksArray == null) {
            tasksArray = [];
        };
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    };

    const createNewTaskFromAddTaskForm = () => {
        const id = uuidv4();
        const name = document.getElementById('addTaskNameInput').value;
        const notes = document.getElementById('addTaskNotesTextArea').value;
        const dueDate = document.getElementById('addTaskDueDateInput').value
        const priority = document.getElementById('addTaskPrioritySelect').value;
        const project = document.getElementById('addTaskProjectSelect').value;
        const status = 'incomplete';
        
        return {id, name, notes, dueDate, priority, project, status}
    };

    const addTaskToLocalStorage = (taskObj) => {
        addTaskToTasksArray(taskObj);
        addTaskToProjects(taskObj);
    }

    const addTaskToTasksArray = (taskObj) => {
        const tasksArray = JSON.parse(localStorage.getItem('tasks'));
        tasksArray.push(taskObj);
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    };

    const addTaskToProjects = (taskObj) => {
        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        const projectNamesArray = projectsArray.map(projectObject => projectObject.name);
        const index = projectNamesArray.indexOf(taskObj.project);

        projectsArray[0].tasks.push(taskObj.id);
        projectsArray[index].tasks.push(taskObj.id);

        localStorage.setItem('projects', JSON.stringify(projectsArray));
    };

    const changeStatus = (taskId) => {
        const tasksArray = JSON.parse(localStorage.getItem('tasks'));
        const index = tasksArray.findIndex(task => task.id == taskId);
        const taskObj = tasksArray[index];
        if (taskObj.status == 'incomplete') {
            taskObj.status = 'complete';
        } else {
            taskObj.status = 'incomplete';
        };
        tasksArray[index] = taskObj;
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    };

    const deleteTaskFromLocalStorage = (taskId) => {
        deleteTaskFromProjects(taskId);
        deleteTaskFromTasksArray(taskId);
    };

    const findProject = (taskId) => {
        const tasksArray = JSON.parse(localStorage.getItem('tasks'));
        for (let i = 0; i < tasksArray.length; i++) {
            if (tasksArray[i].id == taskId) return tasksArray[i].project;
        };
    };

    const findIndexOfTaskInTasksArray = (taskId) => {
        const tasksArray = JSON.parse(localStorage.getItem('tasks'));
        for (let i = 0; i < tasksArray.length; i++) {
            if (tasksArray[i].id == taskId) return i;
        };
    };

    const deleteTaskFromProjects = (taskId) => {
        const project = findProject(taskId);
        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        const projectNamesArray = projectsArray.map(project => project.name);
        const indexOfProject = projectNamesArray.indexOf(project);
        const indexOfTaskInProject = projectsArray[indexOfProject].tasks.indexOf(taskId);
        const indexOfTaskInTasksArray = findIndexOfTaskInTasksArray(taskId);

        projectsArray[0].tasks.splice(indexOfTaskInTasksArray, 1);
        projectsArray[indexOfProject].tasks.splice(indexOfTaskInProject, 1);

        localStorage.setItem('projects', JSON.stringify(projectsArray));
    };

    const deleteTaskFromTasksArray = (taskId) => {
        const tasksArray = JSON.parse(localStorage.getItem('tasks'));
        const indexOfTaskInTasksArray = findIndexOfTaskInTasksArray(taskId);
        tasksArray.splice(indexOfTaskInTasksArray, 1);
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    };

    return {checkArray, createNewTaskFromAddTaskForm, addTaskToLocalStorage, changeStatus, 
        deleteTaskFromLocalStorage};
})();

const questions = (() => {
    const isNewTaskInSelectedProject = () => {
        const selectedProject = sessionStorage.getItem('selectedProject');
        const newTaskObj = JSON.parse(localStorage.getItem('tasks')).pop();
        return (selectedProject == newTaskObj.project || selectedProject == 'Home');
    };

    return {isNewTaskInSelectedProject};
})();

export {logic}