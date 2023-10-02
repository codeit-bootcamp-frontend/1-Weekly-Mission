// DOM 요소 집어오기
const eyeButtons = document.querySelectorAll(".input__eyes");
const signInputs = document.querySelectorAll(".input__container");
const loginButtonNode = document.querySelector(".sign_form__btn");
const signFormInputs = document.querySelectorAll(".sign_form__input")

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

const setErrorMessage = (errMsgNode, target) => {
    if (errMsgNode.textContent !== "") {
        
        let targetNode = document.getElementById(target.name);
        targetNode.after(errMsgNode);
        targetNode.classList.add(nullErrBorder);
    }
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

const eraseError = (targetTag) => {
    targetTag.classList.remove(nullErrBorder)
    targetTag.nextElementSibling.remove(); // 이놈도 DOM 종속적이다!!!! 근데 에러 메세지의 생성 자체가 꽤 종속적인 위치에서 생성되는 거 아닌가..? 그럼 DOM 종속적이라고 할 수 없는 것 아닐까?
}

const validateLoginInputs = () => signInputs[0].value === "test@codeit.com" && signInputs[1].value === "codeit101";

// 이벤트 핸들러들
const togglePasswordVisibility = ({ target }) => {
    const isVisible = target.classList.contains(eyesOn);

    target.classList.toggle(eyesOn);

    if (isVisible) {
        target.previousElementSibling.type = "password"
    } else {
        target.previousElementSibling.type = "";
    }
}

const handleInputError = (e) => {
    const errMsgNode = renderErrorMessageNode();
    const ID = e.target.id;
    
    if (ID === "signinEmail") {
        errMsgNode.textContent = handleInputEmailError(e);
    } else if (ID === "signinPassword") {
        errMsgNode.textContent = handleInputPasswordError(e);
    }

    setErrorMessage(errMsgNode, e.target);
}

const removeInputError = (e) => {
    let targetTag = document.getElementById(e.target.name); // 이놈은 묵시적으로 input의 name 속성에 종속되어버리고 말았다!!! DOM가면의 저주를 받아버리고 만 것이다!!!
    
    if (targetTag.classList.contains(nullErrBorder)) {
        eraseError(targetTag);
    }
}

const handleLoginButton = (e) => {
    e.preventDefault();
    if (validateLoginInputs()) {
        location.href = "/folder.html";
    } else {
        for (const line of signFormInputs) {
            if (line.classList.contains(nullErrBorder)) {
                eraseError(line);
            }
        }

        for (const line of signInputs) {
            const errMsgNode = renderErrorMessageNode();
            errMsgNode.textContent = errorMessageLogin[line.id];
            setErrorMessage(errMsgNode, line);
        }
    }
}

// 눈알 토글 클릭 이벤트 바인딩
for (const line of eyeButtons) {
    line.addEventListener('click', togglePasswordVisibility);
}

// 인풋 포커스 아웃 이벤트 & 인풋 포커스 아웃 이벤트 바인딩
for (const line of signInputs) {
    line.addEventListener("focusout", handleInputError);
    line.addEventListener("focusin", removeInputError);
}

// 로그인 버튼 폴더 이동 클릭 이벤트 바인딩
loginButtonNode.addEventListener("click", handleLoginButton);
