// 눈알 깜빡이는 이벤트
const sign_form = document.querySelector(".sign_form")

function eyes_on_off(e) {
    if (e.target.classList.contains("input__eyes--on")) {
        // 눈이 떠있는 = 비밀번호가 보일 때 동작
        e.target.classList.remove("input__eyes--on");
        
        // span 바로 앞의 input type password로 변경
        e.target.previousElementSibling.type = "password"
    } else if (e.target.classList.contains("input__eyes--off")) {
        // 눈이 감겨있는 = 비밀번호가 안 보일 때 동작
        e.target.classList.add("input__eyes--on");

        // span 바로 앞의 input type 비우기
        e.target.previousElementSibling.type = "";
    }
}

sign_form.addEventListener('click', eyes_on_off);


// focusout 때 (input이 비어있거나 이메일이 잘못되었으면) error 뱉는 이벤트
const sign_input = document.querySelectorAll(".input__container");
const error_message_null = ["이메일을 입력해주세요", "비밀번호를 입력해주세요", "확인할 비밀번호를 입력해주세요"];
const emailVerification = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

// div 노드 생성하는 함수
const createDivElement = () => { return document.createElement("div"); }

// input이 비어있으면 정해진 텍스트 노드 붙여주는 함수
const validateInputNull = (arg, e) => {
    if (e.target.value === "") {
        for (let line in sign_input) {
            if (e.target === sign_input[line]) {
                arg.textContent = error_message_null[line];
                break
            }
        }
    }

    return arg
}

// input의 이메일이 맞지 않으면 정해진 텍스트 노드 붙여주는 함수
const validateInputEmail = (arg, e) => {
       if (e.target === sign_input[0]) {
        if (e.target.value.match(emailVerification) == null) {
            arg.textContent = "올바른 이메일 주소가 아닙니다.";
        }
    }

    return arg
}

// 정해진 노드를 찾아서 에러 메세지 붙여줌
const addErrorMessageAfterPointNode = (errorMassageNode, pointNode, e) => {
    pointNode.after(errorMassageNode);
    pointNode.classList.add("null_error_border");
}

// 인풋이 비어있거나, 인풋의 이메일이 이상하면 튀어나오는 이벤트 핸들러
const handleInputError = (e) => {
    let errorMessageNode = createDivElement();

    errorMessageNode.classList.add("null_error_message");

    validateInputNull(errorMessageNode, e);
    validateInputEmail(errorMessageNode, e);

    console.log(errorMessageNode.textContent)

    if (errorMessageNode.textContent !== "") {
        let replaceErrorMassagePoint = e.target.parentElement;
        addErrorMessageAfterPointNode(errorMessageNode, replaceErrorMassagePoint, e);
    }
}

    // 반복문을 통해 각각의 노드에 이벤트 핸들러를 달아준다
for (let line of sign_input) {
    line.addEventListener("focusout", handleInputError)
}



// focusin 때 error 가 있으면 지우는 이벤트
function remove_Error_message(e) {
    let currentDivTag = e.target.parentElement;

    if (currentDivTag.classList.contains("null_error_border")) {
        currentDivTag.classList.remove("null_error_border")
        currentDivTag.nextElementSibling.remove();
    }
}

for (let line of sign_input) {
    line.addEventListener("focusin", remove_Error_message)
}