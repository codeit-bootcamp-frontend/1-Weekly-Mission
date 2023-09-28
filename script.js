const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");

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
  const re = /^[a-z0-9]+@[a-z]+\.[a-z]{3,5}/;
  const texts = input.value.trim();

  if (!re.test(texts) && texts.length) {
    const errorMsgs = inputLabel.querySelector("small");
    errorMsgs.innerText = message;
  }
}

email.addEventListener("focusout", function (event) {
  event.preventDefault();
  IsEmpty(email, emailLabel);
  IsValidEmail(email, emailLabel, "유효하지않은이메일입니다");
});

password.addEventListener("focusout", function (event) {
  event.preventDefault();
  IsEmpty(password, passwordLabel);
});
