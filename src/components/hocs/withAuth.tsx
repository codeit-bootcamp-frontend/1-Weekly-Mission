// higher order component (hoc)

import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  // 로그인 체크(refreshToken 배우기 전)
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      alert("이미 로그인이 되어있어요.");
      router.push("/folder");
    }
  }, [router]);

  return <Component {...props} />;
};
