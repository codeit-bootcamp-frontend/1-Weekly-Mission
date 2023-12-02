import LogoImg from "@/public/assets/common/img_logo.png";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import request from "@/lib/axios";
import styled from "styled-components";
import { device } from "@/styles/globalStyle";
import DefaultBtn, { DefaultBtnContainer } from "../button/DefaultButton";

interface IUser {
  email: string | null;
  name: string | null;
  id: number | null;
  image_source: string;
}

const Header = () => {
  const [isFixed, setIsFixed] = useState(true);
  const router = useRouter();
  const { pathname } = router;
  const [userData, setUserData] = useState<IUser>({
    email: null,
    name: null,
    id: null,
    image_source: "",
  });

  const handleProfile = useCallback(async () => {
    const result = await request.get("/api/users/2");
    if (!result) return;

    const { data } = result;

    setUserData(data.data[0]);
  }, []);

  const handleLoginBtn = () => {
    router.push("/signin");
  };

  useEffect(() => {
    handleProfile();
  }, [handleProfile]);

  useEffect(() => {
    if (pathname === "/folder") {
      setIsFixed(false);
    }
  }, [pathname]);

  return (
    <HeaderContainer $isFixed={isFixed}>
      <nav className="contentContainer">
        <Image
          src={LogoImg}
          id="logoImg"
          alt="logoImg"
          height="24"
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
          <DefaultBtn type="default" onClick={handleLoginBtn}>
            로그인
          </DefaultBtn>
        )}
      </nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header<{ $isFixed: boolean }>`
  display: flex;
  background: var(--background);
  padding: 2rem 20rem;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
  position: ${(props) => (props.$isFixed ? "fixed" : "initial")};
  justify-content: center;
  min-height: 9.4rem;
  z-index: 10;

  @media all and (${device.tablet}) {
    padding: 1.8rem 3.2rem;
  }
  @media all and (${device.mobile}) {
    padding: 1.3rem 3.2rem;
    min-height: 6.3rem;
  }

  .contentContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 152rem;

    #logoImg {
      cursor: pointer;
      height: 2.4rem;

      @media all and (${device.mobile}) {
        height: 1.6rem;
        width: 8.8rem;
      }
    }

    ${DefaultBtnContainer} {
      width: 12.8rem;

      @media all and (${device.mobile}) {
        width: 8rem;
        padding: 1rem 1.6rem;
        font-size: 1.4rem;
      }
    }
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
  }

  .profileEmail {
    color: var(--linkbrary-gray-100, #373740);
    font-size: 1.4rem;
    font-weight: 400;
    @media all and (${device.mobile}) {
      display: none;
    }
  }
`;
