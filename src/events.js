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
        tasks.changeStatus();
        tasks.selectTask();
        tasks.editTask();
        tasks.deleteTask();
        tasks.addTask();
        tasks.closeSelectTask();
        tasks.submitAddTask();
        tasks.cancelAddTask();
        tasks.submitEditTask();
        tasks.cancelEditTask();
    };

    const initialErrorModalEvents = () => {
        errorModal.closeErrorModal();
    }

    return {initiate};
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
            addEventListenersToProject();
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

    return {selectProject, deleteProject, addProject, cancelAddProject, submitNewProject};
})();

const tasks = (() => {
    const changeStatus = () => {
        const taskStatusDivs = document.querySelectorAll('.taskStatus');
        taskStatusDivs.forEach(div => changeStatusEventListener(div));
    };

    const changeStatusEventListener = (div) => {
        div.addEventListener('click', e => {
            // code here
        });
    };

    const selectTask = () => {
        const taskNameDivs = document.querySelectorAll('.taskName');
        taskNameDivs.forEach(div => selectTaskEventListener(div));
    };

    const selectTaskEventListener = (div) => {
        div.addEventListener('click', e => {
            // code here
        });
    };

    const editTask = () => {
        const taskEditIcons = document.querySelectorAll('.taskEditIcon');
        taskEditIcons.forEach(icon => editTaskEventListener(icon));
    };

    const editTaskEventListener = (icon) => {
        icon.addEventListener('click', e => {
            // code here
        });
    };

    const deleteTask = () => {
        const taskDeleteIcons = document.querySelectorAll('.taskDeleteIcon');
        taskDeleteIcons.forEach(icon => deleteTaskEventListener(icon));
    };

    const deleteTaskEventListener = (icon) => {
        icon.addEventListener('click', e => {
            // code here
        });
    };

    const addTask = () => {
        const addTaskBtn = document.getElementById('addTaskBtn');
        addTaskBtn.addEventListener('click', () => {
            // code here
        });
    };

    const closeSelectTask = () => {
        const closeSelectTaskBtn = document.getElementById('displayTaskCloseBtn');
        closeSelectTaskBtn.addEventListener('click', () => {
            // code here
        });
    };

    const submitAddTask = () => {
        const submitAddTaskBtn = document.getElementById('submitAddTaskBtn');
        submitAddTaskBtn.addEventListener('click', e => {
            // code here
        })
    };

    const cancelAddTask = () => {
        const cancelAddTaskBtn = document.getElementById('cancelAddTaskBtn');
        cancelAddTaskBtn.addEventListener('click', () => {
            // code here
        })
    };

    const submitEditTask = () => {
        const submitEditTaskBtn = document.getElementById('submitEditTaskBtn');
        submitEditTaskBtn.addEventListener('click', e => {
            // code here
        })
    };

    const cancelEditTask = () => {
        const cancelEditTaskBtn = document.getElementById('cancelEditTaskBtn');
        cancelEditTaskBtn.addEventListener('click', () => {
            // code here
        })
    };
    
    const addEventListenersToTask = (task) => {
        // test if all of these work at some point (writing this in advance)
        const taskStatusDivs = document.querySelectorAll('.taskStatus');
        const newTaskStatusDiv = taskStatusDivs[taskStatusDivs.length - 1];
        changeStatusEventListener(newTaskStatusDiv);

        const taskNameDivs = document.querySelectorAll('.taskName');
        const newTaskNameDiv = taskNameDivs[taskNameDivs.length - 1];
        selectTaskEventListener(newTaskNameDiv);

        const taskEditIcons = document.querySelectorAll('.taskEditIcon');
        const newTaskEditIcon = taskEditIcons[taskEditIcons.length - 1];
        editTaskEventListener(newTaskEditIcon);

        const taskDeleteIcons = document.querySelectorAll('.taskDeleteIcon');
        const newTaskDeleteIcon = taskDeleteIcons[taskDeleteIcons.length - 1];
        deleteTaskEventListener(newTaskDeleteIcon);
    };

    return {changeStatus, selectTask, editTask, deleteTask, addTask, closeSelectTask, 
        submitAddTask, cancelAddTask, submitEditTask, cancelEditTask};
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