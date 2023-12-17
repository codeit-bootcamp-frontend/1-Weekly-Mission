import { fetchPost } from "./api";
import { SignupItem } from "../types/api";

interface fetchSignupProps {
  email: string;
  password: string;
}

export const fetchSignup = ({ email, password }: fetchSignupProps) => {
  const body = {
    email,
    password,
  };

  return fetchPost("/api/sign-up", body) as Promise<{ data: SignupItem }>;
};
