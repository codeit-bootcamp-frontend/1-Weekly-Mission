import axios from "@/libs/axios";

interface TokenData {
  accessToken: string;
  refreshToken: string;
}

interface Result {
  data: TokenData;
}

export default async function getSignUp(email: string, password: string) {
  let result: Result | undefined;
  await axios
    .post(`/sign-up`, {
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
