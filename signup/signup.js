import {
  emailInput,
  pwInput,
  pwCheckInput,
  eyeBtn,
  pwCheckEyeBtn,
  signupBtn,
} from "../utils/tags.js";
import {
  emailDuplicatedMsg,
  handleEmailInputEmptyValueCheck,
  handleEmailInputInvalidValueCheck,
  handleInputDuplicatedCheck,
  emailEmptyMsg,
  emailInvalidMsg,
  emailRegex,
  handlePwInputDoubleCheck,
  handlePwInputInvalidCheck,
  pwRegex,
  pwInvalidMsg,
  handleEyeBtnClick,
  pwNotMachedMsg,
} from "../utils/auth.js";

function handleSignup() {
  handleEmailInputEmptyValueCheck(emailInput, emailEmptyMsg);
  handleEmailInputInvalidValueCheck(emailRegex, emailInput, emailInvalidMsg);
  handlePwInputDoubleCheck(pwInput, pwCheckInput, pwNotMachedMsg);
  handlePwInputInvalidCheck(pwRegex, pwInput, pwInvalidMsg);
  if (
    !emailInput.querySelector("input-error") &&
    !pwInput.querySelector("input-error")
  ) {
    location.href = "/folder";
  }
}

function handleSignupEnter(e) {
  if (e.key === "Enter") {
    handleSignup();
  }
}

emailInput.addEventListener("blur", () =>
  handleEmailInputEmptyValueCheck(emailInput, emailEmptyMsg)
);
emailInput.addEventListener("blur", () =>
  handleEmailInputInvalidValueCheck(emailRegex, emailInput, emailInvalidMsg)
);
emailInput.addEventListener("blur", () =>
  handleInputDuplicatedCheck(emailInput, emailDuplicatedMsg)
);
pwCheckInput.addEventListener("blur", () =>
  handlePwInputDoubleCheck(pwInput, pwCheckInput, pwNotMachedMsg)
);
pwInput.addEventListener("blur", () =>
  handlePwInputInvalidCheck(pwRegex, pwInput, pwInvalidMsg)
);
eyeBtn.addEventListener("click", () => handleEyeBtnClick(pwInput, eyeBtn));
pwCheckEyeBtn.addEventListener("click", () =>
  handleEyeBtnClick(pwCheckInput, pwCheckEyeBtn)
);
signupBtn.addEventListener("click", handleSignup);
emailInput.addEventListener("keyup", handleSignupEnter);
pwInput.addEventListener("keyup", handleSignupEnter);
pwCheckInput.addEventListener("keyup", handleSignupEnter);
