import { $, displayInputError, removeInputError } from "../utils.js";
import { API } from "../constants.js";

// 페이지 접근 시 엑세스토큰 보유 -> folder페이지로 이동
if(localStorage.getItem("accessToken")) {
  location.href = "folder.html";
}

// 비밀번호 공란 에러 확인
function handlePasswordError(event) {
  const passwordInput = $("#password");
  removeInputError(passwordInput);

  if (!event.target.value) {
    displayInputError(passwordInput, "비밀번호를 입력해주세요.");
    return;
  }
}

//존재하지 않는 이메일일 떄
export function handleToggleEmail() {
  const emailInput = $("#email");

  if (emailInput.value !== "test@codeit.com") {
    displayInputError(emailInput, "이메일을 확인해주세요.");
    return;
  }

  removeInputError(emailInput);
}

//존재하지 않는 비밀번호일 떄
export function handleTogglePassword() {
  const passwordInput = $("#password");

  if (passwordInput.value !== "codeit101") {
    displayInputError(passwordInput, "비밀번호를 확인해주세요.");
    return;
  }

  removeInputError(passwordInput);
}

// 로그인 클릭 시
async function handleSignIn(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const emailInput = elements['email'];
  const passwordInput = elements['password'];

  try {
    const response = await fetch(`${API}/sign-in`, {
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
      alert("로그인 되었습니다.");
      return location.href = "folder.html";
    }

    if(response.status === 400){
      const emailInput = $("#email");
      const passwordInput = $("#password");

      removeInputError(emailInput);
      displayInputError(emailInput, "이메일을 확인해주세요.");

      removeInputError(passwordInput);
      displayInputError(passwordInput, "비밀번호를 확인해주세요.");
    }
  } catch (error){
    console.log(error);
  }
}

export { handlePasswordError, handleSignIn };