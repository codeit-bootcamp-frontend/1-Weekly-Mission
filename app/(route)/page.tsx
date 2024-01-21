"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/buttons";
import API from "@/service/api";
import { removeAccessToken, setAccessToken } from "@/utils/handleAccessToken";

const Home = () => {
  const router = useRouter();

  const handleSignin = async () => {
    const token = await API.auth.signin({ email: "test@codeit.com", password: "sprint101" });
    const accessToken = token?.data?.accessToken;
    if (accessToken) {
      setAccessToken(accessToken);
      router.push("/folder");
    }
  };

  const handleSignout = () => {
    removeAccessToken();
  };

  return (
    <div className="flex flex-col items-center gap-30 py-30">
      <div className="h-60 w-300">
        <Button onClick={handleSignin}>로그인</Button>
      </div>
      <div className="h-60 w-300">
        <Button onClick={handleSignout}>로그아웃</Button>
      </div>
    </div>
  );
};

export default Home;
