export function toggleEyeIcon(inputElement, toggleImage) { 
  if(inputElement.type === "password") {
    inputElement.type = "text";
    toggleImage.src = '/images/eye-on.svg';
  } else {
    inputElement.type = "password";
    toggleImage.src = '/images/eye-off.svg';
  }
}