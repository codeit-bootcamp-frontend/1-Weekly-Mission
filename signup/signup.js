import {checkerEmail, reset, eyeOnOff} from '../signin/signin.js'; 

const $emailInput = document.querySelector('#email');

function checkerEmailAlreadyInUse(e) {
 if ($emailInput.value === "test@codeit.com") {
    $emailInput.classList.add('warning');
    const $text = document.createElement('span');
    $text.classList.add('warning-text');
    $text.textContent = '이미 사용중인 이메일입니다';
    e.target.after($text);
 }
}

const $passwordInput = document.querySelector('#password');

function ConditionOfPassword(e) {
   const alphabet = "abcdefghijklmnopqrstuvwxyz";
   const numbers = "0123456789";
   const alphaArray = [...alphabet];
   const numArray = [...numbers];
   const passArray = [... $passwordInput.value];
   if (passArray.length >= 8 && passArray.find((i) => alphaArray.includes(i)) && passArray.find((n) => numArray.includes(n))) {
      return
   }
   
   $passwordInput.classList.add('warning');
   const $text = document.createElement('span');
   $text.classList.add('warning-text');
   $text.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
   e.target.after($text);

}

const $rePasswordInput = document.querySelector('#rePassword');

function matchPassword(e) {
   if($passwordInput.value === $rePasswordInput.value) {
      return;
   }
   $rePasswordInput.classList.add('warning');
   const $text = document.createElement('span');
   $text.classList.add('warning-text');
   $text.textContent = '비밀번호가 일치하지 않아요';
   e.target.after($text);
}


const $signUpBtn = document.querySelector('button');

function signUpAftercheckingError(e) {
   const $errorTextList = document.querySelectorAll('warning-text');

   if ($errorTextList.length !== 0){
      return
   }
   
   if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault();
      window.location.href = "../signin/folder.html";

   }     
}
const $eyeOff2 = document.querySelector('.eye-off.second');






$emailInput.addEventListener('focusout', checkerEmail);
$emailInput.addEventListener('focusout', checkerEmailAlreadyInUse);
$emailInput.addEventListener('focusin', reset);

$passwordInput.addEventListener('focusout', ConditionOfPassword);
$passwordInput.addEventListener('focusin', reset);


$rePasswordInput.addEventListener('focusout', matchPassword);
$rePasswordInput.addEventListener('focusin', reset);

$signUpBtn.addEventListener('click', signUpAftercheckingError);
$rePasswordInput.addEventListener('keypress', signUpAftercheckingError);

$eyeOff2.addEventListener('click', eyeOnOff);
