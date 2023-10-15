function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return document.querySelectorAll(selector);
}


function toggleEye(e) {
  e.stopPropagation();
  const isEyeOn = e.target.src.includes("eye-on");
  e.target.src = `./images/signin/${isEyeOn ? "eye-off" : "eye-on"}.svg`;
  const $passwordInput = e.target.previousElementSibling;
  $passwordInput.type = isEyeOn ? "password" : "text";

}

function displayError(errorLocation, errorMessage) {
  errorLocation.textContent = errorMessage;
}



function autoRedirect() {
  // 페이지가 로드될 때 실행되는 코드

  // 로컬 스토리지에서 accessToken을 가져옵니다.
  const accessToken = localStorage.getItem("access-token");

  // 만약 로컬 스토리지에 accessToken이 존재하면, "/folder" 페이지로 리디렉션합니다.
  if (accessToken) {
    window.location.href = "/folder";
  }
}

export { $, $all, toggleEye, displayError, autoRedirect };
