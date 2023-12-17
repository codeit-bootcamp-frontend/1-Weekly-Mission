// BUG - 왜 instance 쓰면 안됨????
import axios from "axios";
import { axiosInstance } from "./axiosInstance";

export default async function getSignIn(email = "", password = "") {
  try {
    const response = await axios.post(
      "https://bootcamp-api.codeit.kr/api/sign-in",
      {
        email: email,
        password: password,
      },
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return;
  }
}
