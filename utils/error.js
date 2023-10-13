// 에러메시지 

export function addErrorMessage(inputField, errorElement, errorMessage) {
  inputField.classList.add('error');
  errorElement.textContent = errorMessage;
}

export function removeErrorMessage(inputField, errorElement) {
  inputField.classList.remove('error');
  errorElement.textContent = '';
}