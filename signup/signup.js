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
import { emailEmptyMsg, emailInvalidMsg, emailRegex } from "../utils/auth.js";

emailInput.addEventListener("blur", () =>
  handleEmailInputEmptyValueCheck(emailInput, emailEmptyMsg)
);
emailInput.addEventListener("blur", () =>
  handleEmailInputInvalidValueCheck(emailRegex, emailInput, emailInvalidMsg)
);
