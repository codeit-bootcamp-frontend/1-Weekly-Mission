import { $, displayInputError, removeInputError, handleEmailError } from "../utils.js";
import { REG_EXP, API } from "../constants.js";

// 페이지 접근 시 엑세스토큰 보유 -> folder페이지로 이동
if(localStorage.getItem("accessToken")) {
  location.href = "folder.html";
}

// 비밀번호 공란, 유효성, 일치 여부 확인
function handleSignUpPasswordError() {
  const passwordInput = $("#password");
  const passwordInputVerify = $("#password-verify");

  // 각 입력 필드에 대한 에러 메시지 초기화
  removeInputError(passwordInput);
  removeInputError(passwordInputVerify);

  if (!passwordInput.value) {
    displayInputError(passwordInput, "비밀번호를 입력해주세요.");
  } else if (passwordInput.value.length < 8 || !REG_EXP.PASSWORD.test(passwordInput.value)) {
    displayInputError(passwordInput, "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.");
  }

  if (passwordInput.value !== passwordInputVerify.value && passwordInputVerify.value) {
    displayInputError(passwordInputVerify, "비밀번호가 일치하지 않습니다.");
  }
}

// 회원가입 클릭 시
async function handleSignUp(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const emailInput = elements['email'];
  const passwordInput = elements['password'];
  const passwordInputVerify = elements['password-verify'];

  const emailError = handleEmailError(emailInput);
  const passwordError = handleSignUpPasswordError(passwordInput, passwordInputVerify);

  try {
    if(!emailError && !passwordError){
      const response = await fetch(`${API}/sign-up`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emailInput.value,
          password: passwordInput.value
        })
      });

      const responseData = await response.json();

      if(response.status === 200){
        localStorage.setItem("accessToken", responseData.accessToken);
        alert("회원가입 되었습니다.");
        return location.href = "folder.html";
      }

      removeInputError(emailInput);
      displayInputError(emailInput, "이메일을 확인해주세요.");

      removeInputError(passwordInput);
      displayInputError(passwordInput, "비밀번호를 확인해주세요.");

      removeInputError(passwordInputVerify);
      displayInputError(passwordInputVerify, "비밀번호를 확인해주세요.");
    }
  } catch (error){
    console.log(error);
  }
}

// Enter 키 입력 시 회원가입
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSignUp(event);
  }
});


export { handleSignUpPasswordError, handleSignUp };