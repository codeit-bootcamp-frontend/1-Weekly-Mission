// 에러메시지 

export function addErrorMessage(inputElement, errorElement, errorMessage) {
  inputElement.style.borderColor = 'red';
  errorElement.textContent = errorMessage;
  errorElement.classList.add('error');
}

export function removeErrorMessage(inputElement, errorElement) {
  inputElement.style.borderColor = '#CCD5E3';
  errorElement.textContent = '';
  inputElement.classList.remove('error');
}
