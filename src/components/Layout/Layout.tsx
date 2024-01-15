import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import getUser from "@/api/getUser";
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
    staleTime: 1000,
    enabled: !!accessToken,
  });

  const addUser = useUserInfoStore((state) => state.addUser);

  useEffect(() => {
    if (data) addUser(data);
  }, [data]);

  return (
    <>
      {!noNavPage.includes(route) && <Nav />}
      {children}
      {!noNavPage.includes(route) && <Footer />}
    </>
  );
}
