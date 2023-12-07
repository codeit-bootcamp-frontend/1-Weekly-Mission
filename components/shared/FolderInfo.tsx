import { SampleFolderDataType } from '@/constants/sampleDataType';
import defaultProfile from '@/public/assets/images/default-profile.svg';
import { DEVICE_SIZE } from '@/styles/DeviceSize';
import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  folder: SampleFolderDataType;
}

function FolderInfo({ folder }: Props) {
  const { name, owner } = folder;

  return (
    <Container>
      <OwnerBox>
        <Img src={owner.profileImageSource || defaultProfile} alt="폴더 소유자 프로필 사진" width={60} height={60} />
        <Name>{`@${owner.name}`}</Name>
      </OwnerBox>
      <FolderTitle>{name}</FolderTitle>
    </Container>
  );
}

export default FolderInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: var(--bg);
  width: 100%;
  padding: 120px 0px 60px;
  text-align: center;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    padding: 80px 0px 40px;
  }
`;

const OwnerBox = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: black;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    width: 50px;
    gap: 6px;
  }
`;

const Img = styled(Image)`
  object-fit: cover;
  border-radius: 100%;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    height: 50px;
  }
`;

const Name = styled.div`
  font-size: 1.6rem;
  line-height: 150%;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 1.4rem;
    line-height: normal;
  }
`;

const FolderTitle = styled.div`
  font-size: 4rem;
  font-weight: 600;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    font-size: 3.2rem;
    letter-spacing: -0.2px;
  }
`;
