import CardContainer from "../../components/CardContainer/CardContainer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroContent from "../../components/HeroContent/HeroContent";
import { SearchLinkInput } from "../../components/TextInputs/TextInputs";
import MainContent from "../../components/MainContent";

const MainStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
};

function SharedPage() {
  return (
    <>
      <Header />
      <main style={MainStyle}>
        <HeroContent pageType="shared" />
        <MainContent />
      </main>
      <Footer />
    </>
  );
}

export default SharedPage;
