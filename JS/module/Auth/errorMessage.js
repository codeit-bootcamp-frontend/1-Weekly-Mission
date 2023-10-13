
function errorStyle(inputTag, errorTag, message){;
  inputTag.classList.add('red_border'); 
  errorTag.classList.add('show');
  errorTag.textContent = message; 
}

function removeErrorStyle(inputTag, errorTag){
  inputTag.classList.remove('red_border')
  errorTag.classList.remove('show');
}

export {errorStyle, removeErrorStyle}
