import { login, addLink } from "./tags.js";

const goToLoginPage = () => (location.href = "../pages/signin.html");
const goToSignUpPage = () => (location.href = "../pages/signup.html");
const goToFolderPage = () => (location.href = "../pages/folder.html");

const checkLoginToken = () => {
  let token = localStorage.getItem("login-token");
  if (token) {
    return goToFolderPage();
  } else {
    console.log(token);
    return goToLoginPage();
  }
};

const checkSignUptoken = () => {
  let token = localStorage.getItem("signup-token");
  if (token) {
    return goToFolderPage();
  } else {
    return goToSignUpPage();
  }
};

login.addEventListener("click", checkLoginToken);
addLink.addEventListener("click", checkSignUptoken);
