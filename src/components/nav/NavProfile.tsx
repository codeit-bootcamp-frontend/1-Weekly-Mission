import styled from "styled-components";

interface NavProfileProps {
  user_data: {
    email: string;
    profileImageSource: string;
    image_source: string;
  };
}

const NavProfile = ({ user_data }: NavProfileProps) => {
  const { email, profileImageSource, image_source } = user_data;

  return (
    <ProfileWrapper>
      <ProfileImg src={profileImageSource || image_source} alt="프로필 이미지" />
      <ProfileEmail>{email}</ProfileEmail>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const ProfileImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  flex-shrink: 0;
  border-radius: 50%;
`;

const ProfileEmail = styled.section`
  color: var(--gray10);
  font-size: 1.4rem;

  @media (max-width: 767px) and (min-width: 375px) {
    display: none;
  }
`;

export default NavProfile;
