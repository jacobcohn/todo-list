import {logic} from './logic'
import {dom} from './dom'
import {errors} from './errors'

/* 
things that I need to do:
- selectProject
*/


const events = (() => {
    const initiate = () => {
        initialProjectEvents();
        initialTaskEvents();
        initialErrorModalEvents();
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

    const initialErrorModalEvents = () => {
        errorModal.closeErrorModal();
    }

    const submitNewProject = () => {
        projects.addEventListenersToProject();
    };

    return {initiate, submitNewProject};
})();

const projects = (() => {
    const selectProject = () => {
        const allProjects = Array.from(document.querySelectorAll('.projectBtn'));
        allProjects.forEach(element => {
            selectProjectEventListener(element);
        });
    };

    const selectProjectEventListener = (projectBtn) => {
        projectBtn.addEventListener('click', e => {
            const projectName = e.target.id.replace(' projectBtn', '');
            logic.selectProject(projectName);
            dom.selectProject(projectName);
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
            if (errors.isSubmitProjectError()) return;
            logic.submitNewProject();
            dom.submitNewProject();
            events.submitNewProject();
        });
    };

    const addEventListenersToProject = () => {
        const allProjectBtns = Array.from(document.querySelectorAll('.projectBtn'));
        const newProjectBtn = allProjectBtns[allProjectBtns.length - 1];
        selectProjectEventListener(newProjectBtn);

        const allProjectDeleteIcons = Array.from(document.querySelectorAll('.projectDeleteIcon'));
        const newProjectDeleteIcon = allProjectDeleteIcons[allProjectDeleteIcons.length - 1];
        deleteProjectEventListener(newProjectDeleteIcon);
    };

    return {selectProject, deleteProject, addProject, cancelAddProject, submitNewProject, addEventListenersToProject}
})();

const tasks = (() => {

})();

const errorModal = (() => {
    const errorModalBtn = document.getElementById('errorModalBtn');

    const closeErrorModal = () => {
        errorModalBtn.addEventListener('click', () => {
            dom.closeErrorModal();
        });
    };

    return {closeErrorModal};
})();

export {events}