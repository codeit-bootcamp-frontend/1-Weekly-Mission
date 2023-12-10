function validateEmail(email: string) {
  const PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return PATTERN.test(email);
}

function validatePassword(password: string) {
  const PATTERN = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return PATTERN.test(password);
}

export { validateEmail, validatePassword };
