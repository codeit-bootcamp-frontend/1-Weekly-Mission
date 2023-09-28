const passwordBox = document.querySelector('.sign-password');
const eye = passwordBox.querySelector('.eye-button');
const password = passwordBox.querySelector('.sign-input');
let cnt = 1;
function changeEyeButton() {
  let img = document.getElementById('eyeImg');

  if (cnt%2==1) {
    //사선 없는 눈 모양 이미지로 변경
    img.src="./images/eye-on.png";

    //비밀번호 입력값 보이게 만들기
    password.type="text";
  } else {
    //사선 있는 눈 모양 이미지로 변경
    img.src="./images/eye-off.png";

    //비밀번호 입력값 가려지게 만들기
    password.type="password";
  }
  cnt++;
}

eye.addEventListener('click', changeEyeButton);