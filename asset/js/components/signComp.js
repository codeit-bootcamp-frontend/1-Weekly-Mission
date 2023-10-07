// DOM 요소 집어오기
const signFormInputs = document.querySelectorAll(".sign_form__input");
const signInputs = document.querySelectorAll(".input__container");
const signForm = document.querySelector(".sign_form");
const eyeButtons = document.querySelectorAll(".input__eyes");


// class 선택자 변수화
const nullErrMsg = "null_error_message";
const nullErrBorder = "null_error_border";
const eyesOn = "input__eyes--on";

const errorMessageLogin = {
    signinEmail: "이메일을 확인해주세요",
    signinPassword: "비밀번호를 확인해주세요",
}


// 각종 함수
const renderErrorMessageNode = () => {
    const divTag = document.createElement("div");
    divTag.classList.add(nullErrMsg);
    return divTag;
}

const isEmail = (input) => {
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return emailRegex.test(input);
}

const handleInputEmailError = ({ target: { value } }) => {
    if (value === "") {
        return "이메일을 입력해주세요";
    } else if (!isEmail(value)) {
        return "올바른 이메일 주소가 아닙니다";
    }
}

const handleInputPasswordError = ({ target: { value } }) => {
    if (value === "") {
        return "비밀번호를 입력해주세요";
    }
}

const setErrStyle = (errMsgNode, target) => {
    let targetNode = document.getElementById(target.name);

    if (errMsgNode.textContent !== "") {
        targetNode.after(errMsgNode);
        targetNode.classList.add(nullErrBorder);
    }
}

const eraseErrStyle = (el) => {
    try {
        el.classList.remove(nullErrBorder)
    } finally {
        try {el.nextElementSibling.remove();}
        catch {} // 이놈도 DOM 종속적이다!!!! 근데 에러 메세지의 생성 자체가 꽤 종속적인 위치에서 생성되는 거 아닌가..? 그럼 DOM 종속적이라고 할 수 없는 것 아닐까?
    }
}

const validInputNodeType = (inputContainer) => {
    const isVisible = inputContainer.type;

    console.log(isVisible)
    if (isVisible === "password") {
        inputContainer.type = "text";
    } else {
        inputContainer.type = "password"
    }
}

const setLoginErr = (line) => {
    const errMsgNode = renderErrorMessageNode();
    errMsgNode.textContent = errorMessageLogin[line.id];
    setErrStyle(errMsgNode, line);
}

const validateLoginInputs = () => signInputs[0].value === "test@codeit.com" && signInputs[1].value === "codeit101";







export { signFormInputs, eyeButtons, signInputs, signForm, eyesOn, validateLoginInputs, renderErrorMessageNode, isEmail, handleInputEmailError, handleInputPasswordError, setErrStyle, eraseErrStyle, validInputNodeType, setLoginErr };