// ===============================================
// js code for both signup.html and signin.html
// ===============================================
// input text element들 class name으로 가져오기
const email = document.querySelector('.email');
const pwd = document.querySelector('.password'); 
const check_pwd = document.querySelector('.check_password');

email.addEventListener('focusout', checkEmailFormatError); // 이메일 입력칸 비어있는지 확인 후 비어있는지 검사, 경우에 따라 에러문구 handle
email.addEventListener('keydown', initEmailErrorEffect);

pwd.addEventListener('keyup', initPwdErrorEffect);
pwd.addEventListener('focusout',()=>{
    if(pwd.id === "password_signup") checkPwdFormatError();
})
if(check_pwd)
    check_pwd.addEventListener('keyup',() => handlePwdDiffError(check_pwd.value, pwd.value));   // 비밀번호 입력칸과 비밀번호 입력 확인 칸의 입력 값 같은지 검사, 경우에 따라 에러문구 handle

// initEmailErrorEffect, initPwdErrorEffect: 입력 칸 수정 시 에러 메세지 init
function initEmailErrorEffect(){
    deleteErrorEffect(email, "errorNoEmailTxt"); // init Email Validation #1(isEmailNotEmpty)
    deleteErrorEffect(email, "errorNotEmail");   // init Email Validation #2(isEmail)
    if(email.id === "email_signin")  deleteErrorEffect(email, "errorCheckEmail");   // init SignIn error
    if(email.id === "email_signup")  deleteErrorEffect(email, "errorAlreadyExist"); // init SignUp error
}
function initPwdErrorEffect(){
    if(pwd.id === "password_signin")  deleteErrorEffect(pwd, "errorCheckPwd"); // init SignIn error
    if(pwd.id === "password_signup"){
        deleteErrorEffect(pwd,"errorPwdInvalidFormat"); // init SignUp error
        handlePwdDiffError(check_pwd.value,pwd.value);  // 비번 입력값 두개 같은지 확인후, 같으면 에러 resolve
    }
}

// form event listener
const $formEl = document.querySelector('.form');
$formEl.addEventListener('submit', (e)=>{
    // 마우스로 button을 클릭하든, 엔터키를 치든 submit이벤트 발생
    e.preventDefault(); // form 제출로 override됨 방지
    $formEl.id === "form_signin" ? login() : signUp();
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
// checkEmailFormatError: email input값의 형식 에러 체크, 에러 effect 띄우는 함수
function checkEmailFormatError(){
    const emailValue = email.value;

    if(isEmailNotEmpty(emailValue)){
        if(!isEmail(emailValue)){
            createErrorEffect(email, "errorNotEmail", "올바른 이메일 주소가 아닙니다.");
            return false;
        }
    }else{
        createErrorEffect(email, "errorNoEmailTxt", "이메일을 입력해주세요"); // [Error!!] Email inputText에 값 없음
        return false;
    }

    // siginup(회원가입) 일 경우에 추가로 체크해야하는 format
    if(email.id === "email_signup"){
        if(emailValue === "test@codeit.com"){
            createErrorEffect(email,"errorAlreadyExist","이미 사용 중인 이메일입니다.");
            return false;
        }
    }
    // 유효한 이메일 형식으로 입력됨.
    return true;
}

// isEmailNotEmpty: Email Validation #1 - is Email text Empty?
function isEmailNotEmpty(emailValue){  // isEmailNotEmpty: 이메일 입력칸의 입력값 존재 여부 검사
    return (emailValue!=="");
}

// isEmail: Email Validation #2 - is Email?
function isEmail(emailValue){            // is Email: 이메일 형식 올바른지 검사
    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일 형식 검사 정규식
    return pattern.test(emailValue);
} 
//============================================


//============================================
// ======== Handing Password Validation =========
// checkPwdFormatError: pwd input값의 형식 에러 체크 함수, 에러 effect 띄우는 함수
function checkPwdFormatError(){
    const pwdValue = pwd.value;
    const checkPwdValue = check_pwd.value;

    const isPwdSame = isSame(checkPwdValue,pwdValue);// 두개의 비번 입력값 일치 여부 체크
    const isValidLength = isPwdLengthValid(pwdValue);
    const isValidFormat = isStringHasNumAndAlphabet(pwdValue);

    if(!isValidFormat || !isValidLength ){ // 비밀번호 형식 에러 체크
        createErrorEffect(pwd,"errorPwdInvalidFormat", "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
        return false;
    }
    if(!isPwdSame){
        handlePwdDiffError(pwdValue,checkPwdValue);
        return false;
    } 
    // 유효한 비밀번호 형식으로 입력됨
    return true;
} 

// handlePwdDiffError: "비밀번호"와 "비밀번호 확인" 입력칸의 입력값 같음 확인
function handlePwdDiffError(pwdValue, checkPwdValue){    
    const isPwdSame = isSame(pwdValue, checkPwdValue);
    const isBothPwdHasVal = isBothHasVal(pwdValue, checkPwdValue);

    // 에러 메세지 핸들링
    if(!isPwdSame && isBothPwdHasVal)      createErrorEffect(pwd,"errorPwdDiff", "비밀번호가 일치하지 않아요."); 
    else if(isPwdSame || !isBothPwdHasVal) deleteErrorEffect(pwd, "errorPwdDiff");  
} 

/**
 * param으로 받은 두개의 입력값 같은지 체크
 * @returns {boolean} - is Both param's val Same
 */
function isSame(val1, val2) { return val1 === val2; }

/**
 * param으로 받은 두개의 val에 모두 입력값 있는지 체크
 * @returns {boolean} - is Both param not Empty
 */
function isBothHasVal(val1, val2) { return (val1 !== "" && val2 !== ""); }

/**
 * pwd 입력 값의 길이가 8 이상인지 체크
 * @returns {boolean} - is pwdValue'length over 8
 */
function isPwdLengthValid(pwdValue) { return pwdValue.length >= 8; }

/**
 * pwd 입력 값이 영문, 숫자의 조합인지
 * @returns {boolean} - is pwdValue mixed with only num & str
 */
function isStringHasNumAndAlphabet(str) {
    const isIncludeAlhabet = s => /[a-zA-Z]/g.test(s)
    const isIncludeNumber = s => /\d/g.test(s)

    return isIncludeAlhabet(str) && isIncludeNumber(str);
}

//============================================
// ======== Handing Error Effect =========
// createErrorEffect: Create an Error effect
function createErrorEffect(inputTargetEl, errorClassName, errorTxt){
    deleteErrorEffect(inputTargetEl, errorClassName); // 이미 errorClassName가진 error effect가 화면에 떠있다면 지운 후 새로 띄우기 (중복 띄움 방지)
    const ErrorMessage = createErrorMessageEl(errorClassName, errorTxt);  // 1. create error messsage element - createErrorMessageEl
    inputTargetEl.after(ErrorMessage);            // 2. add errorText
    handleInputErrorEffect(inputTargetEl, true);  // 3. make inputText Error effect on it's border - handleInputErrorEffect
}

// deleteErrorEffect: Delete an Error effect - 먼저 해당 error effect가 화면 상에 있는지 검사 후, 있다면 지우기
function deleteErrorEffect(inputTargetEl, errorClassName){
    const delElement = document.querySelector("." + errorClassName);
    if(delElement) {  // check if an error Effect "errorClassName" is exist
        delElement.remove();                           // 1. if an errorTxt exist => remove errorTxt
        handleInputErrorEffect(inputTargetEl, false);  // 2. remove error effect on input-text border
    }            
}

// createErrorMessageEl: Create Error Message Element
function createErrorMessageEl(className, message){ 
    const errorTxt = document.createElement("span"); 
    errorTxt.classList.add(className);
    errorTxt.classList.add("error--text");           
    errorTxt.textContent = message;      
    return errorTxt;
} 

// handleInputErrorEffect: Create & Delete InputText's Error Effect
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
// js code for only signin.html (로그인)
// ===============================================
// Login: 로그인 시도
function login(){
    const emailValue =  document.getElementById('email_signin').value;
    const pwdValue =  document.getElementById('password_signin').value;

    const memberState = isMember(emailValue,pwdValue);
    if(checkEmailFormatError()) return false;  // 이메일 유효성 검사, 에러 메세지 출력 (이메일 입력값 존재 여부, 이메일 형식 일치 여부 판단)

    if(isEmailFormatValid && memberState === 1) // 둘 다 1일 때만 유효성 검사 통과, 회원임.
        // Login Success!!
        window.location.replace("/folder.html"); // memberState = 1: 회원임. => 로그인 성공!!!
    else
        handleMemberStateError(memberState); // 비회원인지 회원인데 비번 틀린건지 check해서 에러 메세지 출력
}

// isMember: 로그인 시도 시 회원 리스트에 속해있는지 확인, isMember인지 boolean 값 return
function isMember(email,pwd){ 
    if(memberList.some((member) => member.getEmail() === email && member.getPwd() === pwd))
        return 1;  // 회원임
    else if(memberList.some((member) => member.getEmail() === email))
        return 2;  // 회원인데 비밀번호 틀림
    return 0;      // 회원 아님
}

// handleMemberStateError: member state에 따라 에러 effect 표시
function handleMemberStateError(memberState){
    // memberState = 0(회원 아님) or 2(회원인데 비번틀림)
        if(!memberState){ // memberState = 0
            createErrorEffect(email, "errorCheckEmail", "이메일을 확인해주세요."); // 회원 아님
            createErrorEffect(pwd, "errorCheckPwd", "비밀번호를 확인해주세요."); 
        }else // memberState = 2
            createErrorEffect(pwd, "errorCheckPwd", "비밀번호를 확인해주세요."); // 회원인데 비밀번호 틀림
    
}
// ===============================================
// js code for only signup.html (회원가입)
// ===============================================
// signUp: 회원가입 시도
function signUp(){
    if(!checkEmailFormatError() && !checkPwdFormatError()) return false;

    const isError = document.querySelector('.error--inputText');
    if(!isError){
        // Signup Success!!
        window.location.replace("/folder.html");
    }
}
