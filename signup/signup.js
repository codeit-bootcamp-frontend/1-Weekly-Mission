import {
  emailInput,
  pwInput,
  pwWrapper,
  signinBtn,
  eyeBtn,
} from "../utils/tags.js";
import { handleEmailInputEmptyValueCheck } from "../utils/auth.js";
import { emailEmptyMsg, emailInvalidMsg } from "../utils/auth.js";

emailInput.addEventListener("blur", () =>
  handleEmailInputEmptyValueCheck(emailInput, emailEmptyMsg)
);
