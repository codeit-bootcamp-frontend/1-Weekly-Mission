import {
  passwordInput,  
  eyeButton1, eyeButton2} from './tags';

const eyeOn = 'on';

// eye-button 클릭시 스타일 적용
function changeTypeEyeButton1(type) {
  eyeButton1.classList.toggle(eyeOn);
  passwordInput.type = type;
}

// eye-button 클릭시 표현 함수
function showPassword1() {
  if (passwordInput.type === "password") {
    changeTypeEyeButton1('text');
  } else {
    changeTypeEyeButton1('password');
  }
}

// function changeTypeEyeButton2(type) {
//   eyeButton2.classList.toggle(eyeOn);
//   checkPasswordInput.type = type;
// }

// function showPassword2() {
//   if (checkPasswordInput.type === "password") {
//     changeTypeEyeButton2('text');
//   } else {
//     changeTypeEyeButton2('password');
//   }
// }

export {showPassword1};
