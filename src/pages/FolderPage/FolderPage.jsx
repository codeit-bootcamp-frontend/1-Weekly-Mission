import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroContent from "../../components/HeroContent/HeroContent";

import MainContent from "../../components/MainContent";

const MainStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
};

function FolderPage() {
  return (
    <>
      <Header />
      <main style={MainStyle}>
        <HeroContent pageType="folder" />
        <MainContent />
      </main>
      <Footer />
    </>
  );
}

export default FolderPage;
