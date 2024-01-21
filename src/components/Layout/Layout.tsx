/* 페이지들의 공통 레이아웃 컴포넌트 */

import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getUser } from "@/api/getUser";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import { useUserInfoStore } from "@/store/UserInfo";
import { getCookie } from "@/utils/manageCookie";

export default function Layout({ children }: PropsWithChildren) {
  const noNavPage = ["/signin", "/signup", "/404"];
  const accessToken = getCookie("accessToken");
  const { route } = useRouter();
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
    staleTime: 1000 * 60,
    enabled: !!accessToken,
  });

  const userInfo = useUserInfoStore((state) => state.userInfo);
  const addUser = useUserInfoStore((state) => state.addUser);
  const deleteUser = useUserInfoStore((state) => state.deleteUser);

  useEffect(() => {
    if (userInfo) return;

    if (data) addUser(data);
    else deleteUser();
  }, [data]);

  return (
    <>
      {!noNavPage.includes(route) && <Nav userInfo={userInfo} />}
      {children}
      {!noNavPage.includes(route) && <Footer />}
    </>
  );
}
