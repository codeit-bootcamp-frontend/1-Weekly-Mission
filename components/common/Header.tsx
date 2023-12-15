import LogoImg from "@/public/assets/common/img_logo.png";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import request from "@/lib/axios";
import { ApiMapper } from "@/lib/apiMapper";
import { HeaderContainer, ProfileContainer } from "./headerStyled";
import GradientButton from "../button/GradientButton";

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
  const [userData, setUserData] = useState<User>({
    email: null,
    name: null,
    id: null,
    image_source: "",
  });

  const handleProfile = useCallback(async () => {
    try {
      const result = await request.get(`${ApiMapper.user.get.GET_USERS}/1`);
      if (result.status === 200) {
        const { data } = result;
        setUserData(data.data[0]);
        return;
      }
      throw new Error();
    } catch (e) {
      alert("문제가 발생했습니다. 잠시후 다시 시도해주세요.");
    }
  }, []);

  useEffect(() => {
    handleProfile();
  }, [handleProfile]);

  const handleLoginBtn = () => {
    router.push("/signin");
  };

  useEffect(() => {
    if (pathname === "/folder") {
      setIsFixed(false);
      return;
    }
    setIsFixed(true);
  }, [pathname]);

  return (
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

        {userData.email ? (
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
  );
};

export default Header;
