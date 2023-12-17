import { SIGNIN_ENDPOINT, instance } from "@/api/services/config";
import { FormValues } from "@/components/signinForm/SigninForm";
import { setAccessToken } from "@/utils/localStorage";
import { useRouter } from "next/router";
import { ReactNode, createContext, useContext, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({
  signin: async (data: FormValues) => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  const signin = async (data: FormValues) => {
    let res;
    try {
      res = await instance.post(`${SIGNIN_ENDPOINT}`, {
        email: data.email,
        password: data.password,
      });
      const accessToken = res?.data.data.accessToken;
      setAccessToken(accessToken);
      res?.status === 200 && router.push("/folder");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        signin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("반드시 AuthProvider 안에서 사용해야 합니다.");
  }

  return context;
};
