import Localstorage from "../pages/sign/js/localstorage.js";

const signInButton = document.querySelector('.btn.login');
const signInATag = document.querySelector('.sign-link.sign-in');
const signUpButton = document.querySelector('.btn.link');
const signUpATag = document.querySelector('.sign-link.sign-up');

signInButton.addEventListener('click', () => {
    if (Localstorage.getItem("accessToken")) {
        signInATag.setAttribute("href", "/folder.html");
    }
});

signUpButton.addEventListener('click', () => {
    if (Localstorage.getItem("accessToken")) {
        signUpATag.setAttribute("href", "/folder.html");
    }
})
