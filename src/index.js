import {logic} from './logic'
import {dom} from './dom'

const main = (() => {
    const initiate = () => {
        logic.initiate();
        dom.initiate();
        main.initialEventListeners();
    };

    const initialEventListeners = () => {
        initialProjectEvents();
        initialTaskEvents();
    };

    // projectEvents (helping with navigation)
    const initialProjectEvents = () => {
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
                const projectName = e.target.id.split(' ')[0];
                logic.deleteProject(projectName);
                // dom.deleteProject(projectName);
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
        submitNewProjectBtn.addEventListener('click', e => {
            e.preventDefault();
            logic.submitNewProject();
            dom.submitNewProject();
            // updateEventListeners();
        });
    };

    // taskEvents
    const initialTaskEvents = () => {

    };

    return {initiate, initialEventListeners};
})();

main.initiate();