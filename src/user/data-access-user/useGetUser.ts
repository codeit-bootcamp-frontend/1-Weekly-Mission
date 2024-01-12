import { useAsync } from "@/src/sharing/util";
import { axiosInstance } from "@/src/sharing/util";
import { UserRawData } from "@/src/user/type";
import { DEFAULT_USER } from "./constant";

export const useGetUser = (userId?: number) => {
  const getUser = () =>
    axiosInstance.get<{ data: UserRawData[] }>(`users${userId ? `/${userId}` : ""}`);
  const { loading, error, data } = useAsync({ asyncFunction: getUser, enabled: !!userId });

  const userDataResponse = data?.data?.[0];
  const userData = userDataResponse
    ? {
        id: userDataResponse.id,
        name: userDataResponse.name,
        email: userDataResponse.email,
        imageSource: userDataResponse.image_source,
      }
    : DEFAULT_USER;

  return { loading, error, data: userData };
};
