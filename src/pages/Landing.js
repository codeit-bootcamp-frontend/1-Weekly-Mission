import mainImg from '../assets/images/_img.png';
import styled from 'styled-components';
import Button from '../components/common/Button';
import LandingContent from '../components/Landing/LandingContent';
import contentArr from '../assets/content';

export default function Landing() {
  return (
    <div>
      <MainContainer>
        <MainTitle>
          <MainGradientText as='span'>세상의 모든 정보</MainGradientText>
          를
          <br />
          <Br as='span'>쉽게 저장하고</Br> 관리해 보세요
        </MainTitle>
        <LandingButton type={'링크 추가하기'} />
        <MainImg src={mainImg} />
      </MainContainer>
      {contentArr.map((data) => (
        <LandingContent data={data} />
      ))}
    </div>
  );
}

const MainContainer = styled.div`
  background-color: var(--linkbrary-bg);
  padding: 70px 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    padding-top: 28px;
  }
`;

const MainTitle = styled.div`
  font-size: 64px;
  font-weight: 700;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

const MainGradientText = styled(MainTitle)`
  background: linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LandingButton = styled(Button)`
  width: 350px;
  padding: 16px 20px;
  margin: 40px;
  border-radius: 8px;
  display: block;
  @media (max-width: 767px) {
    width: 200px;
    padding: 10px 16px;
    margin: 24px;
  }
`;

const Br = styled(MainTitle)`
  @media (max-width: 1199px) {
    display: block;
  }
`;

const MainImg = styled.img`
  width: 1200px;
  height: 590px;
  @media (max-width: 1199px) {
    width: 698px;
    height: 343px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`;
