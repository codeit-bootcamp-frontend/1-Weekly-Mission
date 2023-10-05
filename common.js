function showMessage(inputText) {
  return `${inputText}을 입력해주세요`;
}

function isEmpty(input) {
  return input.value.trim().length;
}

function showEmptyErrorMessage(input, inputLabel) {
  const errorMsgs = inputLabel.querySelector(".error-message");
  errorMsgs.innerText = "";
  if (!isEmpty(input)) {
    let errorMessage = showMessage(inputLabel.innerText);
    errorMsgs.innerText = errorMessage;
    errorMsgs.style.color = "red";
    input.style.border = "3px solid red";
  } else if (isEmpty(input)) {
    errorMsgs.innerText = "";
    input.style.border = "";
  }
}

function isEmailValid(input) {
  const re = /^[a-z0-9]+@[a-z]+\.[a-z]{2,5}/;
  const texts = input.value.trim();
  return re.test(texts);
}

function showValidEmailErrorMessage(input, inputLabel) {
  if (!isEmailValid(input)) {
    const errorMsgs = inputLabel.querySelector(".error-message");
    errorMsgs.innerText = "유효하지않은이메일입니다";
    errorMsgs.style.color = "red";
    input.style.border = "3px solid red";
  }
}

function isCodeItLogin(email, password) {
  return (
    email.value.trim() === "test@codeit.com" &&
    password.value.trim() === "codeit101"
  );
}

function PasswordVisibility(eye, passwordInput) {
  if (!eye) {
    throw new Error("not found eye icon");
    return;
  }
  if (!passwordInput) {
    throw new Error("not found password input");
    return;
  }
  if (eye.classList.contains("fa-eye")) {
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
    passwordInput.type = "password";
  } else if (eye.classList.contains("fa-eye-slash")) {
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
    passwordInput.type = "text";
  }
}
