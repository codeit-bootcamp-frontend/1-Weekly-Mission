import * as tags from "./features/tags.js"

// [form input box 유효성 검사]

// 이메일 유효성 검사
import validationEmail from "./features/validationEmail.js";

const $emailValue = tags.$emailInput.value;

tags.$emailWrapper.addEventListener('focusout',(e) => validationEmail(e, $emailValue));


// function verificationPassword (){
//   if ( $inputPassword.value.length === 0){
//     spanErrorPassword.textContent = "비밀번호를 입력해주세요.";
//     spanErrorPassword.classList.add('show');
//     spanErrorPassword.previousElementSibling.classList.add('red_border');
//     flag = false;
//   } else {
//     spanErrorPassword.classList.remove('show')
//     spanErrorPassword.previousElementSibling.classList.remove('red_border');
//   }
// }

// function successToAccess(){
//   if ($inputEmail.value === "test@codeit.com" && $inputPassword.value === "codeit101"){
//     flag = true;
//   } else {
//     flag = false;
//   }
// }



// function submitVerification (e){
//   e.preventDefault();
//   verificationEmail();
//   verificationPassword();
//   successToAccess()


//   if (flag === true){
//     let link = '../folder.html';
//     window.location.href = link;
//   } else {
//     spanErrorEmail.textContent = "이메일을 확인해주세요.";
//     spanErrorPassword.textContent = "비밀번호를 확인해주세요.";
//     spanErrorEmail.classList.add('show');
//     spanErrorPassword.classList.add('show');
//     spanErrorEmail.previousElementSibling.classList.add('red_border');
//     spanErrorPassword.previousElementSibling.classList.add('red_border');
    
//   }
// }

// $inputPassword.addEventListener('focusout', verificationPassword);

// $submitBtn.addEventListener('click', submitVerification);

// [eyeToggle 이벤트]

import eyeToggle from "./features/eyeToggle.js";


const $eye = document.querySelector('#eye')

$eye.addEventListener('click', (e) => eyeToggle(e));


