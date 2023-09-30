const emailBox = document.querySelector('#email');
const inputEmail = emailBox.children[0];
const errorEmail = emailBox.children[1]; //이메일 관련 에러메세지

const pwBox = document.querySelector('#password');
const pwWrapper = document.querySelector('.pw_wrapper');
const inputPw = pwWrapper.children[0];
const errorPw = pwBox.children[1];

function enterError(event){ //아무 입력을 안했을 경우 error
    if(event.target.value) return;
    event.target.classList.add('error_box');
    if(event.target === inputEmail){ //이메일 input 태그에 값이 없는 경우
        errorEmail.textContent = "이메일을 입력해주세요.";
    }
    else if(event.target === inputPw){
        errorPw.textContent = "비밀번호를 입력해주세요.";
    }

}
function enterReset(event){
    //값이 입력되고 있는 중일 때는 에러 메세지 삭제
    if(event.target === inputEmail){
        errorEmail.textContent = "";
        inputEmail.classList.remove('error_box');
    }
    else if(event.target === inputPw){ 
        errorPw.textContent = "";
        inputPw.classList.remove('error_box');
    }
}

let emailType = /[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/i;
function checkEmail(event){ //이메일 형식에 맞지 않는 경우
    if(!event.target.value) return; //아무것도 입력 안 된 경우는 pass
    if(!emailType.test(event.target.value)){
        errorEmail.textContent = "올바른 이메일 주소가 아닙니다.";
        inputEmail.classList.add('error_box');
    }
}

const form = document.querySelector('form');
function checkLogin(event){
    event.preventDefault();
    let testEmail = 'test@codeit.com';
    let testPw = 'codeit101';
    if(!inputEmail.value || !inputPw.value) return; //두 값이 모두 있어야만 확인
    if(inputEmail.value === testEmail && inputPw.value === testPw) {
        location.href = '/folder';
    }
    else{
        errorEmail.textContent = '이메일을 확인해주세요.';
        inputEmail.classList.add('error_box');
        errorPw.textContent = '비밀번호를 확인해주세요.';
        inputPw.classList.add('error_box');
    }
}

//이메일
inputEmail.addEventListener('focusout', enterError);
inputEmail.addEventListener('input', enterReset);
inputEmail.addEventListener('focusout', checkEmail);

//비밀번호
inputPw.addEventListener('focusout', enterError);
inputPw.addEventListener('input', enterReset);

//로그인 버튼
form.addEventListener('submit', checkLogin);