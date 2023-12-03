import { BodyRegular1, H1 } from '@/styles/typography';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 60px;

  background-color: ${props => props.theme['background']};
`;

const Profile = styled.img`
  width: 60px;
  height: 60px;
  padding: 16px 15px;

  border-radius: 47px;
  background-color: ${props => props.theme['primary']};
`;

const Name = styled.div`
  ${BodyRegular1}
  margin-top: 1.2rem;
`;

const FolderName = styled.div`
  margin-top: 2rem;
  ${H1}
`;

export { Container, Profile, Name, FolderName };
