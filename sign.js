// 눈알 깜빡이는 이벤트
const sign_form = document.querySelector(".sign_form")

function eyes_on_off(e) {
    if (e.target.classList.contains("input__eyes--on")) { // 눈이 떠있는 = 비밀번호가 보일 때 동작
        e.target.classList.remove("input__eyes--on");
        e.target.classList.add("input__eyes--off");

        // span 바로 앞의 input type password로 변경
        e.target.previousElementSibling.type = "password"
    } else if (e.target.classList.contains("input__eyes--off")) { // 눈이 감겨있는 = 비밀번호가 안 보일 때 동작
        e.target.classList.remove("input__eyes--off");
        e.target.classList.add("input__eyes--on");

        // span 바로 앞의 input type 비우기
        e.target.previousElementSibling.type = "";
    }
}

sign_form.addEventListener('click', eyes_on_off);