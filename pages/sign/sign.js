const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

const email = document.querySelector('#signin-email');
const password = document.querySelector('#signin-password');

const emailTypeErrorMessage = document.createElement("p");


function validateEmailType(e) {
    e.preventDefault();

    const input = e.target.value.trim();
    if (!input) {
        emailTypeErrorMessage.textContent = "이메일을 입력해주세요.";
        email.classList.add("error-input");
        emailTypeErrorMessage.classList.add("email-type-error");
        email.after(emailTypeErrorMessage);
        return;
    }

    if (!emailRegex.test(input)) {
        emailTypeErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
        email.classList.add("error-input");
        emailTypeErrorMessage.classList.add("email-type-error");
        email.after(emailTypeErrorMessage);
        return;
    }

    if (emailRegex.test(input)) {
        emailTypeErrorMessage.remove();
    }
}

function validatePassword(e) {
    const input = e.target.value.trim();
    if (input.length === 0) {
        console.log("비밀번호를 확인해주세요.");
    }
}

email.addEventListener("focusout", validateEmailType);
password.addEventListener("focusout", validatePassword);
