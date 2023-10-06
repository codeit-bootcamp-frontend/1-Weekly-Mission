const eyeIcons = document.querySelectorAll(".form__input--selected");

// 비밀번호 가리기 토글 기능 - selected 상태에 따라 type과 src를 변경
const hiddenPasswordToggle = (e) => {
  const input = e.target.previousElementSibling;
  input.classList.toggle("selected");

  const isSelected = input.classList.contains("selected");
  const pwIconPath = isSelected ? "images/eye-on.svg" : "images/eye-off.svg";

  input.setAttribute("type", isSelected ? "text" : "password");
  e.target.setAttribute("src", pwIconPath);
};

eyeIcons.forEach((icon) => icon.addEventListener("click", hiddenPasswordToggle));
