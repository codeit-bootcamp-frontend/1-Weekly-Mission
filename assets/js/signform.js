// ===============================================
// js code for both signup.html and signin.html
// ===============================================

const email = document.querySelector('.email');
email.addEventListener('focusout',emailTextValidation);
email.addEventListener('keydown',() => {
    if(email.classList.contains("error--inputText")) emailTextValidation();}
);

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

let MemberList = [];
const admin = new Member('test@codeit.com','codeit101');

MemberList.push(admin);

function handleErrorEffect(className,appearenceType){
    const obj = document.querySelector(`.${className}`);
    if(appearenceType){     // appearenceType = 1 : add ver.
        obj.classList.add("error--inputText");
    }else{                  // appearenceType = 2 : remove ver.
        if(obj.classList.contains("error--inputText")){
            obj.classList.remove("error--inputText");
        }
    }
    
}

function emailTextValidation(){
    if((email.nextElementSibling == null)) { // errorTxt 없음
        if(email.value == ""){  //email input-text에 값 없음
            // <-- [Error occurred!] --> : no input value on email input text
            console.log("[Error occurred! (type1)] : no input value on email input text");
            const errorTxt = document.createElement("span");  // [show errorEffect]: 1) create errorText
            errorTxt.classList.add("error--text");
            errorTxt.textContent = "이메일을 입력해주세요";
            email.after(errorTxt);                            // [show errorEffect] : 2) add errorText
            handleErrorEffect("email",true);                  // [show errorEffect] : 3) add error effect on input-text border
        }            
    }else{  // 이미 errorTxt가 있음 
        if(email.nextElementSibling != null && email.value != "") { // email input-text애 값 있음
        // <-- [Error solved!] -->
        console.log("[Error solved! (type1)] : no input value on email input text");
        email.closest("div").removeChild(email.closest("div").lastElementChild);  // [remove errorEffect]: 1) remove errorTxt
        handleErrorEffect("email",false);                                         // [remove errorEffect]: 2) remove error effect on input-text border
        }                                       
    }
}

// ===============================================
// js code for only signup.html (회원가입)
// ===============================================

const pwd = document.querySelector('.password');
const check_pwd = document.querySelector('.check_password');
pwd.addEventListener('keyup',()=> pwdValidaton(check_pwd.value,pwd.value))
check_pwd.addEventListener('keyup',() => pwdValidaton(check_pwd.value,pwd.value));
    
function pwdValidaton(checkPwd_txtValue, userPwd_txtValue){
    console.log("[Error occurred! (type2)] : input value is diff between 2 pwd inputs");
    const eitherInputisEmpty = (userPwd_txtValue == "" || checkPwd_txtValue == "");
    console.log(eitherInputisEmpty);
    if(check_pwd.nextElementSibling == null){  // errorTxt 없음 
        if(checkPwd_txtValue != userPwd_txtValue && !eitherInputisEmpty) {  // 두개의 pwd input 값 diff & 두개의 inputText 모두 value가 있음
            // <-- [Error occurred!] --> : input value is diff between 2 pwd inputs
            const errorTxt = document.createElement("span");  // [show errorEffect]: 1) create errorText
            errorTxt.classList.add("error--text");
            errorTxt.textContent="비밀번호가 다릅니다";
            check_pwd.after(errorTxt);                        // [show errorEffect]: 2) add errorText
            handleErrorEffect("check_password",true);         // [show errorEffect]: 3) add error effect on input-text border
        }
    }else{  // 이미 errorTxt 있음
        if(userPwd_txtValue == checkPwd_txtValue || eitherInputisEmpty){ // 두개의 pwd input 값 same or 둘 중 하나 이상의 inputText value가 없음
            // <-- [Error solved!] -->
            console.log("[Error solved! (type2)] : no input value on email input text");
            check_pwd.closest("div").removeChild(check_pwd.closest("div").lastElementChild);  // [remove errorEffect]: 1) remove errorTxt
            handleErrorEffect("check_password",false);                                        // [remove errorEffect]: 2) remove error effect on input-text border
        }
    } 
} 
// ===============================================
// js code for only signin.html (로그인)
// ===============================================

function submitForm(this){
    const emailValue =  document.querySelector('#email_signin').value;
    const pwdValue =  document.querySelector('#password_signin').value;
    // console.log(emailValue_signIn.value,pwdValue_signIn.value);
    
    if(isMember(emailValue,pwdValue)){
        console.log("로그인 성공!");
        document.location.href = './';
        setTimeout(function(){document.location.href = "index.html;"},1000);
    }
    // setTimeout(50000);

}

function isMember(email,pwd){
    // MemberList.forEach(element => {
    //     if(element.getEmail == email){
    //         if(element.getPwd !=pwd){
    //             console.log("로그인 성공");
    //             return true;
    //         }else{
    //             console.log("비밀번호가 맞지 않습니다!");
    //         }
    //     }
    // });
    // return false;
    for(let temp of MemberList){
        if(temp.getEmail() == email){
            if(temp.getPwd() ==pwd){
                console.log("isMember");
                return true;
            }else{
                console.log("비밀번호가 맞지 않습니다!");
            }
        }
    }
    return false;
}
