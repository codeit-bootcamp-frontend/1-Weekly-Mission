import { emailInput, pwInput, email, password, showError } from "./user.js";
import config from "../../config/api.js";
import callApi from "../../config/index.js";

const loginBtn = document.querySelector("#loginBtn");
const APP_API = config.APP_API;

const handleLogin = async (emailValue, pwValue) => {
  const data = {
    email: emailValue,
    password: pwValue,
  };
  try {
    const response = await fetch(
      `${APP_API}/api/sign-in`,
      callApi("POST", data)
    );
    const result = await response.json();

    if (response.status === 200) {
      localStorage.setItem("accessToken", result.data.accessToken);
      location.href = "folder.html";
    }

    if (response.status === 400) {
      showError(password, "비밀번호를 확인해주세요");
      showError(email, "이메일을 확인해주세요");
      return;
    }
  } catch (e) {
    alert(e.message);
  }
};

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  handleLogin(emailInput.value, pwInput.value);
});
