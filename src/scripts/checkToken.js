import { loginBtn, signupBtn } from "./constants.js";

function checkToken(event){
    event.preventDefault();
    const isAlready = window.localStorage.getItem('loginToken');
    if(isAlready) {
        window.location.href = "/folder.html";
        return;
    }
    if(event.target === loginBtn) window.location.href = "/signin.html";
    else window.location.href = "/signup.html";
}

loginBtn.addEventListener('click', checkToken);
signupBtn.addEventListener('click', checkToken);