const dom = (() => {
    const initiate = () => {
        // display home and all of its tasks
        // display all projects on sidebar
    };

    const addProject = () => {
        projects.switchAddProject();
    };

    const cancelAddProject = () => {
        projects.switchAddProject();
    }

    return {initiate, addProject, cancelAddProject};
})();

const projects = (() => {
    const addProjectBtnDiv = document.querySelector('#addProjectBtnDiv');
    const addProjectFormDiv = document.querySelector('#addProjectFormDiv');

    const switchAddProject = () => {
        addProjectBtnDiv.classList.toggle('displayDefault');
        addProjectBtnDiv.classList.toggle('displayNone');
        addProjectFormDiv.classList.toggle('displayDefault');
        addProjectFormDiv.classList.toggle('displayNone');
    };

    return {switchAddProject};
})();

const tasks = (() => {


    return {};
})();

export {dom}