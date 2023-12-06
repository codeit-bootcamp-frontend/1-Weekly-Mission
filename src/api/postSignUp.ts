import { API } from "../config";

interface postSignUpProps {
  email: string;
  password: string;
}

export const postSignUp = async ({ email, password }: postSignUpProps) => {
  try {
    const user = {
      email: email,
      password: password,
    };
    const response = await fetch(`${API["sign-up"]}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const signinResponse = await response.json();
    if (response.status == 200) {
      localStorage.setItem("accessToken", signinResponse.data.accessToken);
      location.href = "/folder";
    } else if (response.status == 400) {
      console.log(response);

      // showErrorMessage($pwd,$pwdErrorMessage,"비밀번호를 확인해주세요.");
    } else throw new Error(`${response.status}`);
  } catch (err) {
    console.log(err);
  }
};
