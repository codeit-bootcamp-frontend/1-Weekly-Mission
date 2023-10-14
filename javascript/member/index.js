import {$, $all, hendleEvent, isLocation} from '../utils.js';
import {handleSignUpSubmit} from './signup.js';
import {handleSigninSubmit} from './signin.js';
import {handleReplaceIcon} from '../eyeIcon.js';


for (let input of $all('input')) {
    input.addEventListener('focusout', hendleEvent);
    input.addEventListener('input', hendleEvent);
}

for (let eyeIcon of $all('.fa-solid')) {
    eyeIcon.addEventListener('click', handleReplaceIcon);
}

$('form').addEventListener('submit', isLocation() ? handleSignUpSubmit : handleSigninSubmit);


