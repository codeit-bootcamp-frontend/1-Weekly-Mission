const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");

// function showError(event) {
//   console.log(event.target.classList);
// }

// form.addEventListener("focusout", showError);

function showMessage(inputText) {
  return `${inputText}을 입력해주세요`;
}

function IsEmpty(input, inputLabel) {
  const errorMsgs = inputLabel.querySelector("small");
  if (input.value.trim().length === 0 && errorMsgs.innerText.length === 0) {
    // inpuLabel.textContent는 공백을 포함하기 떄문에 공백포함해서 나와서 이상함
    let errorMessage = showMessage(inputLabel.innerText);
    inputLabel.querySelector("small").innerText = errorMessage;
    console.log(inputLabel);
  }
}

email.addEventListener("focusout", function (event) {
  event.preventDefault();
  IsEmpty(email, emailLabel);
});

password.addEventListener("focusout", function (event) {
  event.preventDefault();
  IsEmpty(password, passwordLabel);
});
