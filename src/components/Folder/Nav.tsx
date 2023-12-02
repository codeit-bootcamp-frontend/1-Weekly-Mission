import styled from "styled-components";
import { useState } from "react";
import * as React from "react";
import Link from "next/link";
import { NavLogo, ProfileEmptyIcon } from "@/public/assets";
import { PC_SIZE, TABLET_SIZE } from "@/src/global/mediaQuery";

interface NavProps {
  account: {
    email: string;
    image_source: string;
  } | null;
  setSuccess?: (prevValue: boolean) => void;
  isSticky?: true | undefined;
}

function Nav({ account, setSuccess, isSticky }: NavProps) {
  const [userEmail, setUserEmail] = useState("");
  const [userProfileImg, setUserProfileImg] = useState("");

  const handleClick = () => {
    if (!account) {
      window.location.href = "/signIn";
    } else {
      handleLoginInfo(account);
    }
  };

  const handleLoginInfo = (account: NavProps["account"]) => {
    if (account) {
      const { email, image_source } = account;
      setUserEmail(email);
      setUserProfileImg(image_source);
      if (setSuccess) setSuccess(true); // 회원만 볼 수 있는 페이지
    }
  };

  React.useEffect(() => {
    // 주석 풀면 자동 로그인, 주석처리하면 로그인 버튼 클릭 시 로그인
    handleLoginInfo(account);
  }, [account]);

  return (
    <Navigation isSticky={isSticky}>
      <NavContents>
        <Link href="/">
          <Logo alt="홈페이지 로고: 클릭 시 메인화면으로 이동" />
        </Link>
        {userEmail && (
          <Account>
            {userProfileImg !== null ? (
              <ProfileImg src={userProfileImg} alt="프로필 이미지" />
            ) : (
              <ProfileEmptyIcon alt="프로필 이미지 없음" />
            )}
            <Email>{userEmail}</Email>
          </Account>
        )}
        {!userEmail && <LoginButton onClick={handleClick}>로그인</LoginButton>}
      </NavContents>
    </Navigation>
  );
}

export default Nav;

const Navigation = styled.nav<{ isSticky?: true | undefined }>`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.3rem 20rem;
  background: var(--gray0);
  position: ${({ isSticky }) => (isSticky ? "sticky" : "relative")};
  top: 0;

  @media (max-width: 1199px) {
    padding: 3.2rem 3.2rem;
  }

  @media (max-width: 767px) {
    padding: 1.3rem 3.2rem;
    top: 0;
  }
`;

const NavContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  min-width: 104rem;
  flex: 0 1 152rem;
  gap: 0.8rem;

  @media (max-width: ${PC_SIZE}) {
    min-width: 32rem;
    flex: 0 1 104rem;
  }
`;

const Logo = styled(NavLogo)`
  width: 13.3rem;
  height: 2.4rem;
  cursor: pointer;

  @media (max-width: ${TABLET_SIZE}) {
    max-height: 1.6rem;
    max-width: 8.8667rem;
  }
`;

const Account = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const ProfileImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 1.4rem;
`;

const Email = styled.p`
  color: #373740;
`;

const LoginButton = styled.button`
  display: flex;
  width: 12.8rem;
  padding: 1.6rem 2rem;
  border: 0;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--grayLight);
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 0.8rem;
  background: var(--graBlueToSkyBlue);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${TABLET_SIZE}) {
    font-size: 1.4rem;
    padding: 1rem 1.6rem;
    width: 8rem;
    margin: 0;
  }
`;
