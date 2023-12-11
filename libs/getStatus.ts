import Axios from "@/libs/axios";
import axios, { AxiosResponse, AxiosError } from "axios";

export default async function getStatus(
  email: string,
  url: string,
  password?: string
): Promise<AxiosResponse> {
  try {
    const result = await Axios.post(url, {
      email: email,
      password: password,
    });
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
}
