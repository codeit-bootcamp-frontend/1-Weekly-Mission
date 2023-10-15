const $emailInput = document.querySelector("#email");
const $passwordInput = document.querySelector("#password");
const testUserFile = {
  email: "test@codeit.com",
  password: "sprint101",
};
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const alphaArray = [...alphabet];
const numArray = [...numbers];

function checkerEmail(e) {
  if ($emailInput.value === "") {
    displayError(e, "이메일을 입력해주세요.");
  } else if ($emailInput.value.includes("@") === false) {
    displayError(e, "올바른 이메일 주소가 아닙니다.");
  }
}

function isIncludePassword(passArray) {
  if (
    passArray.some((p) => alphaArray.includes(p)) &&
    passArray.some((p) => numArray.includes(p)) &&
    passArray.length >= 8
  ) {
    return true;
  }
}

function reset(e) {
  e.target.classList.remove("warning");
  const $warningText = document.querySelector(".warning-text");
  if ($warningText) {
    $warningText.remove();
  }
}

function eyeOnOff(e) {
  e.target.classList.toggle("line");
  if (e.target.classList.contains("line") === true) {
    $passwordInput.removeAttribute("type");
  } else {
    $passwordInput.setAttribute("type", "password");
  }
}

function writeError(e, errorMessage) {
  e.target.classList.add("warning");
  const $text = document.createElement("span");
  $text.classList.add("warning-text");
  $text.textContent = errorMessage;
  return $text;
}

function displayError(e, errorMessage) {
  const $warningMessage = writeError(e, errorMessage);
  e.target.after($warningMessage);
}

function checkerInputBoxs(emailMassage, passwordMassage) {
  $emailInput.classList.add("warning");
  const $emailText = document.createElement("span");
  $emailText.classList.add("warning-text");
  $emailText.textContent = emailMassage;
  $emailInput.after($emailText);

  $passwordInput.classList.add("warning");
  const $passwordText = document.createElement("span");
  $passwordText.classList.add("warning-text");
  $passwordText.textContent = passwordMassage;
  $passwordInput.after($passwordText);
}

async function postInputs(url, userProfile) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userProfile),
  });
  return res;
}

async function FindEmail(url, userEmail) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userEmail),
    });
    if (response.ok) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error("에러발생");
  }
}

export {
  reset,
  eyeOnOff,
  writeError,
  displayError,
  checkerEmail,
  checkerInputBoxs,
  postInputs,
  testUserFile,
  FindEmail,
  isIncludePassword,
};
