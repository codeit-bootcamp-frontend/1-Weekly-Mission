import { apiConfig } from "./apiConfig";

export type SignData = {
  email: string;
  password: string;
};

export type postSignResult = {
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

async function postSign(signType: string, signData: SignData) {
  const BASE_URL: string = apiConfig.baseUrl;
  const endpoints: string = apiConfig.endpoints.auth.sign(signType);

  const data = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signData),
  };

  const response = await fetch(`${BASE_URL}${endpoints}`, data);
  const result: postSignResult = await response.json();

  return { response, result };
}

export default postSign;
