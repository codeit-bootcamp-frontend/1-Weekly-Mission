import { passwordInputsEl, eyeIconsEl, eyeButtonsEl } from "../constants/tags.js";
import { EYE_ICON_PATH } from "../constants/common.js";
import togglePasswordVisible from "./toggle-password-visible.js";

const generateEyeButton = () => {
  eyeButtonsEl.forEach((eyeButtonEl, index) => {
    eyeButtonEl.addEventListener("click", () => {
      const passwordInputEl = passwordInputsEl[index];
      const eyeIconEl = eyeIconsEl[index];

      togglePasswordVisible(passwordInputEl, eyeIconEl, EYE_ICON_PATH);
    });
  });
};

export default generateEyeButton;
