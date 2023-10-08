function isSignUpPassword(isSignUpPage, $input) {
  return !(!isSignUpPage && $input.id === 'password')
}

// 이메일 중복 확인 함수
function isDuplication(isSignUpPage, value) {
  const testEmail = 'test@codeit.com'
  if(isSignUpPage) {
    return testEmail === value
  }
}

export { isSignUpPassword, isDuplication }