import { axiosInstance, useAsync, useEffectOnce } from "@/src/sharing/util";
import { UserRawData } from "../type";
import { useState } from "react";
import { DEFAULT_USER } from "./constant";

export const useGetCurrentUser = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  useEffectOnce(() => {
    setAccessToken(localStorage.getItem("accessToken"));
  });

  const getCurrentUser = () => axiosInstance.get<{ data: UserRawData[] }>("users");

  const { loading, error, data } = useAsync({
    asyncFunction: getCurrentUser,
    enabled: !!accessToken,
  });

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
