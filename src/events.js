import {logic} from './logic'
import {dom} from './dom'

/* 
things that I need to do:
- form validation (not the same name and not nothing)
*/


const events = (() => {
    const initiate = () => {
        initialProjectEvents();
        initialTaskEvents();
    };

    const initialProjectEvents = () => {
        projects.selectProject();
        projects.deleteProject();
        projects.addProject();
        projects.cancelAddProject();
        projects.submitNewProject();
    };

    const initialTaskEvents = () => {

    };

    const submitNewProject = () => {
        projects.addEventListenersToProject();
    };

    return {initiate, submitNewProject};
})();

const projects = (() => {
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
            deleteProjectEventListener(element);
        });
    };

    const deleteProjectEventListener = (projectDeleteIcon) => {
        projectDeleteIcon.addEventListener('click', e => {
            const projectName = e.target.id.replace(' projectDeleteIcon', '');
            logic.deleteProject(projectName);
            dom.deleteProject(projectName);
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
            events.submitNewProject();
        });
    };

    const addEventListenersToProject = () => {
        const allProjectDeleteIcons = Array.from(document.querySelectorAll('.projectDeleteIcon'));
        const newProjectDeleteIcon = allProjectDeleteIcons[allProjectDeleteIcons.length - 1];
        deleteProjectEventListener(newProjectDeleteIcon);
    };

    return {selectProject, deleteProject, addProject, cancelAddProject, submitNewProject, addEventListenersToProject}
})();

const tasks = (() => {

})();

export {events}