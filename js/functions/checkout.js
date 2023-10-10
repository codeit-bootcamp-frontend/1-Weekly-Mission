
// focusout 시, 값 확인 함수
const checkout = curry((f, { currentTarget: $input }) => {
  //값이 없을때
  if (!$input.value) {
    f($input).classAdd('emptyError');
    return;
  }
  // 이메일 형태 확인, 회원가입 페이지 이메일 중복 확인
  if ($input.id === $dom.inputEm.id) {
    variable.reg[$input.id].test($input.value) ? null : f($input).classAdd('typeError');
    variable.isSignup && $input.value === variable.devAccount[$dom.inputEm.id] ? f($input).classAdd('occupiedError') : null;
  }
  // 비밀번호 형태 확인
  if ($input.id === $dom.inputPw.id) {
    userPw = $input.value;
    $input.id === $dom.inputPw.id &&
      variable.reg[$input.id].test(userPw) ? null : f($input).classAdd('typeError');
  }
  // 회원가입 페이지 비밀번호 일치 확인
  if ($input.id === $dom.inputCh?.id) {
    $input.value === userPw ? null : f($input).classAdd('typeError');
  }
})

// 에러 메시지 초기화 함수, 첫번째 인자로 위치를 지정하는 함수를 받습니다.
// 가독성을 위해 currentTarget을 $input으로 직관적인 변수로 바꾸었습니다.
const reset = curry((f, { currentTarget: $input }) => {
  f($input).classRemove();
})

// 모든 input 태그 값을 조회해서 에러가 있는지 확인하는 함수
const isError = (f, { currentTarget: target }) => {
  return Array.from(f(target).inputs)
    .map($input => { checkout(f, { currentTarget: $input }); return $input })
    .some($input => $input.classList.contains(variable.errClass))
}