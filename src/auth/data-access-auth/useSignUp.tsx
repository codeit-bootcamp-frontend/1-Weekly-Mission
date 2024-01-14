import { axiosInstance, useAsync } from "@/src/sharing/util";
import { useCallback, useEffect } from "react";
import { Token } from "../type";
import { useRouter } from "next/router";

type UseSignUpParams = { email: string; password: string };

export const useSignUp = ({ email, password }: UseSignUpParams) => {
  const router = useRouter();
  const signUp = useCallback(
    () =>
      axiosInstance.post<Token>("/auth/sign-up", {
        email,
        password,
      }),
    [email, password]
  );
  const { execute, loading, error, data } = useAsync({
    asyncFunction: signUp,
    lazyMode: true,
  });
  const accessToken = data?.accessToken;

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      document.cookie = `accessToken=${accessToken}`;
      router.push("/folder");
    }
  }, [accessToken]);

  return {
    execute,
    loading,
    error,
    data,
  };
};
