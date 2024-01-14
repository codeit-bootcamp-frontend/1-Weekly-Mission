import { useRouter } from "next/router";
import { PropsWithChildren, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import getUser from "@/api/getUser";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import { useUserInfoStore } from "@/store/UserInfo";

export default function Layout({ children }: PropsWithChildren) {
  const hasNav = ["/signin", "/signup", "/404"];
  const { route } = useRouter();
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  const addUser = useUserInfoStore((state) => state.addUser);

  useEffect(() => {
    if (data) addUser(data);
  }, [data]);

  return (
    <>
      {!hasNav.includes(route) && <Nav />}
      {children}
      {!hasNav.includes(route) && <Footer />}
    </>
  );
}
