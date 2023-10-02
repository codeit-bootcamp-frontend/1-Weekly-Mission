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
  } else if (isEmpty(input)) {
    errorMsgs.innerText = "";
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
  }
}

function isCodeItLogin(email, password) {
  return (
    email.value.trim() === "test@codeit.com" &&
    password.value.trim() === "codeit101"
  );
}

function passwordVisible() {
  if (eyeIcon.classList.contains("fa-eye")) {
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
    password.type = "password";
  } else if (eyeIcon.classList.contains("fa-eye-slash")) {
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
    password.type = "text";
  }
}
