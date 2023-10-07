import * as signComp from '../components/signComp.js';

const handleInputError = (e) => {
    const errMsgNode = signComp.renderErrorMessageNode();
    const ID = e.target.id;

    if (ID === "signinEmail") {
        errMsgNode.textContent = signComp.handleInputEmailError(e);
    } else if (ID === "signinPassword") {
        errMsgNode.textContent = signComp.handleInputPasswordError(e);
    }

    signComp.setErrStyle(errMsgNode, e.target);
}

const removeInputError = (e) => {
    const targetTag = document.getElementById(e.target.name); // 이놈은 묵시적으로 input의 name 속성에 종속되어버리고 말았다!!! DOM가면의 저주를 받아버리고 만 것이다!!!
    signComp.eraseErrStyle(targetTag);
}

const togglePasswordVisibility = ({ target }) => {
    for (const line of signComp.signFormInputs) {
        const inputContainer = line.querySelector(".input__container");
        const inputEye = line.querySelector(".input__eyes");
        
        if (target === inputEye) {
            inputEye.classList.toggle(signComp.eyesOn);
            signComp.validInputNodeType(inputContainer);
        }
    }
}

const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (signComp.validateLoginInputs()) {
        location.href = "/folder.html";
    } else {
        for (const line of signComp.signFormInputs) {
            signComp.eraseErrStyle(line);
        }

        for (const line of signComp.signInputs) {
            signComp.setLoginErr(line);
        }
    }
}

export { handleInputError, removeInputError, togglePasswordVisibility, handleLoginSubmit };