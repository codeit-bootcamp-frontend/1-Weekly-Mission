import { axiosInstance, useAsync } from "@/src/sharing/util";
import { useCallback } from "react";

export const useCheckEmailDuplicate = (email: string) => {
  const checkEmailDuplicate = useCallback(
    () =>
      axiosInstance.post<{ data: { isUsableNickname: boolean } }>("check-email", {
        email,
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
