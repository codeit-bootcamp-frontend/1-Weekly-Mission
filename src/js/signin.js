const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector(".cta");
const emailErrorMessage = document.querySelector("#email-error");
const passwordErrorMessage = document.querySelector("#password-error");
const eyeButton = document.querySelector(".items__eye-button");
const eyeIcons = document.querySelectorAll(".eye-button");

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function displayErrorMessage(element, message) {
  element.textContent = message;
}

function addErrorClass(element) {
  element.classList.add("items__input--error");
}

function removeErrorClass(element) {
  element.classList.remove("items__input--error");
}

emailInput.addEventListener("focusout", () => {
  if (emailInput.value === "") {
    displayErrorMessage(emailErrorMessage, "이메일을 입력해주세요.");
    addErrorClass(emailInput);
  } else if (!emailPattern.test(emailInput.value)) {
    displayErrorMessage(emailErrorMessage, "올바른 이메일 주소가 아닙니다.");
    addErrorClass(emailInput);
  } else {
    displayErrorMessage(emailErrorMessage, "");
    removeErrorClass(emailInput);
  }
});

passwordInput.addEventListener("focusout", () => {
  if (passwordInput.value === "") {
    displayErrorMessage(passwordErrorMessage, "비밀번호를 입력해주세요.");
    addErrorClass(passwordInput);
  } else {
    displayErrorMessage(passwordErrorMessage, "");
    removeErrorClass(passwordInput);
  }
});

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    emailInput.value === "test@codeit.com" &&
    passwordInput.value === "codeit101"
  ) {
    window.location.href = "/folder";
  } else {
    displayErrorMessage(emailErrorMessage, "이메일을 확인해주세요.");
    displayErrorMessage(passwordErrorMessage, "비밀번호를 확인해주세요.");
    addErrorClass(emailInput);
    addErrorClass(passwordInput);
  }
});

let isPasswordVisible = false;

eyeButton.addEventListener("click", () => {
  isPasswordVisible = !isPasswordVisible;

  if (isPasswordVisible) {
    passwordInput.type = "text";
    // 사선이 없는 눈 모양 아이콘 보이기
    eyeIcons[0].style.display = "none";
    eyeIcons[1].style.display = "block";
  } else {
    passwordInput.type = "password";
    // 사선이 있는 눈 모양 아이콘 보이기
    eyeIcons[0].style.display = "block";
    eyeIcons[1].style.display = "none";
  }
});
