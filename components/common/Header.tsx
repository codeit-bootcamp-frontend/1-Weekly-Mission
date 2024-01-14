import LogoImg from "@/public/assets/common/img_logo.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { HeaderContainer, ProfileContainer } from "./headerStyled";
import GradientButton from "../button/GradientButton";
import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "@/constants/queryKey";
import { getUsers } from "@/lib/api/user";

interface User {
  email: string | null;
  name: string | null;
  id: number | null;
  image_source: string;
}

const Header = () => {
  const [isFixed, setIsFixed] = useState(true);
  const router = useRouter();
  const { pathname } = router;
  const [isAuth, setIsAuth] = useState(false);

  const { data: userData, isSuccess } = useQuery<User>({
    queryKey: [QUERY_KEYS.users],
    queryFn: () => getUsers(),
    enabled: !!isAuth,
  });

  const handleLoginBtn = () => {
    router.push("/signin");
  };

  useEffect(() => {
    if (pathname.includes("/folder")) {
      setIsFixed(false);
      return;
    }
    setIsFixed(true);
  }, [pathname]);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      return;
    }
    setIsAuth(true);
  }, []);

  return (
    isSuccess && (
      <HeaderContainer $isFixed={isFixed}>
        <nav className="contentContainer">
          <Image
            priority
            src={LogoImg}
            id="logoImg"
            alt="logoImg"
            height="24"
            width="133"
            onClick={() => router.push("/")}
          />

          {userData.image_source ? (
            <ProfileContainer>
              <Image
                src={userData.image_source}
                alt="profileImg"
                width="28"
                height="28"
              />
              <div className="profileEmail">{userData.email}</div>
            </ProfileContainer>
          ) : (
            <GradientButton onClick={handleLoginBtn}>로그인</GradientButton>
          )}
        </nav>
      </HeaderContainer>
    )
  );
};

export default Header;
