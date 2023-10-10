const togglePasswordVisible = (inputElement, iconElement, eyeIconPath) => {
  let isPasswordVisible = inputElement.type === "text";

  const pwIconPath = isPasswordVisible ? eyeIconPath.eye_off : eyeIconPath.eye_on;

  isPasswordVisible = !isPasswordVisible;

  iconElement.setAttribute("src", pwIconPath);
  inputElement.type = isPasswordVisible ? "text" : "password";
};

export default togglePasswordVisible;
