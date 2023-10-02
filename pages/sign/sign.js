const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

const emailInput = document.querySelector('#signin-email');
const passwordInput = document.querySelector('#signin-password');
const submitButton = document.querySelector('.btn.login');
const eyeButton = document.querySelector('.eye-off');

const emailTypeErrorMessage = document.createElement("p");
const passwordTypeErrorMessage = document.createElement("p");

function validateEmailType(e) {
    e.preventDefault();

    const input = e.target.value.trim();
    if (!input) {
        emailTypeErrorMessage.textContent = "이메일을 입력해주세요.";
        emailInput.classList.add("error-input");
        emailTypeErrorMessage.classList.add("email-type-error");
        emailInput.after(emailTypeErrorMessage);
        return;
    }

    if (!emailRegex.test(input)) {
        emailTypeErrorMessage.textContent = "올바른 이메일 주소가 아닙니다.";
        emailInput.classList.add("error-input");
        emailTypeErrorMessage.classList.add("email-type-error");
        emailInput.after(emailTypeErrorMessage);
        return;
    }

    if (emailRegex.test(input)) {
        emailInput.classList.remove("error-input");
        emailTypeErrorMessage.remove();
    }
}

function validatePassword(e) {
    e.preventDefault();

    const input = e.target.value.trim();
    if (!input) {
        passwordTypeErrorMessage.textContent = "비밀번호를 확인해주세요.";
        passwordInput.classList.add("error-input");
        passwordTypeErrorMessage.classList.add("password-type-error");
        passwordInput.after(passwordTypeErrorMessage);
        return;
    }

    passwordInput.classList.remove("error-input");
    passwordTypeErrorMessage.remove();
}

function login(e) {
    e.preventDefault();
    console.log(e);

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === "test@codeit.com" && password === "codeit101") {
        location.href = "/folder.html";
        return;
    }

    emailTypeErrorMessage.textContent = "이메일을 확인해주세요.";
    emailInput.classList.add("error-input");
    emailTypeErrorMessage.classList.add("email-type-error");
    emailInput.after(emailTypeErrorMessage);

    passwordTypeErrorMessage.textContent = "비밀번호를 확인해주세요.";
    passwordInput.classList.add("error-input");
    passwordTypeErrorMessage.classList.add("password-type-error");
    passwordInput.after(passwordTypeErrorMessage);
}

function toggleEyeButton(e) {
    if (passwordInput.getAttribute("type") === "password") {
        passwordInput.setAttribute("type", "text");
        eyeButton.setAttribute("src", "images/eye-on.svg");
    } else {
        passwordInput.setAttribute("type", "password");
        eyeButton.setAttribute("src", "images/eye-off.svg");
    }
}

emailInput.addEventListener("focusout", validateEmailType);
passwordInput.addEventListener("focusout", validatePassword);
submitButton.addEventListener("click", login);
eyeButton.addEventListener("click", toggleEyeButton);
