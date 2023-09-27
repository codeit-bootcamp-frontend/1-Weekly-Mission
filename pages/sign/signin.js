
// 이메일 부분 //

const email_input = document.querySelector('#email_input')
const email_input_check = document.querySelector("#email_input_check_message")

function email_error () {
  if (email_input.value === "") {
    email_input_check.innerHTML = "이메일을 입력해 주세요";
    email_input_check.style.fontSize = "1.4rem";
    email_input_check.style.color = "red";   
    email_input.style.borderColor = '#FF5B56';
    email_input.style.marginBottom = '0.6rem'
  } 
    else if (email_input.value === "1") {
    email_input_check.innerHTML = "올바른 이메일 형식이 아닙니다.";
    email_input_check.style.fontSize = "1.4rem";
    email_input_check.style.color = "red";    
    email_input.style.borderColor = '#FF5B56';
    email_input.style.marginBottom = '0.6rem';
  }
}

email_input.addEventListener("focusout", email_error)



// 패스워드 부분 //

const password_input = document.querySelector('#password_input')
const password_input_check = document.querySelector("#password_input_check_message")

function password_error () {
  if (password_input.value === "") {
    password_input_check.innerHTML = "비밀번호를 입력해 주세요"
    password_input_check.style.fontSize = "1.4rem";
    password_input_check.style.color = "red";   
    password_input.style.borderColor = '#FF5B56';   
    password_input.style.marginBottom = '0.6rem'
  } 
}

password_input.addEventListener("focusout", password_error)


// 로그인 시도 //

const submit_button = document.querySelector('#submit_button')

function submit_check () {
  if (email_input.value === "test@codeit.com" && password_input.value === "codeit101") {
    location.href = "/index.html"
  } else {
    email_input_check.innerHTML = "이메일을 확인해 주세요";
    email_input_check.style.fontSize = "1.4rem";
    email_input_check.style.color = "red";    
    email_input.style.borderColor = '#FF5B56';
    email_input.style.marginBottom = '0.6rem';
    password_input_check.innerHTML = "비밀번호를 확인해 주세요"
    password_input_check.style.fontSize = "1.4rem";
    password_input_check.style.color = "red";   
    password_input.style.borderColor = '#FF5B56';   
    password_input.style.marginBottom = '0.6rem'

  }
}

submit_button.addEventListener("click", submit_check)


//보기만해도 끔찍한 코드다 잘 굴러는 감 