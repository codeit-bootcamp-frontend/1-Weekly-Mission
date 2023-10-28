import LogoImg from "../../assets/common/img_logo.png";
import { useCallback, useEffect, useState } from "react";
import useAsync from "../../hooks/useAsync";
import { getUser } from "../../api/api";
import styled from "styled-components";
import { device } from "../styles";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [userData, setUserData] = useState({
    email: null,
    name: null,
    id: null,
    image_source: null,
  });
  const [isLoading, error, getUserAsync] = useAsync(getUser);
  const { pathname } = useLocation();
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    if (pathname === "/folder") {
      setIsFixed(false);
    }
  }, [pathname]);

  const handleProfile = useCallback(async () => {
    const result = await getUserAsync(1);
    if (!result) return;

    const { data } = result;

    setUserData(data[0]);
  }, [getUserAsync]);

  useEffect(() => {
    handleProfile();
  }, [handleProfile]);

  if (isLoading) {
    return <div>화면을 불러오는 중입니다.</div>;
  }

  if (error) {
    return <div>문제가 발생했습니다.</div>;
  }

  return (
    <HeaderContainer $isFixed={isFixed}>
      <nav className="contentContainer">
        <img src={LogoImg} id="logoImg" alt="logoImg" />

        {userData.email ? (
          <ProfileContainer>
            <img src={userData.image_source} alt="profileImg" />
            <div className="profileEmail">{userData.email}</div>
          </ProfileContainer>
        ) : (
          <a href="./html/login.html">
            <DefaultBtn state="login">로그인</DefaultBtn>
          </a>
        )}
      </nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
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

  @media all and ${device.tablet} {
    padding: 1.8rem 3.2rem;
  }
  @media all and ${device.mobile} {
    padding: 3.3rem;
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
      @media all and ${device.mobile} {
        height: 1.8rem;
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
    @media all and ${device.mobile} {
      display: none;
    }
  }
`;

const DefaultBtn = styled.button`
  border-radius: 0.8rem;
  background: linear-gradient(91deg, var(--primary) 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  padding: 1.6rem 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${(props) => (props.state === "login" ? "12.8rem" : "")};
`;
