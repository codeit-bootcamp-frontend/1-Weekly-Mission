import {inputs, form, hendleEvent, isLocation} from '../utils.js';
import {handleSignUpSubmit} from './signup.js';
import {handleSigninSubmit} from './signin.js';
import {eyeIcons, handleReplaceIcon} from '../eyeIcon.js';




for (let input of inputs) {
    input.addEventListener('focusout', hendleEvent);
    input.addEventListener('input', hendleEvent);
}

for (let eyeIcon of eyeIcons) {
    eyeIcon.addEventListener('click', handleReplaceIcon);
}

form.addEventListener('submit', isLocation() ? handleSignUpSubmit : handleSigninSubmit);


