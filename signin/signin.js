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
import { TEST_EMAIL, TEST_PASSWORD } from "../constants/authConstant.js";

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
  if (emailInput.value.trim() !== TEST_EMAIL) {
    emailInput.classList.add("input-error");
    emailInput.after(emailIncorrectMsg);
  } else {
    emailIncorrectMsg.remove();
  }

  if (pwInput.value.trim() !== TEST_PASSWORD) {
    pwWrapper.after(pwIncorrectMsg);
    pwInput.classList.add("input-error");
  } else {
    pwIncorrectMsg.remove();
  }

  if (
    emailInput.value.trim() === TEST_EMAIL &&
    pwInput.value.trim === TEST_PASSWORD
  ) {
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
