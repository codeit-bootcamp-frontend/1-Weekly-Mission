import { useAsync } from "@/components/sharing/util";
import { axiosInstance } from "@/components/sharing/util";
import { UserRawData } from "@/components/user/type";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get<{ data: UserRawData }>("sample/user");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data: data?.data ?? null };
};
