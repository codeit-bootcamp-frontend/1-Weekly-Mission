import { eyeButtons, signInputs, signForm, removeInputError, togglePasswordVisibility } from './components/signComp.js';
import * as sign from './modules/signInMo.js';

const init = () => {
    // 눈알 토글 클릭 이벤트 바인딩
    for (const line of eyeButtons) {
        line.addEventListener('click', togglePasswordVisibility);
    }

// 인풋 포커스 아웃 이벤트 & 인풋 포커스 아웃 이벤트 바인딩
    for (const line of signInputs) {
        line.addEventListener("focusout", sign.handleInputError);
        line.addEventListener("focusin", removeInputError);
    }

    // 로그인 버튼 폴더 이동 클릭 이벤트 바인딩
    signForm.addEventListener("submit", sign.handleLoginSubmit);
}

init()