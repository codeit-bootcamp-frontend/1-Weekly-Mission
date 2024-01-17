import { ROUTE } from "@/src/sharing/util";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useTokenRedirect = (tokenResponse?: string) => {
  const router = useRouter();

  useEffect(() => {
    const routeToFolderPage = () => {
      router.replace(ROUTE.폴더);
    };
    const accessTokenInLocalStorage = localStorage.getItem("accessToken");

    if (tokenResponse) {
      routeToFolderPage();
      return;
    }

    if (accessTokenInLocalStorage) {
      routeToFolderPage();
    }
  }, [tokenResponse, router]);
};
