//올바른 이메일 확인 함수
function emailCheck(email) {
	const emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return emailReg.test(email);
}
//올바른 패스워드 확인 함수
function passwordCheck(password) {
	const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
	return passwordReg.test(password);
}


//에러 메세지 발생 시 사용할 함수//
function error_occur (input, input_check, message) {
  input.classList.add("error_box")
  input_check.classList.add("check_message")
  input_check.innerHTML = message
}

//에러 메세지 소멸 시 사용할 함수(조건 만족 시)//
function error_disappear (input, input_check) {
  input.classList.remove("error_box")
  input_check.classList.remove("check_message")
  input_check.innerHTML = ""
}

//에러 메세지 객체 //
const messages = {
  email_empty_error : "이메일을 입력해 주세요",
  email_type_error : "올바른 이메일 형식이 아닙니다",
  email_check_error : "이메일을 확인해 주세요",
  email_duplicate_error : "이미 사용중인 이메일입니다",
  password_empty_error : "비밀번호를 입력해 주세요",
  password_check_error: "비밀번호를 확인해 주세요",
  password_type_error : "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요",
  password_repeat_error : "비밀번호가 일치하지 않아요"
}

// 이메일 부분 //
// 과제에서 요구된 조건을 만족시키고, 올바른 이메일 형식이 입력되었을 때 focusout하면 원래대로 돌아감
const email_input = document.querySelector('#email_input')
const email_input_check = document.querySelector("#email_check")

function email_error () {
  
  if (!email_input.value) {
    error_occur(email_input, email_input_check, messages.email_empty_error)
  } else if (!emailCheck(email_input.value)) {
    error_occur(email_input, email_input_check, messages.email_type_error)
  } else if (email_input.value === "test@codeit.com") {
    error_occur(email_input, email_input_check, messages.email_duplicate_error)
  } else {
    error_disappear(email_input, email_input_check)
  }
}

email_input.addEventListener("focusout", email_error)


// 패스워드 부분 //
// 과제에서 요구된 조건을 만족시키고, 올바른 비밀번호 형식이 입력되었을 때 focusout하면 원래대로 돌아감
const password_input = document.querySelector('#password_input')
const password_input_check = document.querySelector("#password_check")

function password_error () {
  if (!password_input.value) {
    error_occur(password_input, password_input_check, messages.password_empty_error)
  } else if (!passwordCheck(password_input.value)) {
    error_occur(password_input, password_input_check, messages.password_type_error)
  }  else {
    error_disappear(password_input, password_input_check)
  }
}

password_input.addEventListener("focusout", password_error)


// 패스워드 확인 부분 //
const password_repeat_input = document.querySelector('#password_repeat_input')
const password_repeat_input_check = document.querySelector('#password_repeat_check')

function password_repeat_error () {
  if (password_input.value != password_repeat_input.value) {
    error_occur(password_repeat_input, password_repeat_input_check, messages.password_repeat_error)
  }
  else {
    error_disappear(password_repeat_input, password_repeat_input_check)
  }
}

password_repeat_input.addEventListener('focusout',password_repeat_error)



// 회원가입 시도 //
const submit_button = document.querySelector('#submit_button')

function signin_submit_check () {
  if (email_input.value != "test@codeit.com" && passwordCheck(password_input.value) && password_input.value === password_repeat_input.value ) {
    location.href = "/pages/folder/folder.html"
  } else {
    error_occur(email_input, email_input_check, messages.email_check_error)
    error_occur(password_input, password_input_check, messages.password_check_error)
    error_occur(password_repeat_input, password_repeat_input_check, messages.password_check_error)
  }
}

submit_button.addEventListener("click", signin_submit_check)
window.addEventListener("keypress", (e) => e.code === 'Enter' && signin_submit_check())




// 눈 모양 아이콘 클릭시 패스워드 노출 여부 변화 //
const eye_mark_in_password = document.querySelector('.eye_mark_in_password') 
const eye_mark_in_password_repeat = document.querySelector('.eye_mark_in_password_repeat')

function password_toggle(e) {
    if (e.target.parentElement.parentElement.children[1].type === "password") {
      password_input.type = "text"
      password_repeat_input.type ="text"
      eye_mark_in_password.src = "/assets/images/eye_on_mark.svg" 
      eye_mark_in_password_repeat.src = "/assets/images/eye_on_mark.svg"
    } else {    
      password_input.type = "password"
      password_repeat_input.type ="password"
      eye_mark_in_password.src = "/assets/images/eye_off_mark.svg" 
      eye_mark_in_password_repeat.src = "/assets/images/eye_off_mark.svg"    
    }
}

eye_mark_in_password.addEventListener('click', password_toggle)
eye_mark_in_password_repeat.addEventListener('click', password_toggle)

