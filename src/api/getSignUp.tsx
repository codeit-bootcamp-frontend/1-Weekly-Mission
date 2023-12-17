// BUG - 왜 instance 쓰면 안됨????
import { axiosInstance } from "./axiosInstance";
import axios from "axios";

export default async function getSignUp(email = "", password = "") {
  try {
    const response = await axios.post(
      "https://bootcamp-api.codeit.kr/api/sign-up",
      {
        email: email,
        password: password,
      },
    );
    return response.data;
  } catch (e) {
    return;
  }
}
