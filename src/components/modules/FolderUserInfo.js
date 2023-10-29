import React from "react";
import styled from "styled-components";
import DeviceSizes from "../../utils/DeviceSizes";
const StyledDiv = styled.div`
  background-color: var(--linkbrary-zircon);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 3.2rem 6rem 3.2rem;
  gap: 2rem;
  ${DeviceSizes.tablet} {
    gap: 2.4rem;
  }
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  gap: 1.2rem;
  color: #000;
  font-size: 1.6rem;
  ${DeviceSizes.mobile} {
    font-size: 1.4rem;
  }
`;

const FolderTitle = styled.h1`
  color: #000;
  font-size: 4rem;
  font-weight: 600;

  ${DeviceSizes.mobile} {
    font-size: 3.2rem;
  }
`;

const FolderAvatarImg = styled.img`
  width: 6rem;
`;

const FolderUserInfo = ({ profileImageSource, userName, folderName }) => {
  return (
    <StyledDiv>
      <UserInfo>
        <FolderAvatarImg src={profileImageSource} alt={userName} />@{userName}
      </UserInfo>
      <FolderTitle>{folderName}</FolderTitle>
    </StyledDiv>
  );
};

export default FolderUserInfo;
