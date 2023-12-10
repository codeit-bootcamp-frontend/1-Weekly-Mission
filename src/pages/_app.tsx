import { useEffect, useState, useCallback } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { getUser } from "@/api";
import { Nav, Footer } from "@/components/common";
import { UserInterface } from "@/types";
import "@/styles/reset.css";
import "@/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  const [userValues, setUserValues] = useState<UserInterface>();
  const { route } = useRouter();

  const loadUser = useCallback(async () => {
    try {
      const { data } = await getUser();
      if (!data) return;
      setUserValues((prevValues) => {
        return { ...prevValues, ...data[0] };
      });
    } catch (e) {
      return;
    }
  }, []);

  const hasNav = ["/", "/folder", "/shared"];

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      {hasNav.includes(route) && (
        <Nav profile={userValues} isSticky={route !== "/folder"} />
      )}
      <Component {...pageProps} />
      {hasNav.includes(route) && <Footer />}
    </>
  );
}
