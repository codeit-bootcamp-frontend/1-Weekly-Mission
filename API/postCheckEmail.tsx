import { apiConfig } from "./apiConfig";

const BASE_URL: string = apiConfig.baseUrl;
const endpoints: string = apiConfig.endpoints.user.checkEmail;

export type checkEmailData = {
  isUsableNickname: Boolean;
};
export type checkEmailError = {
  message: string;
};

export type checkEmailResult = {
  data: (checkEmailData | checkEmailError)[];
};

async function postCheckEmail(value: string) {
  const emailValue = { email: value };

  const data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailValue),
  };

  const response = await fetch(`${BASE_URL}${endpoints}`, data);

  return response.status === 409;
}

export default postCheckEmail;
