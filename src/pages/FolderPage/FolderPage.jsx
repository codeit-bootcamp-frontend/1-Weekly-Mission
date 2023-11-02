import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroContent from "../../components/HeroContent/HeroContent";
import MainContent from "../../components/MainContent";
import FloatingOptionBtn from "../../components/StyledButtons/FloatingOptionBtn/FloatingOptionBtn";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media (max-width: 767px) {
    gap:20px;
`;

const FloatingBtnContainer = styled.div`
  position: fixed;
  z-index: 3;
`;

function FolderPage() {
  return (
    <>
      <Header />
      <FloatingBtnContainer>
        <FloatingOptionBtn />
      </FloatingBtnContainer>
      <MainContainer>
        <HeroContent pageType="folder" />
        <MainContent pageType="folder" />
        <Footer />
      </MainContainer>
    </>
  );
}

export default FolderPage;
