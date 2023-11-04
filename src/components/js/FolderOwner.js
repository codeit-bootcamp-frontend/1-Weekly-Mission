import styled from "styled-components";
import { BlueWrapper } from "./Wrapper";
import { Container } from "./Container";

function FolderOwner({ folderName, owner }) {
  const ownerName = owner?.name;
  const ownerImg = owner?.profileImageSource;

  return (
    <StyledWrapper>
      <OwnerContainer>
        <OwnerAvatarImg src={ownerImg} />
        <OwnerName>{`@${ownerName}`}</OwnerName>
        <FolderName>{folderName}</FolderName>
      </OwnerContainer>
    </StyledWrapper>
  );
}

export default FolderOwner;

const StyledWrapper = styled(BlueWrapper)`
  margin-top: 93px;
`;

const OwnerContainer = styled(Container)`
  padding: 20px 0 60px;
  margin: 0 auto;
`;

const OwnerAvatarImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const OwnerName = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  margin-top: 12px;
`;

const FolderName = styled.span`
  color: #000;
  text-align: center;
  font-weight: 600;
  font-size: 4rem;
  margin-top: 20px;
`;
