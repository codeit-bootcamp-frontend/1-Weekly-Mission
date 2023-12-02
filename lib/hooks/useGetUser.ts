import { useAsync } from "./useAsync";
import { axiosInstance } from "@/lib/utils/axiosInstance";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get("users/1");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};
