const form = document.querySelector('#form');
const signinButton = document.querySelector('#signin-button');
const signupButton = document.querySelector('#signup-button');
const eyes = document.querySelectorAll('.eye');

form.addEventListener('focusout', validateInputValue);
form.addEventListener('keydown', resetValidation);
form.addEventListener('change', resetValidation);

if(signinButton){
    signinButton.addEventListener('click', login);
}

if(signupButton){
    signupButton.addEventListener('click', signup);
}

for(const eye of eyes){
    eye.addEventListener('click', function(e){
        e.target.classList.toggle('open');

        // 이미지의 alt와 input의 type 변경. 이미지의 src는 style.css에서 변경함.
        if(e.target.classList.contains('open')){
            e.target.setAttribute('alt','비밀번호 안보이게하기(현재 보임)');
            e.target.parentElement.querySelector('input').setAttribute('type','text');
        }else{
            e.target.setAttribute('alt','비밀번호 보이게하기(현재 보이지 않음)');
            e.target.parentElement.querySelector('input').setAttribute('type','password');
        }
    })
}

function signup(){
    alert("회원가입");
}

function login(){
    // 에러 여부 확인 후 로그인.
    const errors = document.querySelectorAll('.error');
    if(errors.length === 0){
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');

        if(email.value === 'test@codeit.com' && password.value === 'codeit101'){
            // 로그인 성공.
            location.href = "/pages/folder";

        }else{
            // 에러메세지 출력.
            printMessage(email.id, 'login');
            printMessage(password.id, 'login');
        }
    }
}

function validateInputValue(e){
    // 값의 유효성을 체크 후 문제가 있다면 printMessage 함수를 호출한다.

    const id = e.target.id;
    const value = e.target.value;

    if(!value){
        // 비어있는 값인지 체크
        printMessage(id, 'empty');

    }else if(id === 'email'){
        // 이메일 형식인지 체크
        const emailReg = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

        if(emailReg.test(value) === false){
            printMessage(id, 'validation');
        }

    }else if(id === 'password-check'){
        // 비밀번호가 일치하는지 체크
        const password = document.querySelector('#password');
        if(value !== password.value){
            printMessage(id, 'coincidence');
        }
    }
}

function printMessage(id, type){
    // 메세지를 화면에 출력하고, 대상에 error클래스를 추가한다.

    const message = makeMessage(id, type);

    // 에러메세지가 이미 있다면 print하지 않는다.
    const target = document.getElementById(id);
    if(target.classList.contains('error')){
        return;
    }

    // 메세지를 넣을 곳 탐색 후 출력.
    const p = document.createElement('p');
    p.textContent = message;
    document.getElementById(id).parentElement.append(p);

    // 에러메세지를 넣은 후 target에 error클래스를 추가.
    target.classList.add('error');
}

function makeMessage(id, type){
    // 에러메세지 객체
    const errorMessages = {
        empty : {
            email : '이메일을 입력해주세요.',
            password : '비밀번호를 입력해주세요.',
            'password-check' : '비밀번호를 한 번 더 입력해주세요.',
        },
        validation : {
            email: '올바른 이메일 주소가 아닙니다.',
        },
        login : {
            email : '이메일을 확인해주세요.',
            password : '비밀번호를 확인해주세요.',
        },
        coincidence : {
            'password-check' : '비밀번호가 다릅니다.',
        }
    };

    return errorMessages[type]?.[id] ?? "";
}

function resetValidation(e){
    // 값이 변경되었을 경우, 변경대상의 error클래스와 에러메세지를 삭제한다.

    if(e.target.classList.contains('error')){
        e.target.classList.remove('error');

        if(e.target.parentElement.querySelector('p')){
            e.target.parentElement.querySelector('p').remove();
        }
    }
}