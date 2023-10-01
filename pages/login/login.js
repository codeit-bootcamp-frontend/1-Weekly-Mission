const form = document.querySelector('#form');
const signinButton = document.querySelector('#signin-button');
const signupButton = document.querySelector('#signup-button');

form.addEventListener('focusout', validate);
form.addEventListener('keydown', resetValidation);

if(signinButton){
    signinButton.addEventListener('click', login);
}

if(signupButton){
    signupButton.addEventListener('click', signup);
}

function signup(){
    alert("회원가입");
}

function login(){
    // 에러 여부 확인 후 로그인
    const error = document.querySelectorAll('.error');
    if(error.length === 0){
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');

        if(email.value === 'test@codeit.com' && password.value === 'codeit101'){
            location.href = "/pages/folder";

        }else{
            // 에러메세지 출력
            printMessage(email.id, 'login');
            printMessage(password.id, 'login');
            email.classList.add('error');
            password.classList.add('error');
        }
    }
}

function validate(e){
    // 값의 유효성을 체크 후 문제가 있다면 printMessage 함수 호출

    const id = e.target.id;
    const value = e.target.value;
    const target = e.target;
    let result = true;

    if(!value){
        // 비어있는 값인지 체크
        printMessage(id, 'empty');
        result = false;

    }else if(id === 'email'){
        // 이메일 형식인지 체크
        const exp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

        if(exp.test(value) === false){
            printMessage(id, 'validation');
            result = false;
        }
    }

    if(!result){
        target.classList.add('error');
    }
}

function printMessage(id, type){
    // 메세지를 생성 후 messageDelivery 함수를 호출
    let message = "";

    if(type === 'empty'){
        switch(id){
            case 'email':
                message = "이메일을 입력해주세요.";
                break;
            case 'password':
                message = "비밀번호를 입력해주세요.";
                break;
        }
    }else if(type === 'validation'){
        switch(id){
            case 'email':
                message = "올바른 이메일 주소가 아닙니다.";
                break;
        }
    }else if(type === 'login'){
        switch(id){
            case 'email':
                message = "이메일을 확인해주세요.";
                break;
            case 'password':
                message = "비밀번호를 확인해주세요.";
                break;
        }
    }

    messageDelivery(id, message);
}

function messageDelivery(id, message){
    // 메세지를 화면에 출력

    // 에러메세지가 이미 있다면 return
    const target = document.getElementById(id);
    if(target.classList.contains('error')){
        return;
    }

    // id로 메세지를 넣을 곳을 찾는다.
    const p = document.createElement('p');

    p.textContent = message;
    document.getElementById(id).parentElement.append(p);
}

function resetValidation(e){
    if(e.target.classList.contains('error')){
        e.target.classList.remove('error');

        if(e.target.parentElement.querySelector('p')){
            e.target.parentElement.querySelector('p').remove();
        }
    }
}