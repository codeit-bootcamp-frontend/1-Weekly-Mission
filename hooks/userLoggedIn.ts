import { useRouter } from "next/router";
import { useEffect } from "react";

const useLoggedIn = () => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push("/folder");
    }
  }, []);
};

export default useLoggedIn;
