import Navigation from "src/components/Nav/Navigation";
import Footer from "src/components/Footer/Footer";
import Header from "src/components/Header/Header";
import Main from "src/components/Main/Main";
import CardList from "src/components/Main/Card/CardList";
import SearchBar from "src/components/Main/SearchBar";
import { URLS } from "src/utils/getData.type";

function SharedPage() {
  return (
    <>
      <Navigation />
      <Header />
      <Main>
        <SearchBar />
        <CardList path={URLS.SHARED_FOLDER} />
      </Main>
      <Footer />
    </>
  );
}

export default SharedPage;
