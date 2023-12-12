import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";
import { UserRawData } from "user/type";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get<UserRawData>("sample/user");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data: data ?? null };
};
