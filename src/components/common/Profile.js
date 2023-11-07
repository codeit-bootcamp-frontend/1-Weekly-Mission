import styled from 'styled-components';
import defaultProfileImg from 'assets/images/default-profile.svg';
import useGetWindowWidth from 'hooks/useGetWindowWidth';

function Profile({ user }) {
  const { email, profileImageSource, image_source } = user;
  const innerWidth = useGetWindowWidth();

  return (
    <Container>
      <Img src={profileImageSource || image_source || defaultProfileImg} alt="프로필 사진" />
      {innerWidth < 768 ? null : <Text>{email}</Text>}
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

const Img = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  object-fit: cover;
  border-radius: 100%;
`;

const Text = styled.div`
  font-size: 1.4rem;
`;
