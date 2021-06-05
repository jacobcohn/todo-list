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
        tasks.removeTasksWithProject(projectName);
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

    const editTask = (taskId) => {
        tasks.taskIdToSessionStorage(taskId);
    }

    const deleteTask = (taskId) => {
        tasks.deleteTaskFromLocalStorage(taskId);
    };

    const submitEditTask = () => {
        const taskId = sessionStorage.getItem('selectedTask');
        tasks.deleteTaskFromProject(taskId);
        tasks.editTaskObject(taskId);
        tasks.addTaskToProject(taskId);
    };

    return {initiate, submitNewProject, deleteProject, selectProject, submitAddTask, 
        isNewTaskInSelectedProject, changeStatus, editTask, deleteTask, submitEditTask};
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
        const dueDate = document.getElementById('addTaskDueDateInput').value;
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

    const taskIdToSessionStorage = (taskId) => {
        sessionStorage.setItem('selectedTask', taskId);
    };

    const deleteTaskFromLocalStorage = (taskId) => {
        deleteTaskFromHome(taskId);
        deleteTaskFromProject(taskId);
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

    const deleteTaskFromHome = (taskId) => {
        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        const indexOfTaskInTasksArray = findIndexOfTaskInTasksArray(taskId);
        projectsArray[0].tasks.splice(indexOfTaskInTasksArray, 1);
        localStorage.setItem('projects', JSON.stringify(projectsArray));
    };

    const deleteTaskFromProject = (taskId) => {
        const project = findProject(taskId);
        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        const projectNamesArray = projectsArray.map(project => project.name);
        const indexOfProject = projectNamesArray.indexOf(project);
        const indexOfTaskInProject = projectsArray[indexOfProject].tasks.indexOf(taskId);

        projectsArray[indexOfProject].tasks.splice(indexOfTaskInProject, 1);

        localStorage.setItem('projects', JSON.stringify(projectsArray));
    };

    const deleteTaskFromTasksArray = (taskId) => {
        const tasksArray = JSON.parse(localStorage.getItem('tasks'));
        const indexOfTaskInTasksArray = findIndexOfTaskInTasksArray(taskId);
        tasksArray.splice(indexOfTaskInTasksArray, 1);
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    };

    const editTaskObject = (taskId) => {
        const tasksArray = JSON.parse(localStorage.getItem('tasks'));
        const index = findIndexOfTaskInTasksArray(taskId);

        tasksArray[index].name = document.getElementById('editTaskNameInput').value;
        tasksArray[index].notes = document.getElementById('editTaskNotesTextArea').value;
        tasksArray[index].dueDate = document.getElementById('editTaskDueDateInput').value
        tasksArray[index].priority = document.getElementById('editTaskPrioritySelect').value;
        tasksArray[index].project = document.getElementById('editTaskProjectSelect').value;

        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    };

    const addTaskToProject = (taskId) => {
        const tasksArray = JSON.parse(localStorage.getItem('tasks'));
        const indexOfTaskInTasksArray = findIndexOfTaskInTasksArray(taskId);
        const project = tasksArray[indexOfTaskInTasksArray].project;

        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        const projectNamesArray = projectsArray.map(projectObject => projectObject.name);
        const indexOfProject = projectNamesArray.indexOf(project);

        projectsArray[indexOfProject].tasks.push(taskId);

        localStorage.setItem('projects', JSON.stringify(projectsArray));
        fixOrderOfTasksInProject(indexOfProject);
    };

    const fixOrderOfTasksInProject = (indexOfProject) => {
        const taskNamesArray = JSON.parse(localStorage.getItem('tasks')).map(taskObj => taskObj.id);
        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        const projectTaskArray = projectsArray[indexOfProject].tasks;
        const fixedArray = taskNamesArray.filter(tasksArrayTask => projectTaskArray.some(projectsArrayTask => projectsArrayTask == tasksArrayTask));
        projectsArray[indexOfProject].tasks = fixedArray;
        localStorage.setItem('projects', JSON.stringify(projectsArray));
    };

    const removeTasksWithProject = (projectName) => {
        const tasksArray = JSON.parse(localStorage.getItem('tasks')).filter(task => task.project !== projectName);
        localStorage.setItem('tasks', JSON.stringify(tasksArray));

        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        projectsArray[0].tasks = tasksArray.map(task => task.id);
        localStorage.setItem('projects', JSON.stringify(projectsArray));
    };

    return {checkArray, createNewTaskFromAddTaskForm, addTaskToLocalStorage, changeStatus, 
        taskIdToSessionStorage, deleteTaskFromLocalStorage, deleteTaskFromProject, editTaskObject, 
        addTaskToProject, removeTasksWithProject};
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