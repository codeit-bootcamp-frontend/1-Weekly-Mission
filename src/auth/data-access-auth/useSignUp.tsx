import { useAsync } from "@/src/sharing/util";
import { useCallback, useEffect } from "react";
import { Token } from "../type";
import { useRouter } from "next/router";
import fetcher from "@/src/sharing/util/axiosInstance";

type UseSignUpParams = { email: string; password: string };

export const useSignUp = ({ email, password }: UseSignUpParams) => {
  const router = useRouter();
  const signUp = useCallback(
    () =>
      fetcher<Token>({
        url: "/auth/sign-up",
        method: "POST",
        data: {
          email,
          password,
        },
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
