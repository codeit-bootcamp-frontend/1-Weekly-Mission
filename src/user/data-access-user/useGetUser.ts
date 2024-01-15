import { useAsync } from "@/src/sharing/util";
import { UserRawData } from "@/src/user/type";
import { DEFAULT_USER } from "./constant";
import fetcher from "@/src/sharing/util/axiosInstance";

export const useGetUser = (userId?: number) => {
  const getUser = () =>
    fetcher<UserRawData[]>({
      url: `users${userId ? `/${userId}` : ""}`,
      method: "GET",
    });
  const { loading, error, data } = useAsync({
    asyncFunction: getUser,
    enabled: !!userId,
  });

  const userDataResponse = data?.[0];
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
