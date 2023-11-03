import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroContent from "../../components/HeroContent/HeroContent";
import MainContent from "../../components/MainContent";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
function SharedPage() {
  return (
    <>
      <Header />
      <MainContainer>
        <HeroContent pageType="shared" />
        <MainContent pageType="shared" />
        <Footer />
      </MainContainer>
    </>
  );
}

export default SharedPage;
