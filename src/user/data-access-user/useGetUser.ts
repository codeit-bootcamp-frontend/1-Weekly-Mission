import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";
import { UserRawData } from "user/type";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get<{ data: UserRawData }>("sample/user");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data: data?.data ?? null };
};
