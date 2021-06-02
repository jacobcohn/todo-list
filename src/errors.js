import {dom} from './dom'

const errors = (() => {
    const isSubmitProjectError = () => {
        return projects.checkSubmitProjectInput();
    }

    return {isSubmitProjectError};
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

    return {checkSubmitProjectInput};
})();

export {errors}