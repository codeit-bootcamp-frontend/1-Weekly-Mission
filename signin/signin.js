const emailBox = document.querySelector('#email');
const inputEmail = emailBox.children[0];
const errorEmail = emailBox.children[1]; //이메일 관련 에러메세지

const pwBox = document.querySelector('#password');
const pwWrapper = document.querySelector('.pw_wrapper');
const inputPw = pwWrapper.children[0];
const errorPw = pwBox.children[1];

function enterEmailError(event){ //이메일을 입력해주세요 error
    if(inputEmail.value === ''){ //이메일 input 태그에 값이 없는 경우
        errorEmail.textContent = "이메일을 입력해주세요.";
        inputEmail.classList.add('error_box');
    }
}
function enterEmailReset(event){
    //값이 입력되고 있는 중일 때는 에러 메세지 삭제
    if(errorEmail.textContent === "이메일을 입력해주세요."){ //에러 메세지가 있으면
        errorEmail.textContent = "";
        inputEmail.classList.remove('error_box');
    }
}

//이메일
inputEmail.addEventListener('input', enterEmailReset);
inputEmail.addEventListener('focusout', enterEmailError);

function enterPwError(event){
    if(inputPw.value === ''){
        errorPw.textContent = "비밀번호를 입력해주세요.";
        inputPw.classList.add('error_box');
    }
}
function enterPwReset(event){
    if(errorPw.textContent === "비밀번호를 입력해주세요."){ //에러 메세지가 있으면
        errorPw.textContent = "";
        inputPw.classList.remove('error_box');
    }
}
//비밀번호
inputPw.addEventListener('focusout', enterPwError);
inputPw.addEventListener('input', enterPwReset);