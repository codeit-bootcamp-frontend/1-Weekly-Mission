// higher order component (hoc)

import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  // 로그인 체크(refreshToken 배우기 전)
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
    } else {
      router.push("/signin");
    }
  }, [router]);

  return <Component {...props} />;
};
