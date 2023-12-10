import axios, { AxiosResponse, AxiosError } from "axios";

export const getStatus = async (
  emailValue: string,
  url: string,
  password?: string
): Promise<AxiosResponse> => {
  try {
    const result = await axios.post(
      "https://bootcamp-api.codeit.kr/api/sign-in",
      {
        email: emailValue,
        password: password,
      }
    );
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        return axiosError.response;
      }
    }
    throw error;
  }
};
