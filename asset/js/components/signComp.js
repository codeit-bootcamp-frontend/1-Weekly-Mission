// DOM 요소 집어오기
const signFormInputs = document.querySelectorAll(".sign_form__input");
const signInputs = document.querySelectorAll(".input__container");
const signForm = document.querySelector(".sign_form");
const eyeButtons = document.querySelectorAll(".input__eyes");

// class 선택자 변수화
const nullErrMsg = "null_error_message";
const nullErrBorder = "null_error_border";
const eyesOn = "input__eyes--on";

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

const isPassword = (input) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(input);
}

const isPasswordCheck = () => {
    const passwordValue = document.querySelector("#signinPassword").value;
    const passwordCheckValue = document.querySelector("#signinPasswordCheck").value;

    return (passwordValue === passwordCheckValue)
}

const postJSONdata = async (URL, DATA) => {
    const postedData = await fetch(`https://bootcamp-api.codeit.kr/api/${URL}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(DATA),
    });

    return postedData
}

const setErrStyle = (errMsgNode, target) => {
    let targetNode = document.getElementById(target.name);

    if (errMsgNode.textContent !== "") {
        targetNode.after(errMsgNode);
        targetNode.classList.add(nullErrBorder);
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

const removeInputError = (e) => {
    const targetTag = document.getElementById(e.target.name); // 이놈은 묵시적으로 input의 name 속성에 종속되어버리고 말았다!!! DOM가면의 저주를 받아버리고 만 것이다!!!
    eraseErrStyle(targetTag);
}

const eraseErrStyle = (el) => {
    try {
        el.classList.remove(nullErrBorder)
    } finally {
        try {el.nextElementSibling.remove();}
        catch {} // 이놈도 DOM 종속적이다!!!! 근데 에러 메세지의 생성 자체가 꽤 종속적인 위치에서 생성되는 거 아닌가..? 그럼 DOM 종속적이라고 할 수 없는 것 아닐까?
    }
}

const togglePasswordVisibility = ({ target }) => {
    for (const line of signFormInputs) {
        const inputContainer = line.querySelector(".input__container");
        const inputEye = line.querySelector(".input__eyes");
        
        if (target === inputEye) {
            inputEye.classList.toggle(eyesOn);
            validInputNodeType(inputContainer);
        }
    }
}

export { signFormInputs, eyeButtons, signInputs, signForm, eyesOn, renderErrorMessageNode, isEmail, isPassword, isPasswordCheck, postJSONdata, setErrStyle, eraseErrStyle, validInputNodeType, removeInputError, togglePasswordVisibility };