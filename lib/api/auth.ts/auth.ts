import { ApiMapper } from "@/lib/apiMapper";
import request from "@/lib/axios";

interface UserData {
  email: string;
  password: string;
}

interface SaveTokenProps {
  accessToken: string;
  refreshToken: string;
}

export const signin = async (data: UserData) => {
  const response = await request.post(`${ApiMapper.auth.post.SIGN_IN}`, data);
  return response.data;
};

export const signup = async (data: UserData) => {
  const response = await request.post(`${ApiMapper.auth.post.SIGN_UP}`, data);
  return response.data;
};

export const saveToken = ({ accessToken, refreshToken }: SaveTokenProps) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const checkEmail = async (email: string) => {
  const response = await request.post(`${ApiMapper.user.post.CHECK_EMAIL}`, {
    email,
  });
  return response.data;
};
