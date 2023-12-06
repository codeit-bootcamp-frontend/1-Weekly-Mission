import { SampleUserType, UsersDataType } from "@/utils/types";
import Image from "next/image";
import styled from "styled-components";
import defaultProfile from "@/src/image/default_profile.svg";

interface NavProfileProps {
  user_data: UsersDataType | SampleUserType;
}

const NavProfile = ({ user_data }: NavProfileProps) => {
  const { email, profileImageSource, image_source } = user_data;

  return (
    <ProfileWrapper>
      <ProfileImg src={profileImageSource || image_source || defaultProfile} alt="프로필 이미지" width={100} height={100} unoptimized />
      <ProfileEmail>{email}</ProfileEmail>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const ProfileImg = styled(Image)`
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
