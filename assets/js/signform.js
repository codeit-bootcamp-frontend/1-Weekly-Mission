// ===============================================
// js code for both signup.html and signin.html
// ===============================================

const email = document.querySelector('.email');
const pwd = document.querySelector('.password');
const check_pwd = document.querySelector('.check_password');

email.addEventListener('focusout',emailTextEmptyValidation); // 이메일 입력칸 비어있는지 확인 후 비어있는지 검사, 경우에 따라 에러문구 handle
email.addEventListener('keydown',() => {
    deleteInputErrorEffect("email","check_email"); // "이메일을 확인해주세요" 에러문구 떠있으면 지우기
    if(email.classList.contains("error--inputText")) emailTextEmptyValidation();} // "이메일을 입력해주세요" 에러문구 떠있으면 이메일 입력칸 비워있는지 검사, 경우에 따라 에러문구 handle
);
pwd.addEventListener('keyup',()=>{
    deleteInputErrorEffect("password","check_pwd"); // "비밀번호를 확인해주세요" 에러문구 떠있으면 지우기
    pwdSameValidaton(check_pwd.value,pwd.value);   // 비밀번호 입력칸과 비밀번호 입력 확인 칸의 입력 값 같은지 검사, 경우에 따라 에러문구 handle
});
check_pwd.addEventListener('keyup',() => pwdSameValidaton(check_pwd.value,pwd.value));   // 비밀번호 입력칸과 비밀번호 입력 확인 칸의 입력 값 같은지 검사, 경우에 따라 에러문구 handle

// 회원 클래스
class Member{
    constructor (email, pwd){
        this.email = email;
        this.pwd = pwd;
    }

    getEmail(){
        return this.email;
    }
    getPwd(){
        return this.pwd;
    }
}

var MemberList = [];
const admin = new Member('test@codeit.com','1');

MemberList.push(admin);

function handleInputErrorEffect(className,appearenceType){
    const obj = document.querySelector(`.${className}`);
    if(appearenceType){     // appearenceType = 1 : add ver.
        obj.classList.add("error--inputText");
    }else{                  // appearenceType = 2 : remove ver.
        if(obj.classList.contains("error--inputText")){
            obj.classList.remove("error--inputText");
        }
    }
}

function emailTextEmptyValidation(){    // emailTextEmptyValidation: 이메일 입력칸의 입력값 존재 여부 확인
    if((email.nextElementSibling == null)) { // errorTxt 없음
        if(email.value == ""){  //email input-text에 값 없음
            // [ Error occurred! ] : no input value on email input text
            console.log("[Error occurred! (type1)] : no input value on email input text");                       
            createInputErrorEffect(email, "email", "no_emailTxt", "이메일을 입력해주세요");
        }            
    }else{  // 이미 errorTxt가 있음 
        if(email.nextElementSibling != null && email.value != "") { // email input-text애 값 있음
            // [ Error solved! ]
            console.log("[Error solved! (type1)] : no input value on email input text");
            deleteInputErrorEffect("email", "no_emailTxt");                              
        }                                       
    }
}

function validEmailFormality(emailValue){
    if(validEmailCheck(emailValue)==false){
        return false;
    }else return true;
}

function validEmailFormalityCheck(emailValue){
    var pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return (emailValue.match(pattern)!=null)
}

function createErrorMessage(className, message){ 
    const errorTxt = document.createElement("span"); 
    errorTxt.classList.add(className);
    errorTxt.classList.add("error--text");           
    errorTxt.textContent = message;      
    return errorTxt;
}

function createInputErrorEffect(inputElement, inputClassName, errorTxtClassName, errorTxt){
    const ErrorMessage = createErrorMessage(errorTxtClassName, errorTxt);  // [show errorEffect]: 1) create errorText
    inputElement.after(ErrorMessage);                   // [show errorEffect]: 2) add errorText
    handleInputErrorEffect(inputClassName,true);        // [show errorEffect]: 3) add error effect on input-text border
}

function deleteInputErrorEffect(inputClassName, errorTxtClassName){
    const delElement = document.querySelector("."+errorTxtClassName);
    if(delElement) {  // check if an errorEffect which class name is "inputClassName" is exist
        delElement.remove();                           // [remove errorEffect]: 1) if an errorTxt exist => remove errorTxt
        handleInputErrorEffect(inputClassName,false);  // [remove errorEffect]: 2) remove error effect on input-text border
    }            
}

// ===============================================
// js code for only signup.html (회원가입)
// ===============================================
function pwdSameValidaton(checkPwd_txtValue, userPwd_txtValue){    // pwdSameValidaton: "비밀번호"와 "비밀번호 확인" 입력칸의 입력값 같음 확인
    console.log("[Error occurred! (type2)] : input value is diff between 2 pwd inputs");
    const eitherInputisEmpty = (userPwd_txtValue == "" || checkPwd_txtValue == "");
    console.log(eitherInputisEmpty);

    if(check_pwd.nextElementSibling == null){  // errorTxt 없음 
        if(checkPwd_txtValue != userPwd_txtValue && !eitherInputisEmpty) {  // 두개의 pwd input 값 diff & 두개의 inputText 모두 value가 있음
            // [ Error occurred! ] : input value is diff between 2 pwd inputs
            createInputErrorEffect(check_pwd,"check_password","pwd_diff", "비밀번호가 다릅니다")
        }
    }else{  // 이미 errorTxt 있음
        if(userPwd_txtValue == checkPwd_txtValue || eitherInputisEmpty){ // 두개의 pwd input 값 same or 둘 중 하나 이상의 inputText value가 없음
            // [ Error solved! ]
            console.log("[Error solved! (type2)] : no input value on email input text");
            deleteInputErrorEffect("check_password", "pwd_diff");
        }
    } 
} 

// ===============================================
// js code for only signin.html (로그인)
// ===============================================
// const signBtn = document.querySelector('#btn_signin');
// signBtn.addEventListener('click',()=>{window.location.replace('/index.html');});

function Login(){
    // debugger;
    const emailValue =  document.querySelector('#email_signin').value;
    const pwdValue =  document.querySelector('#password_signin').value;

    setTimeout(() => console.log("after"), 13000);

    if(isMember(emailValue,pwdValue)){   //isMember == true; 로그인 성공!!!
        debugger;
        console.log("로그인 성공!");
        window.open('/folder.html');
        // window.location = '/index.html';
        // preventDefault();
         // window.location.replace('/folder.html');
        // debugger;
    }else{                              //isMember == false; 로그인 실패
        console.log("로그인 실패");
        if(validEmailFormality(emailValue)){
            createInputErrorEffect(email,"email","no_formality_email","올바른 이메일 주소가 아닙니다.");
        }else{
            createInputErrorEffect(email,"email","check_email","이메일을 확인해주세요.");
            createInputErrorEffect(pwd,"password","check_pwd","비밀번호를 확인해주세요.");
        }
   }

}

function isMember(email,pwd){
    for(let temp of MemberList){
        if(temp.getEmail() == email){
            if(temp.getPwd() == pwd){
                console.log("isMember");
                debugger;
                return true;
            }else{
                console.log("비밀번호가 맞지 않습니다!");
            }
        }
    }
    return false;
}
