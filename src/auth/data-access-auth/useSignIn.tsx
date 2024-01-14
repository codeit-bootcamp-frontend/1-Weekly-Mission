import { axiosInstance, useAsync } from "@/src/sharing/util";
import { useCallback, useEffect } from "react";
import { Token } from "../type";

type UseSignInParams = { email: string; password: string };

export const useSignIn = ({ email, password }: UseSignInParams) => {
  const signIn = useCallback(
    () =>
      axiosInstance.post<{ data: Token }>("/auth/sign-in", {
        email,
        password,
      }),
    [email, password]
  );
  const { execute, loading, error, data } = useAsync({
    asyncFunction: signIn,
    lazyMode: true,
  });
  const accessToken = data?.data.accessToken;

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    }
  }, [accessToken]);

  return {
    execute,
    loading,
    error,
    data,
  };
};

// export const useSignIn = ({ email, password }: UseSignInParams) => {
//   const router = useRouter();
//   const signIn = useCallback(
//     () =>
//       axiosInstance.post<{ data: Token }>("sign-in", {
//         email,
//         password,
//       }),
//     [email, password]
//   );
//   const { execute, loading, error, data } = useAsync({
//     asyncFunction: signIn,
//     lazyMode: true,
//   });
//   const accessToken = data?.data.accessToken;

//   useEffect(() => {
//     if (accessToken) {
//       document.cookie = `accessToken=${accessToken}`;
//       router.push("/folder");
//     }
//   }, [accessToken]);

//   return {
//     execute,
//     loading,
//     error,
//     data,
//   };
// };
