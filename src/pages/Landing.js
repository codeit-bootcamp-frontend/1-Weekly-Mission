import mainImg from '../assets/images/_img.png';
import mainImg1 from '../assets/images/_img1.png';
import mainImg2 from '../assets/images/img2.png';
import mainImg3 from '../assets/images/img3.png';
import mainImg4 from '../assets/images/_img4.png';
import styled, { css } from 'styled-components';
import Button from '../components/Button';

const Title = styled.div`
  font-size: ${({ size }) => size}px;
  font-weight: 700;
  text-align: ${({ align }) => align};
`;

const GradientText = styled(Title)`
  font-size: ${({ size }) => size}px;
  background: ${({ gradient }) => gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LandingButton = styled(Button)`
  width: 350px;
  padding: 16px 20px;
  border-radius: 8px;
`;

export default function Landing() {
  return (
    <div>
      <Title size={64}>
        <GradientText
          gradient={'linear-gradient(96deg, #FE8A8A 1.72%, #A4CEFF 74.97%)'}
          as='span'
        >
          세상의 모든 정보
        </GradientText>
        를
        <br />
        쉽게 저장하고 관리해 보세요
      </Title>
      <LandingButton type={'링크 추가하기'} />
    </div>
  );
}
