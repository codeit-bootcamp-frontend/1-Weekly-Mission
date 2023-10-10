export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export function isValidPassword(password) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
}
