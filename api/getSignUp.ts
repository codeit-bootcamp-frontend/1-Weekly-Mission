import { AxiosError, AxiosResponse, isAxiosError } from "axios";
import axios from "@/api/axios";

interface Token {
  accessToken: string;
  refreshToken: string;
}

interface TokenData {
  data: Token;
}

interface SignInData {
  email: string;
  password: string;
}

async function getSignUp(
  email: string,
  password: string
): Promise<TokenData | undefined> {
  try {
    const requestData: SignInData = {
      email: email,
      password: password,
    };

    const response: AxiosResponse<TokenData> = await axios.post<TokenData>(
      "/sign-up",
      requestData
    );

    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        console.error("서버 응답:", axiosError.response.data);
        console.error("상태 코드:", axiosError.response.status);
      } else if (axiosError.request) {
        console.error("요청:", axiosError.request);
      } else {
        console.error("오류 발생:", axiosError.message);
      }
    } else {
      console.error("알 수 없는 오류:", error);
    }
    return undefined;
  }
}

export default getSignUp;
