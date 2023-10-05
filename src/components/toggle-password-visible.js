let isPasswordVisible = false;

const togglePasswordVisible = (inputElement, iconElement, eyeIconPath) => {
  const pwIconPath = isPasswordVisible ? eyeIconPath.eye_off : eyeIconPath.eye_on;

  isPasswordVisible = !isPasswordVisible;
  iconElement.setAttribute("src", pwIconPath);
  inputElement.type = isPasswordVisible ? "text" : "password";
};

export default togglePasswordVisible;
