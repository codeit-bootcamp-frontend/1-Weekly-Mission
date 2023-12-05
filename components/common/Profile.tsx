import styled from 'styled-components';
import Image from 'next/image';
import defaultProfileImg from '@/public/assets/images/default-profile.svg';
import { UserDataType } from '@/constants/dataType';
import { SampleUserType } from '@/constants/sampleDataType';
import { DEVICE_SIZE } from '@/styles/DeviceSize';

interface Props {
  user: UserDataType | SampleUserType;
}

function Profile({ user }: Props) {
  const { email, profileImageSource, image_source } = user;

  return (
    <Container>
      <Img src={profileImageSource || image_source || defaultProfileImg} alt="프로필 사진" width={28} height={28} />
      <Text>{email}</Text>
    </Container>
  );
}

export default Profile;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--gray-100);
`;

const Img = styled(Image)`
  object-fit: cover;
  border-radius: 100%;
`;

const Text = styled.div`
  font-size: 1.4rem;

  @media (max-width: ${DEVICE_SIZE.mobile}) {
    display: none;
  }
`;
