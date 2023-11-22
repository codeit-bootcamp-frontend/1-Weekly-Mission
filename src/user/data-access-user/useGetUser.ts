import { useCallback, useEffect } from "react";
import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";

export interface SampleUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export const useGetUser = () => {
  const getUser = useCallback(() => axiosInstance.get<SampleUser>("sample/user"), []);
  const { execute, loading, error, data } = useAsync<SampleUser>(getUser);
  useEffect(() => {
    execute();
  }, [execute]);
  return { loading, error, data };
};
