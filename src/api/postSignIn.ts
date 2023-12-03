import { API } from "../config";

interface postSignInProps {
  email: string;
  password: string;
}

export const postSignIn = async ({ email, password }: postSignInProps) => {
  try {
    const user = {
      email: email,
      password: password,
    };
    const response = await fetch(`${API["sign-in"]}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(response);
    const signinResponse = await response.json();
    if (response.status == 200) {
      localStorage.setItem("accessToken", signinResponse.data.accessToken);
      location.href = "/folder";
    } else if (response.status == 400) {
      return "이메일, 비밀번호 확인 요망";

      // showErrorMessage($pwd,$pwdErrorMessage,"비밀번호를 확인해주세요.");
    } else throw new Error(`${response.status}`);
  } catch (err) {
    console.log(err);
  }
};
