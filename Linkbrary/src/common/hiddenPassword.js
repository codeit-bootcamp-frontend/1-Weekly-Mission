"use strict";

const eyeIcons = document.querySelectorAll(".form__input--selected");

// 비밀번호 가리기 토글 기능 - selected 상태에 따라 type과 src를 변경
const hiddenPasswordToggle = (e) => {
  const input = e.target.previousElementSibling;
  input.classList.toggle("selected");

  const isSelected = input.classList.contains("selected");
  if (isSelected) {
    input.setAttribute("type", "text");
    e.target.setAttribute("src", "images/eye-on.svg");
  } else {
    input.setAttribute("type", "password");
    e.target.setAttribute("src", "images/eye-off.svg");
  }
};

eyeIcons.forEach((icon) =>
  icon.addEventListener("click", hiddenPasswordToggle)
);
