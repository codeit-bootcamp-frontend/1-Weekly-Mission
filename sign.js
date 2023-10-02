// DOM 요소 집어오기
const eyeButtons = document.querySelectorAll(".input__eyes");
const signInputs = document.querySelectorAll(".input__container");
const loginButtonNode = document.querySelector(".sign_form__btn");

// class 선택자 변수화
const nullErrMsg = "null_error_message";
const nullErrBorder = "null_error_border";
const eyesOn = "input__eyes--on";

// 에러 메세지 관리
const errorMessageInput = {
    signinEmail: "이메일을 입력해주세요",
    signinPassword: "비밀번호를 입력해주세요",
    signinPasswordCheck: "확인할 비밀번호를 입력해주세요",
}

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
};


const validateInput = (inputEl) => {
    if (inputEl.value === "") {
        return errorMessageInput[inputEl.id]
    } else if (!isEmail(inputEl.value) && inputEl.id === "signinEmail") {
        return "올바른 이메일 주소가 아닙니다.";
    }
}

const setErrorMessage = (divTag, target) => {
    if (divTag.textContent !== "") {
        let pointNode = target.parentElement;
        pointNode.after(divTag);
        pointNode.classList.add(nullErrBorder);
    }
}

const validateLoginInput = () => signInputs[0].value === "test@codeit.com" && signInputs[1].value === "codeit101";

// 이벤트 핸들러들
const togglePasswordVisibility = ({ target }) => {
    const isVisible = target.classList.contains(eyesOn);
    const targetType = target.previousElementSibling.type;

    target.classList.toggle(eyesOn);

    if (!isVisible) {
        targetType = "password"
    } else {
        targetType = "";
    }
}

const handleInputError = (e) => {
    const errorMessageNode = renderErrorMessageNode();

    errorMessageNode.textContent = validateInput(e.target);

    setErrorMessage(errorMessageNode, e.target);
}

const removeErrorMessage = (e) => {
    let currentDivTag = e.target.parentElement;

    if (currentDivTag.classList.contains(nullErrBorder)) {
        currentDivTag.classList.remove(nullErrBorder)
        currentDivTag.nextElementSibling.remove();
    }
}

const handleLoginButton = (e) => {
    e.preventDefault();

    if (validateLoginInput()) {
        location.href = "/folder.html";
    } else {
        for (const line of signInputs) {
            const errorMessageNode = renderErrorMessageNode();

            errorMessageNode.textContent = errorMessageLogin[line.id];

            setErrorMessage(errorMessageNode, line)
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
    line.addEventListener("focusin", removeErrorMessage);
}

// 로그인 버튼 폴더 이동 클릭 이벤트 바인딩
loginButtonNode.addEventListener("click", handleLoginButton);
