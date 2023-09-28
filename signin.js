const inputFrame = document.querySelector(".inputFrame");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const pattern = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;


function emailValidChk(email) {
  if (pattern.test(email) === false) { return false; }
  else { return true; }
}


function showErrorMessage(e) {
  const inputbox = e.target.parentElement;
  const p = document.createElement("p");

  switch (e.target.id) {

    case "email":
      if (e.target.value === "") {
        p.textContent = "이메일을 입력해주세요.";
      } else if (!emailValidChk(email.value)) {
        p.textContent = "올바른 이메일 주소가 아닙니다.";
      }
      break;

    case "password":
      if (e.target.value === "") {
        p.textContent = "비밀번호를 입력해주세요.";
      }
      break;


    default:
      return;
  }

  if (p.textContent) {
    p.classList.add("error");
    inputbox.append(p);
  }
}


function userAuthentication(e){
  const inputEmail = document.querySelector(".email");
  const inputPassword = document.querySelector(".password");

  
  if (email.value === "test@codeit.com" && password.value === "codeit101"){
    window.location.href = "/folder";
  } else {
    p1.textContent = "이메일을 확인해주세요.";
    p2.textContent = "비밀번호를 확인해주세요.";
    p1.classList.add("error");
    p2.classList.add("error");
    inputEmail.append(p1);
    inputPassword.append(p2);

  }

}

inputFrame.addEventListener("focusout", showErrorMessage);

password.addEventListener("change", userAuthentication);