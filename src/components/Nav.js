import "../styles/reset.css";
import logo from "../images/logo.svg";
import styled from "styled-components";
function Nav({ lists }) {
  const { userEmail, userImage } = lists;

  return (
    <NavContainer>
      <NavBox>
        <Logo className="logo" src={logo} alt="회사 로고" />
        {lists ? (
          <Profile>
            <UseImage src={userImage} alt="사용자 이미지" />
            <UserEmail className="user-email">{userEmail}</UserEmail>
          </Profile>
        ) : (
          <Cta href="/">
            <span>로그인</span>
          </Cta>
        )}
      </NavBox>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  padding: 33px 200px 32px 200px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: var(--linkbrary-bg, #f0f6ff);
  justify-content: center;

  @media (max-width: 1123px) {
    padding: 33px 32.5px 32px 32.5px;
  }
`;

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.3rem;
  @media (max-width: 1123px) {
    width: 900px;
  }
  @media (max-width: 768px) {
    width: 500px;
  }
`;

const Logo = styled.img`
  width: 133px;
  height: 24px;
`;

const Profile = styled.div`
  display: flex;
  gap: 6px;
  width: 158px;
  height: 28px;
  justify-content: center;
  align-items: center;
`;

const UseImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const UserEmail = styled.span`
  color: var(--linkbrary-gray-100, #373740);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Cta = styled.a`
  cursor: pointer;
  display: flex;
  width: 128px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );

  color: white;
  font-size: 1.4rem;
  font-weight: 600;
`;

export default Nav;
