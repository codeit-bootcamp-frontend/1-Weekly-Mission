import { addErrorStyle } from "../errors/errors.js";
import {
  inputEmail,
  inputPassword,
  emailErrorMessage,
  passwordErrorMessage,
} from "../constants.js";

// <아이디&비밀번호 올바르게 입력했을 경우 /folder로 이동하고 아닌 경우 확인메시지 출력>
async function validAccount(email, password) {
  const loginInfo = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    if (response.status === 200) {
      const responseData = await response.json();
      const accessToken = responseData.accessToken;
      window.localStorage.setItem("accessToken", accessToken);
      window.location.href = "/folder";
    }
    if (response.status === 400) {
      addErrorStyle(
        inputPassword,
        passwordErrorMessage,
        "비밀번호를 확인해주세요"
      );
      addErrorStyle(inputEmail, emailErrorMessage, "이메일을 확인해주세요.");
    }
  } catch (error) {
    console.error(error);
  }
}

// 사용자가 로그인 버튼을 눌렀을 때 호출되는 함수
// function handleLoginButtonClick() {
//   const email = document.getElementById("emailInput").value; // 이메일 입력란의 값을 가져옴
//   const password = document.getElementById("passwordInput").value; // 비밀번호 입력란의 값을 가져옴
//   handleLogin(email, password); // 로그인 처리 함수 호출
// }

// function validAccount(email, password) {
//   const accountMatch = accountInfo.find((account) => account.email === email);

//   if (accountMatch?.password === password) {
//     window.location.href = "./folder.html";
//   }

// if (accountMatch?.password !== password) {
//   addErrorStyle(inputPassword, passwordErrorMessage, "비밀번호를 확인해주세요");
// }

// if (!accountMatch) {
//   addErrorStyle(inputEmail, emailErrorMessage, "이메일을 확인해주세요.");
// }

export { validAccount };
