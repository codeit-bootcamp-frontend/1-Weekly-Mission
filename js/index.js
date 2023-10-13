import {signInATag, signUpATag} from "../pages/sign/js/page.js";
import LocalStorage from "../pages/sign/js/localstorage.js";

signInATag.addEventListener('click', () => {
    if (LocalStorage.getItem("accessToken")) {
        signInATag.setAttribute("href", "/folder.html");
    }
});

signUpATag.addEventListener('click', () => {
    if (LocalStorage.getItem("accessToken")) {
        signUpATag.setAttribute("href", "/folder.html");
    }
});
