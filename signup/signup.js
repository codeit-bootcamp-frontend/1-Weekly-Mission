import {
  emailInput,
  pwInput,
  pwCheckInput,
  pwWrapper,
  signinBtn,
  eyeBtn,
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
