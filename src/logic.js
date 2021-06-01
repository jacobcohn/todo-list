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

    return {initiate, submitNewProject, deleteProject};
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

    return {checkArray, getInputValue, createNewProject, addProjectToArray, removeProjectFromArray};
})();

const tasks = (() => {
    const checkArray = () => {
        let tasksArray = JSON.parse(localStorage.getItem('tasks'));
        if (tasksArray == null) {
            tasksArray = [];
        };
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    };

    return {checkArray};
})();

export {logic}