//eye icon toggle 모듈
function eyeToggle (e){
  const isEyeClosed = e.target.getAttribute('status') === 'closed';
  return isEyeClosed ? makeEyeOpened(e) : makeEyeClosed(e) 
}

function makeEyeOpened (e){
  const $inputPassword = e.target.parentElement.children[1] 
  e.target.setAttribute('src', "../Images/eye.svg");
  e.target.setAttribute('status', 'opened');
  $inputPassword.type = "text";
}

function makeEyeClosed (e){
  const $inputPassword = e.target.parentElement.children[1] 
  e.target.setAttribute('src', '../Images/eye-slash.svg');
  e.target.setAttribute('status', 'closed');
  $inputPassword.type = "password";
}

export default eyeToggle;