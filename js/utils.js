import { REG_EXP } from "./constants.js";

// 요소 하나 선택 함수
function $(selector) {
    return document.querySelector(selector);
}

// 요소 여러개 선택 함수
function $all(selector) {
    return document.querySelectorAll(selector);
}

// 클래스 추가 함수
function addClass(element, className){
    element.classList.add(className);
}

// 클래스 제거 함수
function removeClass(element, className){
    element.classList.remove(className);
}

// 요소 생성 함수
function createElement(tagName = "span") {
    return document.createElement(tagName);
}

// 페이지 위치 확인(회원가입 페이지일 때 true)
function isLocation() {
    return location.pathname.includes('signup');
}

// 인풋 에러 요소 출력
function displayInputError(input, message) {
    const element = createElement();
    element.textContent = message;
    addClass(element, "input-error-message");
    addClass(input, "input-error");
  
    const passwordWrappers = $all(".password-wrapper");
  
    if (input.id === "password") {
      addClass(element, "input-error-message");
      addClass(input, "input-error");
      passwordWrappers[0].append(element);
      return;
    }
  
    if (input.id === "password-verify") {
      addClass(element, "input-error-message");
      addClass(input, "input-error");
      passwordWrappers[1].append(element);
      return;
    }
  
    input.after(element);
  }
  
// 인풋 에러 요소 제거
function removeInputError(input) {
    if (input.id === "password") {
      const passwordWrapper = $(".password-wrapper");
      const passwordErrorMessage = passwordWrapper.querySelector('.input-error-message');
  
      if (passwordErrorMessage) {
        passwordErrorMessage.remove();
        removeClass(input, "input-error");
      }
      return;
    }
  
    if (input.id === "password-verify") {
      const passwordWrapper = $all(".password-wrapper")[1]; // password-verify의 부모 요소 선택
      const passwordErrorMessage = passwordWrapper.querySelector('.input-error-message');
  
      if (passwordErrorMessage) {
        passwordErrorMessage.remove();
        removeClass(input, "input-error");
      }
      return;
    }
  
    if (input.nextSibling && input.nextSibling.localName === 'span') {
      input.nextSibling.remove();
      removeClass(input, "input-error");
    }
}

// 이메일 공란, 유효성 에러 확인
function handleEmailError({value}) { 
    const emailInput = $("#email");
    removeInputError(emailInput);
  
    if (!value) {
      displayInputError(emailInput, "이메일을 입력해주세요.");
      return;
    }
    
    if (!REG_EXP.EMAIL.test(value) && value.length > 0) {
      displayInputError(emailInput, "올바른 이메일 주소가 아닙니다.");
      return;
    }  
  
    if (isLocation() && value === "test@codeit.com") {
      displayInputError(emailInput, "이미 사용 중인 이메일입니다.");
    }
  }


// 비밀번호 eye 토글
function handleToggleEye(eyeButton, passwordInput) {
    
    const isPasswordType = passwordInput.getAttribute("type") === "password";
  
    passwordInput.setAttribute("type", isPasswordType ? "text" : "password");
    eyeButton.setAttribute("src", `img/eye-${isPasswordType ? 'on' : 'off'}.svg`);
  }
  
  

export { $, $all, displayInputError, removeInputError, isLocation, handleEmailError, handleToggleEye };