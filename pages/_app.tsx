import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "@/styles/globals.css";

import getUserData from "@/utils/getUserData";
import { UserData } from "@/lib/Type";

export default function App({ Component, pageProps }: AppProps) {
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res_user = await getUserData();
        setUserData(res_user);
      } catch (error) {
        throw new Error("사용자 계정 정보 가져오기 실패");
      }
    };

    fetchData();
  }, []);

  return <Component userData={userData} {...pageProps} />;
}
