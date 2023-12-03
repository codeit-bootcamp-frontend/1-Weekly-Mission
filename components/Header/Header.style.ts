import { BodyRegular2 } from '@/styles/typography';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 33px 200px;

  background-color: ${props => props.theme['background']};
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  background-color: ${props => props.theme['primary']};
  border-radius: 47px;
`;

const Name = styled.div`
  ${BodyRegular2}
`;

export { Container, Profile, ProfileImg, Name };
