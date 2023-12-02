import { axiosInstance } from "@/utils/axiosInstance";
import { useCallback, useEffect } from "react";
import useAsync from "@/hooks/useAsync";
import { SampleUser } from "@/types/type";

export const useGetUser = () => {
  const getUser = useCallback(() => axiosInstance.get<SampleUser>("sample/user"), []);
  const { execute, loading, error, data } = useAsync<SampleUser>(getUser);
  useEffect(() => {
    execute();
  }, [execute]);
  return { loading, error, data };
};
