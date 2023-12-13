import { folderPage } from "@/constants/router";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useLoggedIn = () => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push(folderPage);
    }
  }, []);
};

export default useLoggedIn;
