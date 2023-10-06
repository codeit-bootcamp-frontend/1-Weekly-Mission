import {
  emailInput,
  pwInput,
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
