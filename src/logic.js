const logic = (() => {
    const initiate = () => {
        projects.checkArray();
        tasks.checkArray();
    };

    return {initiate};
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

    return {checkArray};
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