const inputs = document.querySelectorAll('input'); /* 이메일, 비밀번호 input */
const login_btn = document.querySelector('form') /* form */
const emailBox = document.querySelector('.email-box'); /* 이메일 메세지*/
const passwordBox = document.querySelector('.password-box'); /* 비밀번호 메세지 */

/* 테스트 아이디&비번 */
const testAccount = {
    email: "test@codeit.com",
    password: "codeit101"
};

/* 입력값 테스트 아이디&비번 */
const inputAccount = {
    email: "",
    password: ""
};

/* 정규표현식 */
const check_email = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; /* 이메일 */


function signInform(e) {
    /* 아이디 입력확인 */
    if(e.target.value === "" && e.target.name == 'email') {
        emailBox.classList.remove('error');
        emailBox.classList.remove('wrong');
        emailBox.classList.add('empty');
    } else if(!check_email.test(e.target.value) && e.target.value && e.target.name == 'email') {
        emailBox.classList.remove('empty');
        emailBox.classList.remove('wrong');
        emailBox.classList.add('error');
    } else if(check_email.test(e.target.value) && e.target.value && e.target.name == 'email') {
        emailBox.classList.remove('error');
        emailBox.classList.remove('empty');
        emailBox.classList.remove('wrong');
        inputAccount.email = e.target.value;
    }
    /* 비밀번호 입력확인 */
    if(e.target.value === "" && e.target.name == 'password') {
        passwordBox.classList.add('empty');
        passwordBox.classList.remove('wrong');
    } else if (e.target.value && e.target.name == 'password') {
        passwordBox.classList.remove('empty');
        passwordBox.classList.remove('wrong');
        inputAccount.password = e.target.value;
    }
}
/* 로그인 확인 */
function loginSubmit(e) {
    e.preventDefault();
    if(inputAccount.email === testAccount.email && inputAccount.password === testAccount.password) {
        alert('환영합니다.');
        login_btn.submit();
        location.href= './folder.html'; 
        /* form의 action 속성을 사용하면 이메일/비번 쿼리문으로 전달되어서 location.href 사용 */
    } else {
        if(inputAccount.email !== testAccount.email) {
            emailBox.classList.add('wrong');
        } else {
            emailBox.classList.remove('wrong');
        }
        if(inputAccount.password !== testAccount.password) {
            passwordBox.classList.add('wrong');
        } else {
            passwordBox.classList.remove('wrong');
        }
    }
};


for (let input of inputs) {
    input.addEventListener('focusout', signInform);
}

login_btn.addEventListener('submit',loginSubmit);