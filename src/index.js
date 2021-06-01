import {logic} from './logic'
import {dom} from './dom'

const main = (() => {
    const initiate = () => {
        logic.initiate();
        dom.initiate();
    };

    const eventlisteners = () => {
        projectEvents();
        taskEvents();
    };

    // projectEvents (helping with navigation)
    const projectEvents = () => {
        selectProject();
        deleteProject();
        addProject();
        cancelAddProject();
        submitNewProject();
    };

    const selectProject = () => {
        const allProjects = Array.from(document.querySelectorAll('.projectBtn'));
        allProjects.forEach(element => {
            element.addEventListener('click', e => {
                // need to do something here
                console.log(e.target);
            });
        });
    };

    const deleteProject = () => {
        const allProjectDeleteIcons = Array.from(document.querySelectorAll('.projectDeleteIcon'));
        allProjectDeleteIcons.forEach(element => {
            element.addEventListener('click', e => {
                // need to do something here
                console.log(e.target);
            });
        });
    };

    const addProject = () => {
        const addProjectBtn = document.querySelector('#addProjectBtn');
        addProjectBtn.addEventListener('click', () => {
            dom.addProject();
        });
    };

    const cancelAddProject = () => {
        const cancelAddProjectBtn = document.querySelector('#cancelAddProjectBtn');
        cancelAddProjectBtn.addEventListener('click', () => {
            dom.cancelAddProject();
        });
    };

    const submitNewProject = () => {
        const submitNewProjectBtn = document.querySelector('#submitNewProjectBtn');
        submitNewProjectBtn.addEventListener('click', () => {
            // need to do something here
            console.log(submitNewProjectBtn);
        });
    };

    // taskEvents
    const taskEvents = () => {

    };

    return {initiate, eventlisteners};
})();

main.initiate();
main.eventlisteners();