//비밀번호 표시
function viewPassword(e) {
    const input = e.target.parentElement.firstElementChild;
    if (input.type == 'password') {
      input.setAttribute('type', 'text');
      e.target.setAttribute('src', './img/eye-on.svg');
    } else {
      input.setAttribute('type', 'password');
      e.target.setAttribute('src', './img/eye-off.svg');
    }
  }

  export {viewPassword}