// 비밃번호 보여주는 함수
const pwOnoff = curry((f, event) => {
  event.preventDefault();
  const $img = f(event.currentTarget).img
  const $input = f(event.currentTarget).input;
  $input.classList.toggle(variable.activeClass);
  if ($input.classList.contains(variable.activeClass)) {
    $img.setAttribute("src", variable.imgs.on);
    $input.setAttribute("type", "text");
  } else {
    $img.setAttribute("src", variable.imgs.off);
    $input.setAttribute("type", "password");
  }
  // 사용자 편의를 위해 바로 input 태그로 focuse를 넣었습니다.
  $input.focus();
})