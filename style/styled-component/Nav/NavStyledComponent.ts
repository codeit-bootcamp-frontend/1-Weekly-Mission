import styled from 'styled-components';

export const NavContainer = styled.div`
  background: #f0f6ff;
`;

export const NavWrapper = styled.div`
  background: #f0f6ff;
  display: flex;
  padding: 33px 200px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1124px) {
    padding: 33px;
  }
  @media (max-width: 767px) {
    padding: 18px 33px;
  }
`;

export const NavLibraryImg = styled.div`
  position: relative;
  width: 133px;
  height: 24px;
`;

export const NavLoginButton = styled.button`
  cursor: pointer;
  color: #f5f5f5;
  font-size: 18px;
  font-weight: 600;
  width: 128px;
  padding: 16px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  text-decoration: none;
`;

export const ProfileDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ProfileDivLogo = styled.div`
  display: flex;
`;

export const ProfileHumanImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const ProfileDivMail = styled.div`
  color: #373740;
  font-size: 14px;
  font-weight: 400;
`;

export const SharedNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 60px 0;
  align-items: center;
  gap: 20px;
`;

export const SharedNavLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const SharedNavSmileImg = styled.img`
  height: 60px;
`;

export const SharedNavDiv = styled.div`
  color: #000;
  font-weight: 400;
  line-height: 24px;
`;
