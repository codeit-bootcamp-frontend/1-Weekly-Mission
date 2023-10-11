export function showMessage(inputText) {
  return `${inputText}을 입력해주세요`;
}

//  true이면은 emptry라는것 false이면은 empty가 아니라는거
export function isEmpty(input) {
  // input.value가 inpuValue가
  return input.value.trim().length ? false : true;
}

export function showEmptyErrorMessage(input, inputLabel) {
  const errorMsgs = inputLabel.querySelector(".error-message");
  errorMsgs.innerText = "";
  if (isEmpty(input)) {
    let errorMessage = showMessage(inputLabel.innerText);
    errorMsgs.innerText = errorMessage;
    errorMsgs.style.color = "red";
    input.style.border = "3px solid red";
  } else {
    errorMsgs.innerText = "";
    input.style.border = "";
  }
}

export function isEmailValid(input) {
  const re = /^[a-z0-9]+@[a-z]+\.[a-z]{2,5}/;
  const texts = input.value.trim();
  return re.test(texts);
}

export function showValidEmailErrorMessage(input, inputLabel) {
  if (!isEmailValid(input) && !isEmpty(input)) {
    const errorMsgs = inputLabel.querySelector(".error-message");
    errorMsgs.innerText = "올바른 이메일 주소가 아닙니다";
    errorMsgs.style.color = "red";
    input.style.border = "3px solid red";
  }
}
// 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우, “비밀번호는 영문, 숫자 조합 8자 이상
export function isPasswordValid(input) {
  const texts = input.value.trim();
  let regex = /^[A-Za-z]+$/; // 문자로만 이루어진거
  let regex2 = /^[0-9]+$/; // 숫자로만 이루어진거
  return !regex2.test(texts) && !regex.test(texts) && texts.length > 8;
}

export function showValidPasswordErrorMessage(input, inputLabel) {
  if (!isPasswordValid(input)) {
    const errorMsgs = inputLabel.querySelector(".error-message");
    errorMsgs.innerText = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요";
    errorMsgs.style.color = "red";
    input.style.border = "3px solid red";
  } else {
    input.style.border = "";
  }
}

export function isCodeItLogin(email, password) {
  return (
    email.value.trim() === "test@codeit.com" &&
    password.value.trim() === "codeit101"
  );
}

export function passwordVisibility(eye, passwordInput) {
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
