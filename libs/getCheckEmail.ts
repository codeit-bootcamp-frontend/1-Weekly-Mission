import Axios from "@/libs/axios";
import axios, { AxiosResponse, AxiosError } from "axios";

export default async function getCheckEmail(
  email: string
): Promise<AxiosResponse> {
  try {
    const result = await Axios.post(`/check-email`, {
      email: email,
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
