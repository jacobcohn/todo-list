import {dom} from './dom'

const errors = (() => {
    const isSubmitProjectError = () => {
        return projects.checkSubmitProjectInput();
    };

    const isAddTaskError = () => {
        return projects.moreThanOneProject();
    };

    return {isSubmitProjectError, isAddTaskError};
})();

const projects = (() => {
    const checkSubmitProjectInput = () => {
        const inputValue = document.getElementById('addProjectInput').value;
        if (inputValue == '' || inputValue == null) {
            dom.displayError('Project Name is Required');
            return true;
        };
        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        const projectNamesArray = projectsArray.map(project => project.name);
        if (projectNamesArray.some(projectName => projectName == inputValue)) {  
            dom.displayError('Two Projects Cannot Have The Same Name')  
            return true;
        };
        return false;
    }

    const moreThanOneProject = () => {
        const projectsArray = JSON.parse(localStorage.getItem('projects'));
        if (projectsArray.length <= 1) {
            dom.displayError('Add a Project First');
            return true;
        };
        return false;
    };

    return {checkSubmitProjectInput, moreThanOneProject};
})();

export {errors}