import { fetchPost } from "./api";
import { SigninItem } from "../types/api";
import { http } from "./axios";

interface fetchSigninProps {
  email: string;
  password: string;
}

export const postSignin = ({ email, password }: fetchSigninProps) => {
  const body = { email, password };
  return http.post("sign-in", body) as Promise<{ data: SigninItem }>;
};
