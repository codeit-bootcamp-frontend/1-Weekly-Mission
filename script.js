const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const loginButton = document.getElementById("login-button");

function showMessage(inputText) {
  return `${inputText}을 입력해주세요`;
}

// 빈값일때 handling
function IsEmpty(input, inputLabel) {
  const errorMsgs = inputLabel.querySelector("small");
  if (input.value.trim().length === 0 && errorMsgs.innerText.length === 0) {
    // inpuLabel.textContent는 공백을 포함하기 떄문에 공백포함해서 나와서 이상함
    let errorMessage = showMessage(inputLabel.innerText);
    errorMsgs.innerText = errorMessage;
  } else if (input.value.trim().length !== 0) {
    errorMsgs.innerText = "";
  }
}

// 유효한 이메일이 아닐때 handling
function IsValidEmail(input, inputLabel, message) {
  const re = /^[a-z0-9]+@[a-z]+\.[a-z]{2,5}/;
  const texts = input.value.trim();
  if (!re.test(texts) && texts.length) {
    const errorMsgs = inputLabel.querySelector("small");
    errorMsgs.innerText = message;
  }
}

// console.log(window.location.href); http://127.0.0.1:5500/pages/signin.html

function isCodeItLogin(email, password) {
  return (
    email.value.trim() === "test@codeit.com" &&
    password.value.trim() === "codeit101"
  );
}
//  test@codeit.com, 비code밀번호: codeit101 으로 로그인 시도한경우

email.addEventListener("focusout", function (event) {
  event.preventDefault();
  IsEmpty(email, emailLabel);
  IsValidEmail(email, emailLabel, "유효하지않은이메일입니다");
});

password.addEventListener("focusout", function (event) {
  event.preventDefault();
  IsEmpty(password, passwordLabel);
});

loginButton.addEventListener("click", function (event) {
  // 얘 안해주면은 이동 X
  //
  event.preventDefault();
  if (isCodeItLogin(email, password)) {
    window.location = "http://127.0.0.1:5500/folder.html";
  }
});
