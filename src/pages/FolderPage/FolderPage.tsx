import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroContent from "../../components/HeroContent/HeroContent";
import MainContent from "../../components/MainContent";
import FloatingAddFolderBtn from "../../components/Buttons/FloatingAddFolderBtn";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  @media (max-width: 767px) {
    gap: 20px;
  }
`;

const FloatingBtnContainer = styled.div`
  position: fixed;
  z-index: 3;
  @media (min-width: 767px) {
    visibility: hidden;
  }
`;

function FolderPage() {
  return (
    <>
      <Header />
      <FloatingBtnContainer>
        <FloatingAddFolderBtn />
      </FloatingBtnContainer>
      <MainContainer>
        <HeroContent />
        <MainContent />
        <Footer />
      </MainContainer>
    </>
  );
}

export default FolderPage;
