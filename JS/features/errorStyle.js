function errorStyle(e, message){
  const $spanError = e.currentTarget.children[2];
  e.target.classList.add('red_border'); 
  $spanError.classList.add('show');
  $spanError.textContent = message; 
}

function removeErrorStyle(e){
  const $spanError = e.currentTarget.children[2];
  e.target.classList.remove('red_border')
  $spanError.classList.remove('show');
}

export {errorStyle, removeErrorStyle}