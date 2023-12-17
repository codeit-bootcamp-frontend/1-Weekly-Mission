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
  try {
    const response = await request.post(`${ApiMapper.auth.post.SIGN_IN}`, data);

    if (response.status === 200) {
      const { data } = response;
      saveToken(data.data);
      return true;
    }
    throw new Error();
  } catch (e) {
    return false;
  }
};

export const signup = async (data: UserData) => {
  try {
    const response = await request.post(`${ApiMapper.auth.post.SIGN_UP}`, data);

    if (response.status === 200) {
      const { data } = response;
      saveToken(data.data);
      return true;
    }
    throw new Error();
  } catch (e) {
    return false;
  }
};

const saveToken = ({ accessToken, refreshToken }: SaveTokenProps) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};
