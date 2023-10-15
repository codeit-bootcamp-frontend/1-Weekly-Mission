const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const deleteBtn = document.querySelector('.deleteBtn');

//토근 확인해서 signin 한번 했으면 signin 눌렀을 때 페이지 이동, signup한번 했으면 signup 눌렀을 때 페이지 이동
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

//토큰 잘 작동되나 반복을 위한 토큰 초기화 함수
function deleteToken(){
    window.localStorage.clear();
}

signinBtn.addEventListener('click',tokenCheck);
signupBtn.addEventListener('click',tokenCheck);
deleteBtn.addEventListener('click',deleteToken);