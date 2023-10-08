const REG_EMAIL = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;

function isValidEmail(email) {
  return REG_EMAIL.test(email);
}


export {isValidEmail};


