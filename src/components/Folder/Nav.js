import NavLogo from '../../assets/Nav_logo.svg';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { async } from 'q';

export const Navigation = styled.nav`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.3rem 20rem;
  background: var(--gray0);
  position: ${({ isSticky }) => (isSticky ? 'sticky' : 'relative')};
  top: 0;

  @media (max-width: 1199px) {
    padding: 3.2rem 3.2rem;
  }

  @media (max-width: 767px) {
    padding: 1.3rem 3.2rem;
    top: 0;
  }
`;

export const NavContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  min-width: 104rem;
  flex: 0 1 152rem;
  gap: 0.8rem;

  @media (max-width: 1199px) {
    min-width: 32rem;
    flex: 0 1 104rem;
  }
`;

export const Logo = styled.img`
  width: 13.3rem;
  height: 2.4rem;
  cursor: pointer;

  @media (max-width: 767px) {
    height: 1.6rem;
    width: auto;
  }
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const ProfileImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 1.4rem;
`;

export const Email = styled.p`
  color: #373740;
`;

export const LoginButton = styled.button`
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

  @media (max-width: 767px) {
    font-size: 1.4rem;
    padding: 1rem 1.6rem;
    width: 8rem;
    margin: 0;
  }
`;

const Nav = ({ account, setSuccess, isSticky = false }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [userProfileImg, setUserProfileImg] = useState(null);

  const navigate = useNavigate();

  const handleClick = () => {
    if (!account) {
      navigate('/signIn');
    } else {
      handleLoginInfo(account);
    }
  };

  const handleLoginInfo = (account) => {
    const { email, image_source } = account;
    setUserEmail(email);
    setUserProfileImg(image_source);
    if (setSuccess) setSuccess(true); // 회원만 볼 수 있는 페이지
  };

  // useEffect(() => {   // 주석 풀면 자동 로그인
  //   handleLoginInfo(account);
  // }, [account]);

  return (
    <Navigation isSticky={isSticky}>
      <NavContents>
        <Link to="/">
          <Logo src={NavLogo} alt="홈페이지 로고: 클릭 시 메인화면으로 이동" />
        </Link>
        {userEmail && (
          <Account>
            <ProfileImg src={userProfileImg} alt="프로필 이미지" />
            <Email>{userEmail}</Email>
          </Account>
        )}
        {!userEmail && <LoginButton onClick={handleClick}>로그인</LoginButton>}
      </NavContents>
    </Navigation>
  );
};

export default Nav;
