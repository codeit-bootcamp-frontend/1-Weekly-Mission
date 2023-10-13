export function submitAccepted() {
  emailValidation();
  passwordValidation();
  password2Validation();
  const isAllValid = checkErrorMessagesExist();
  if (isAllValid) {
    removeErrorStyle($tags.inputEmail, $tags.errorEmail);
    removeErrorStyle($tags.inputPassword, $tags.errorPassword);
    removeErrorStyle($tags.inputPassword2, $tags.errorPassword2);
    window.location.href = "../folder.html";
  }
}

export default submitAccepted;
