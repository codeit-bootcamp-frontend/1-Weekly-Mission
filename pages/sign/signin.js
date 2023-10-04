//올바른 이메일 확인 함수(구글링)
function email_check(email) {
	const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return reg.test(email);
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
  password_empty_error : "비밀번호를 입력해 주세요",
  email_check_error : "이메일을 확인해 주세요",
  password_check_error: "비밀번호를 확인해 주세요",
}

// 이메일 부분 //
// 과제에서 요구된 조건을 만족시키고, 올바른 이메일 형식이 입력되었을 때 focusout하면 원래대로 돌아감
const email_input = document.querySelector('#email_input')
const email_input_check = document.querySelector("#email_check")

function email_error () {
  
  if (!email_input.value) {
    error_occur(email_input, email_input_check, messages.email_empty_error)
  } 
    else if (!email_check(email_input.value)) {
    error_occur(email_input, email_input_check, messages.email_type_error)
  } 
    else {
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

  } else {
    error_disappear(password_input, password_input_check)
  }
}

password_input.addEventListener("focusout", password_error)




// 로그인 시도 //
const submit_button = document.querySelector('#submit_button')

function submit_check () {
  if (email_input.value === "test@codeit.com" && password_input.value === "codeit101") {
    location.href = "/pages/folder/folder.html"
  } else {
    error_occur(email_input, email_input_check, messages.email_check_error)
    error_occur(password_input, password_input_check, messages.password_check_error)
  }
}

submit_button.addEventListener("click", submit_check)




// 눈 모양 아이콘 클릭시 패스워드 노출 여부 변화 //
const eye_mark_in_password = document.querySelector('.eye_mark_in_password') 

function password_toggle(e) {
  if (e.target.parentElement.parentElement.children[1].type === "password") {
    password_input.type = "text"
    eye_mark_in_password.src = "/assets/images/eye_on_mark.svg" 
  } else {    
    password_input.type = "password"
    eye_mark_in_password.src = "/assets/images/eye_off_mark.svg" 
  }
}

eye_mark_in_password.addEventListener('click', password_toggle)

