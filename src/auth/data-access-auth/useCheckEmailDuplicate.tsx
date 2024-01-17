import { useAsync } from "@/src/sharing/util";
import fetcher from "@/src/sharing/util/axiosInstance";
import { useCallback } from "react";

export const useCheckEmailDuplicate = (email: string) => {
  const checkEmailDuplicate = useCallback(
    () =>
      fetcher<{ isUsableEmail: boolean }>({
        url: "/users/check-email",
        method: "POST",
        data: {
          email,
        },
      }),
    [email]
  );
  const { execute, loading, error, data } = useAsync({
    asyncFunction: checkEmailDuplicate,
    lazyMode: true,
  });

  return {
    execute,
    loading,
    error,
    data,
  };
};
