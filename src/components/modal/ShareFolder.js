import styled from 'styled-components';
import linkImg from '../../assets/images/link.svg';
import facebookImg from '../../assets/images/facebook.png';
import kakaoImg from '../../assets/images/kakao.png';
import { SubTitle } from './ModalStyle';

export default function ShareFolder({ currentFolder }) {
  return (
    <>
      <SubTitle>{currentFolder.name}</SubTitle>
      <Container>
        <Box>
          <Img src={kakaoImg} alt='아이콘' />
          <P>카카오톡</P>
        </Box>
        <Box>
          <Img src={facebookImg} alt='아이콘' />
          <P>페이스북</P>
        </Box>
        <Box>
          <Circle>
            <img src={linkImg} alt='아이콘' />
          </Circle>
          <P>링크 복사</P>
        </Box>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: 32px;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled(Center)`
  flex-direction: column;
`;

const Img = styled.img`
  width: 42px;
  height: 42px;
`;

const P = styled.p`
  margin: 10px 0 0 0;
`;

const Circle = styled(Center)`
  width: 42px;
  height: 42px;
  background-color: #9d9d9d0a;
  border-radius: 99px;
`;
