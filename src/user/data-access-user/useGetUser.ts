import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get("sample/user");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};
