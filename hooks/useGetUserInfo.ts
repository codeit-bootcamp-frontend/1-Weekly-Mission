import { getUser } from "@/apis/getUser.api";
import { localStorageAccessToken } from "@/constants/localStorage";
import { UserInfo } from "@/types/api";
import LocalStorage from "@/utils/localStorage";
import { useEffect, useState } from "react";

const useGetUserInfo = () => {
  const [userData, setUserData] = useState<UserInfo>();
  const getUserInfo = async () => {
    const accessToken = LocalStorage.getItem(localStorageAccessToken);
    if (accessToken) {
      const { data } = await getUser();
      setUserData(data.data[0]);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return { userData };
};

export default useGetUserInfo;
