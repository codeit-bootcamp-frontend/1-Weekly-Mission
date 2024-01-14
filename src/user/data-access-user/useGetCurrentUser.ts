import { axiosInstance, useAsync, useEffectOnce } from "@/src/sharing/util";
import { UserRawData } from "../type";
import { useState } from "react";
import { DEFAULT_USER } from "./constant";
import fetcher from "@/src/sharing/util/axiosInstance";

export const useGetCurrentUser = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  useEffectOnce(() => {
    setAccessToken(localStorage.getItem("accessToken"));
  });

  const getCurrentUser = () =>
    fetcher<UserRawData[]>({ url: "/users", method: "GET" });

  const { loading, error, data } = useAsync({
    asyncFunction: getCurrentUser,
    enabled: !!accessToken,
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
