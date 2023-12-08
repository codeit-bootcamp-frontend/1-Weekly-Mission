import axios from "@/libs/axios";

interface TokenData {
  accessToken: string;
  refreshToken: string;
}

interface SignInResult {
  data: TokenData;
}

export default async function getSignIn(email: string, password: string) {
  let result: SignInResult | undefined;
  await axios
    .post(`/sign-in`, {
      email: email,
      password: password,
    })
    .then((response) => {
      console.log(response.data);
      result = response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });
  return result;
}
