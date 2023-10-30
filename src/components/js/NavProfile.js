import styled from "styled-components";

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 1;
`;

const ProfileLogo = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const ProfileId = styled.span`
  margin-left: 6px;
  font-size: 14px;
  font-weight: 400;

  @media (max-width: 767px) {
    display: none;
  }
`;

function Profile({ account }) {
  const { email, image_source } = account;

  const imgSrc = image_source;

  return (
    <ProfileWrapper>
      <ProfileLogo src={imgSrc} alt="profile_image" />
      <ProfileId className="profile_id">{email}</ProfileId>
    </ProfileWrapper>
  );
}

export default Profile;