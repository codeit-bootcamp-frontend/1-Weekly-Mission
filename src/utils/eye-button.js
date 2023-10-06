import { passwordInputs, eyeIcons, eyeButtons } from "./tags.js";
import { EYE_ICON_PATH } from "./utils.js";
import togglePasswordVisible from "../components/toggle-password-visible.js";

const generateEyeButton = () => {
  eyeButtons.forEach((eyeButton, index) => {
    eyeButton.addEventListener("click", () => {
      const inputElement = passwordInputs[index];
      const iconElement = eyeIcons[index];
      togglePasswordVisible(inputElement, iconElement, EYE_ICON_PATH);
    });
  });
};

export default generateEyeButton;
