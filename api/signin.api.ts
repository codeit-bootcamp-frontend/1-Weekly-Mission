import { fetchPost } from "./api";
import { SigninItem } from "../types/api";

interface fetchSigninProps {
  email: string;
  password: string;
}

export const fetchSignin = ({ email, password }: fetchSigninProps) => {
  const body = {
    email,
    password,
  };

  return fetchPost("/api/sign-in", body) as Promise<{ data: SigninItem }>;
};
