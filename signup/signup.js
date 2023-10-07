import {
  emailInput,
  pwInput,
  pwCheckInput,
  pwWrapper,
  signinBtn,
  eyeBtn,
  pwCheckEyeBtn,
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
  emailNotMachedMsg,
  handlePwInputInvalidCheck,
  pwRegex,
  pwInvalidMsg,
  handleEyeBtnClick,
} from "../utils/auth.js";

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
  handlePwInputDoubleCheck(pwInput, pwCheckInput, emailNotMachedMsg)
);
pwInput.addEventListener("blur", () =>
  handlePwInputInvalidCheck(pwRegex, pwInput, pwInvalidMsg)
);
eyeBtn.addEventListener("click", () => handleEyeBtnClick(pwInput, eyeBtn));
pwCheckEyeBtn.addEventListener("click", () =>
  handleEyeBtnClick(pwCheckInput, pwCheckEyeBtn)
);
