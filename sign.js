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
const emailVerification = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

function create_Error_message(e) {
    // 새로운 div tag 하나 생성하고
    let newDivTag = document.createElement("div");

    // input이 비어있을 때만 동작하도록 조건문 구성
    if (e.target.value == "") {
        // 생성한 div tag에 필요한 메시지를 넣어주고
        for (let line in sign_input) {
            if (e.target == sign_input[line]) {
                newDivTag.textContent = error_message_null[line];
                break
            }
        }
    } else if (e.target == sign_input[0]) {
        if (e.target.value !== emailVerification) { // 이메일 검증 실패시
            newDivTag.textContent = "올바른 이메일 주소가 아닙니다."
        }
    } else { // input이 비어있지도, 이메일이 잘못되지도 않았을 때 노드 추가 방지
        braak
    }

    // div tag에 에러 메세지 class 추가
    newDivTag.classList.add("null_error_message")

    // 준비된 div tag를 div의 막내 노드가 되도록 한다
    let currnetDivTag = e.target.parentElement
    currnetDivTag.after(newDivTag);

    currnetDivTag.classList.add("null_error_border")
}

    // 반복문을 통해 각각의 노드에 이벤트 핸들러를 달아준다
for (let line of sign_input) {
    line.addEventListener("focusout", create_Error_message)
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