// submit 시, 값 검증 함수
const vaildate = curry((f, event) => {
  event.preventDefault();
  const [emValue, pwValue] = Array.from($dom.inputs).map(($input) => $input.value);
  const emCheck = emValue === variable.devAccount[$dom.inputEm.id];
  const pwCheck = pwValue === variable.devAccount[$dom.inputPw.id];
  // 오류가 생기면 페이지 이동 X
  if (isError(f, event)) return;
  // 유효한 회원가입이면 이동
  if (variable.isSignup) {
    location.href = variable.nextPage
    return;
  }
  // 테스트 계정과 동일하면 로그인
  if (emValue && pwValue) {
    emCheck ? null : f($dom.inputEm).classAdd('invaildError')
    pwCheck ? null : f($dom.inputPw).classAdd('invaildError')
  }
  if (emCheck && pwCheck) {
    location.href = variable.nextPage
  }
})