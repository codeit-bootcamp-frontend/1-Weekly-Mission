import { useEffect } from "react";
import { useRouter } from "next/router";

const AccessRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      router.push("/signin");

      return;
    }
    router.push("/folder/all");
  }, [router]);
};

export default AccessRedirect;
