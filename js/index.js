import { login } from "./tags.js";

const goToLoginPage = () => (location.href = "../pages/signin.html");
const goToFolderPage = () => (location.href = "../pages/folder.html");

const checkAccessToken = () => {
  console.log(login);
  let token = localStorage.getItem("login-token");
  if (token) {
    return goToFolderPage();
  } else {
    return goToLoginPage();
  }
};

login.addEventListener("click", checkAccessToken);
