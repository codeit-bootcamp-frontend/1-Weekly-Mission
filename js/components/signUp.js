function isSignUpPassword(isSignUpPage, $input) {
  return !(!isSignUpPage && $input.id === 'password')
}

export { isSignUpPassword }