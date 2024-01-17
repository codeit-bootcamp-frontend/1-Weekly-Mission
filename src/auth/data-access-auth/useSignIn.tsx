import { useAsync } from "@/src/sharing/util";
import { useCallback, useEffect } from "react";
import { Token } from "../type";
import { useRouter } from "next/router";
import fetcher from "@/src/sharing/util/axiosInstance";
import { useQuery } from "@tanstack/react-query";

type UseSignInParams = { email: string; password: string };

export const useSignIn = ({ email, password }: UseSignInParams) => {
  const router = useRouter();

  const signIn = useCallback(
    () =>
      fetcher<Token>({
        url: "/auth/sign-in",
        data: { email, password },
        method: "POST",
      }),
    [email, password]
  );

  const { execute, loading, error, data } = useAsync({
    asyncFunction: signIn,
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
