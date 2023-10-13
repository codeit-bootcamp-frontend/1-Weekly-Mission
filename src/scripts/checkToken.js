import { loginBtn, signupBtn } from "./constants.js";

function checkToken(event){
    event.preventDefault();
    console.log('발생!');
    const isAlready = window.localStorage.getItem('loginToken');
    if(isAlready) window.location.href = "/folder.html";
}

loginBtn.addEventListener('click', checkToken);
signupBtn.addEventListener('click', checkToken);