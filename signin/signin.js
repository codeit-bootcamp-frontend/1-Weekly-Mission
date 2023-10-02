const inputEmail = document.querySelector('input[name = "signin_email"]');
const errorEmail = document.querySelector('#email_error');
const inputPw = document.querySelector('input[name = "signin_pw"]');
const errorPw = document.querySelector('#pw_error');
const form = document.querySelector('form');
const eyeIcon = document.querySelector('.eye_icon');

const emailType = /[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/i;

const TEST_EMAIL = 'test@codeit.com';
const TEST_PW = 'codeit101';

let eye_on = 0;

function emptyError(event){
    /* input이 없을 경우, "이메일/비밀번호를 입력해주세요." 에러 메시지 출력하는 함수 */
    const isNotEmpty = event.target.value;
    const isEmail = event.target === inputEmail;

    if(isNotEmpty) return;
    event.target.classList.add('error_box');
    if(isEmail) errorEmail.textContent = "이메일을 입력해주세요.";
    else errorPw.textContent = "비밀번호를 입력해주세요.";
}

function emptyErrorReset(event){
    /* 키보드 입력 중일 때 에러 메세지 삭제하는 함수 */
    const isEmail = event.target === inputEmail;

    event.target.classList.remove('error_box');
    if(isEmail) errorEmail.textContent = "";
    else errorPw.textContent = "";
}

function checkEmail(event){
    /* 이메일 형식 유효성 검사하는 함수 */
    const isEmpty = !event.target.value;
    const isValid = emailType.test(event.target.value);

    if(isEmpty || isValid) return;
    errorEmail.textContent = "올바른 이메일 주소가 아닙니다.";
    inputEmail.classList.add('error_box');
}

function checkLogin(event){
    /* 특정 로그인 시도 시 /folder 페이지로 이동하는 함수 */
    event.preventDefault();
    const isEmptyEmail = !inputEmail.value;
    const isEmptyPw = !inputPw.value;

    if(isEmptyEmail || isEmptyPw) return;
    if(inputEmail.value === TEST_EMAIL && inputPw.value === TEST_PW) {
        location.href = '/folder';
    }
    else{
        errorEmail.textContent = '이메일을 확인해주세요.';
        inputEmail.classList.add('error_box');
        errorPw.textContent = '비밀번호를 확인해주세요.';
        inputPw.classList.add('error_box');
    }
}

function clickEye(event){
    /* 눈 아이콘을 클릭하면 비밀번호 문자열 가리기 설정을 변경해주는 함수 */
    if(!eye_on){ 
        //off -> on
        eye_on = 1;
        eyeIcon.setAttribute('src', '/assets/images/eye-on.svg');
        inputPw.setAttribute('type', '');
        inputPw.setAttribute('placeholder', 'password');
    }
    else{
        //on -> off
        eye_on = 0;
        eyeIcon.setAttribute('src', '/assets/images/eye-off.svg');
        inputPw.setAttribute('type', 'password');
        inputPw.setAttribute('placeholder', '●●●●●●●●');
    }
}

//이메일
inputEmail.addEventListener('focusout', emptyError);
inputEmail.addEventListener('input', emptyErrorReset);
inputEmail.addEventListener('focusout', checkEmail);

//비밀번호
inputPw.addEventListener('focusout', emptyError);
inputPw.addEventListener('input', emptyErrorReset);

//로그인 버튼
form.addEventListener('submit', checkLogin);

//눈 아이콘
eyeIcon.addEventListener('click', clickEye);