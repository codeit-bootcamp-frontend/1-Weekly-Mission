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

  if (e.target.id === "email") {
    if (email.value === "") {
      p.textContent = "이메일을 입력해주세요";
      p.classList.add("error");
      inputbox.append(p);
    } else if (!emailValidChk(email.value)) {
      p.textContent = "올바른 이메일 주소가 아닙니다.";
      p.classList.add("error");
      inputbox.append(p);
    }
  } else if (e.target.id === "password") {
    if (password.value === "") {
      p.textContent = "비밀번호를 입력해주세요";
      p.classList.add("error");
      inputbox.append(p);
    }

  }


}



email.addEventListener("focusout", showErrorMessage);
password.addEventListener("focusout", showErrorMessage);
password.addEventListener("change", showErrorMessage);