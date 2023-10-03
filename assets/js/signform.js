// ===============================================
// js code for both signup.html and signin.html
// ===============================================
// debugger;

// input text element들 class name으로 가져오기
const email = document.querySelector('.email');
const pwd = document.querySelector('.password'); 
const check_pwd = document.querySelector('.check_password');

email.addEventListener('focusout', handleEmailFormatError); // 이메일 입력칸 비어있는지 확인 후 비어있는지 검사, 경우에 따라 에러문구 handle
email.addEventListener('keydown', () => {
    deleteErrorEffect(email, "errorNoEmailTxt"); // resolve Email Validation #1(isEmailNotEmpty) - "이메일을 입력해주세요" 에러문구 떠있으면 지우기
    deleteErrorEffect(email, "errorNotEmail");   // resolve Email Validation #2(isEmail) - "올바른 이메일 주소가 아닙니다." 에러문구 떠있으면 지우기
    deleteErrorEffect(email, "errorCheckEmail"); // resolve Login Fail Event - "이메일을 확인해주세요" 에러문구 떠있으면 지우기
});
pwd.addEventListener('keyup', ()=>{
    deleteErrorEffect(pwd, "errorCheckPwd"); // "비밀번호를 확인해주세요" 에러문구 떠있으면 지우기
    if(check_pwd)
        pwdSameValidaton(check_pwd.value,pwd.value);   // 비밀번호 입력칸과 비밀번호 입력 확인 칸의 입력 값 같은지 검사, 경우에 따라 에러문구 handle
});
if(check_pwd)
    check_pwd.addEventListener('keyup',() => pwdSameValidaton(check_pwd.value, pwd.value));   // 비밀번호 입력칸과 비밀번호 입력 확인 칸의 입력 값 같은지 검사, 경우에 따라 에러문구 handle

const $formEl = document.querySelector('.form');
$formEl.addEventListener('submit', (e)=>{
    // 마우스로 button을 클릭하든, 엔터키를 치든 submit이벤트 발생
    e.preventDefault(); // form 제출로 override됨 방지
    login(); // 로그인 시도
});

// 회원 클래스
class Member{
    constructor (email, pwd){
        this.email = email;
        this.pwd = pwd;
    }
    getEmail() { return this.email; }
    getPwd() { return this.pwd; }
}

// 회원 리스트
const memberList = [];
const admin = new Member('test@codeit.com', 'codeit101');

memberList.push(admin);

//============================================
// ======== Handing Email Validation =========

//각 함수의 결과에 따라 에러 메세지 띄우는 힘수
function handleEmailFormatError(){
    const emailValue = email.value;

    if(isEmailNotEmpty(emailValue)){
        if(!isEmail(emailValue))
            createErrorEffect(email, "errorNotEmail", "올바른 이메일 주소가 아닙니다.");
    }
    else
        createErrorEffect(email, "errorNoEmailTxt", "이메일을 입력해주세요"); // [Error!!] Email inputText에 값 없음
}

// Email Validation #1 - is Email text Empty?
function isEmailNotEmpty(emailValue){  // isEmailNotEmpty: 이메일 입력칸의 입력값 존재 여부 검사
    return (emailValue!=="");
}

// Email Validation #2 - is Email?
function isEmail(emailValue){            // is Email: 이메일 형식 올바른지 검사
    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일 형식 검사 정규식
    return pattern.test(emailValue);
} 
//============================================

//============================================
// ======== Handing Error Effect =========

// Create an Error effect
function createErrorEffect(inputTargetEl, errorClassName, errorTxt){
    deleteErrorEffect(inputTargetEl, errorClassName); // 이미 errorClassName가진 error effect가 화면에 떠있다면 지운 후 새로 띄우기 (중복 띄움 방지)
    const ErrorMessage = createErrorMessageEl(errorClassName, errorTxt);  // 1. create error messsage element - createErrorMessageEl
    inputTargetEl.after(ErrorMessage);            // 2. add errorText
    handleInputErrorEffect(inputTargetEl, true);  // 3. make inputText Error effect on it's border - handleInputErrorEffect
}

// Delete an Error effect - 먼저 해당 error effect가 화면 상에 있는지 검사 후, 있다면 지우기
function deleteErrorEffect(inputTargetEl, errorClassName){
    const delElement = document.querySelector("." + errorClassName);
    if(delElement) {  // check if an error Effect "errorClassName" is exist
        delElement.remove();                           // 1. if an errorTxt exist => remove errorTxt
        handleInputErrorEffect(inputTargetEl, false);  // 2. remove error effect on input-text border
    }            
}

// Creating Error effect - create ErrorMessageElement
function createErrorMessageEl(className, message){ 
    const errorTxt = document.createElement("span"); 
    errorTxt.classList.add(className);
    errorTxt.classList.add("error--text");           
    errorTxt.textContent = message;      
    return errorTxt;
} 

// Handle InputText Error effect - create & delete InputText's ErrorEffect
function handleInputErrorEffect(targetInputEl, isAddErrorVer){
    if(isAddErrorVer){  // isAddErrorVer: 1 => add error effect
        targetInputEl.classList.add("error--inputText");
    }else{             // isAddErrorVer: 2 => remove error effect
        if(targetInputEl.classList.contains("error--inputText")) 
            targetInputEl.classList.remove("error--inputText");
    }
}
//============================================


// ===============================================
// js code for only signup.html (회원가입)
// ===============================================
function pwdSameValidaton(checkPwdValue, pwdValue){    // pwdSameValidaton: "비밀번호"와 "비밀번호 확인" 입력칸의 입력값 같음 확인
    const isEitherInputEmpty = (pwdValue === "" || checkPwdValue === "");

    if(checkPwdValue != pwdValue && !isEitherInputEmpty)
        createErrorEffect(check_pwd, "errorPwdDiff", "비밀번호가 다릅니다"); // [Error!!]: 두개의 pwd input 값 diff
    else if(pwdValue === checkPwdValue || isEitherInputEmpty)
        deleteErrorEffect(check_pwd, "errorPwdDiff");  // [Error solve!!]: 두개의 pwd input 값 같거나, 적어도 하나의 pwd input값이 비어있음
} 

// ===============================================
// js code for only signin.html (로그인)
// ===============================================
function login(){
    const emailValue =  document.getElementById('email_signin').value;
    const pwdValue =  document.getElementById('password_signin').value;
    const isMemberRight = isMember(emailValue,pwdValue);
    const isEmailFormatValid = isEmail(emailValue) && isEmailNotEmpty(emailValue);  // isEmailFormatValid: 이메일 유효성 검사 (이메일 입력값 존재 여부, 이메일 형식 일치 여부 판단)

    if(isEmailFormatValid && isMemberRight === 1) // 둘 다 1일 때만 유효성 검사 통과, 회원임.
        window.location.replace("/folder.html"); // isMemberRight = 1: 회원임. => 로그인 성공!!!
    else
        handleLoginFailEvent(isEmailFormatValid, isMemberRight); // isMemberRight = 0 or 2: 비회원이거나 비번 틀림. => 로그인 실패
}

function isMember(email,pwd){ // 로그인 시도 시 회원 리스트에 속해있는지 확인, isMember인지 boolean 값 return
    if(memberList.some((member) => member.getEmail() === email && member.getPwd() === pwd))
        return 1;  // 회원임
    else if(memberList.some((member) => member.getEmail() === email))
        return 2;  // 회원인데 비밀번호 틀림
    return 0;      // 회원 아님
}

function handleLoginFailEvent(isEmailFormatValid, isMemberRight){
    // isEmailFormatValid = 1(이메일 형식 맞음) or 0(이메일 형식이 아님)
    // isMemberRight = 0(회원 아님) or 2(회원인데 비번틀림)

    if(!isEmailFormatValid) 
        handleEmailFormatError(); // isEmailFormatValid = 0, 이메일 형식이 아님.
    else{
        if(!isMemberRight){ // isMemberRight = 0
            createErrorEffect(email, "errorCheckEmail", "이메일을 확인해주세요."); // 회원 아님
            createErrorEffect(pwd, "errorCheckPwd", "비밀번호를 확인해주세요."); 
        }else // isMemberRight = 2
            createErrorEffect(pwd, "errorCheckPwd", "비밀번호를 확인해주세요."); // 회원인데 비밀번호 틀림
    }
}