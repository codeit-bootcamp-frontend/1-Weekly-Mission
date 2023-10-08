const REG_EMAIL = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;
const REG_PASSWORD = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
function isValidEmail(email) {
  return REG_EMAIL.test(email);
}

function isValidPassword(password) {
  return REG_PASSWORD.test(password);
}

export {isValidEmail, isValidPassword};


