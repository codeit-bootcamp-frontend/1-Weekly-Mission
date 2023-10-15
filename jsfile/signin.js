import {
  reset,
  eyeOnOff,
  writeError,
  displayError,
  checkerEmail,
  checkerInputBoxs,
  postInputs,
  testUserFile,
} from "./util.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const eyeBtn = document.querySelector(".eye-button");
const signForm = document.querySelector("form");

function checkerPassword(e) {
  if (passwordInput.value === "") {
    displayError(e.target, "비밀번호를 입력해주세요.");
  }
}

async function login(e) {
  e.preventDefault();

  const userChecking =
    emailInput.value === testUserFile.email &&
    passwordInput.value === testUserFile.password;

  if (!userChecking) {
    checkerInputBoxs("이메일을 확인해주세요.", "비밀번호를 확인해주세요");
    return;
  }

  postInputs("https://bootcamp-api.codeit.kr/api/sign-in", testUserFile).then(
    async (response) => {
      if (response.ok) {
        const link = "../folder.html";
        window.location.assign(link);
        const { data } = await response.json();
        localStorage.setItem("access-token", data.accessToken);
      }
    }
  );
}

emailInput.addEventListener("focusout", checkerEmail);
emailInput.addEventListener("focusin", reset);

passwordInput.addEventListener("focusout", checkerPassword);
passwordInput.addEventListener("focusin", reset);

signForm.addEventListener("submit", login);
eyeBtn.addEventListener("click", eyeOnOff);
