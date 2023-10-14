const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const deleteBtn = document.querySelector('.deleteBtn');

function tokenCheck(e){
    const signinToken =  window.localStorage.getItem('signinToken');
    const signupToken =  window.localStorage.getItem('signupToken');
    if(e.target==signinBtn){
        if(signinToken){
            return location.href = './folder.html';
        }
        else{
            return location.href = './signin.html';
        }
    }
    if(e.target==signupBtn){
        if(signupToken){
            return location.href = './folder.html';
        }
        else{
            return location.href = './signup.html';
        }
    } 
}

function deleteToken(){
    window.localStorage.clear();
}

signinBtn.addEventListener('click',tokenCheck);
signupBtn.addEventListener('click',tokenCheck);
deleteBtn.addEventListener('click',deleteToken);