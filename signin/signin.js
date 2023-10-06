import {
  emailEmptyMsg,
  emailInvalidMsg,
  pwEmptyMsg,
  emailIncorrectMsg,
  pwIncorrectMsg,
  emailRegex,
} from "../utils/auth.js";
import {
  emailInput,
  pwInput,
  pwWrapper,
  signinBtn,
  eyeBtn,
} from "../utils/tags.js";
import {
  handleEmailInputEmptyValueCheck,
  handleEmailInputInvalidValueCheck,
} from "../utils/auth.js";

function handlePasswordInputEmptyValueCheck(e) {
  if (!e.target.value.trim()) {
    pwWrapper.after(pwEmptyMsg);
    pwInput.classList.add("input-error");
  } else {
    pwEmptyMsg.remove();
    pwInput.classList.remove("input-error");
  }
}

function handleSigninBtnClick() {
  const testEmail = "test@codeit.com";
  const testPw = "codeit101";
  if (emailInput.value.trim() !== testEmail) {
    emailInput.classList.add("input-error");
    emailInput.after(emailIncorrectMsg);
  } else {
    emailIncorrectMsg.remove();
  }

  if (pwInput.value.trim() !== testPw) {
    pwWrapper.after(pwIncorrectMsg);
    pwInput.classList.add("input-error");
  } else {
    pwIncorrectMsg.remove();
  }

  if (emailInput.value.trim() === testEmail && pwInput.value.trim === testPw) {
    location.href = "/folder";
  }
}

function handleEyeBtnClick() {
  if (pwInput.getAttribute("type") === "password") {
    pwInput.setAttribute("type", "text");
    eyeBtn.firstElementChild.setAttribute("src", "/assets/common/eye-on.svg");
  } else {
    pwInput.setAttribute("type", "password");
    eyeBtn.firstElementChild.setAttribute("src", "/assets/common/eye-off.svg");
  }
}

emailInput.addEventListener("blur", () =>
  handleEmailInputEmptyValueCheck(emailInput, emailEmptyMsg)
);
emailInput.addEventListener("blur", () =>
  handleEmailInputInvalidValueCheck(emailRegex, emailInput, emailInvalidMsg)
);
pwInput.addEventListener("blur", handlePasswordInputEmptyValueCheck);
signinBtn.addEventListener("click", handleSigninBtnClick);
eyeBtn.addEventListener("click", handleEyeBtnClick);
