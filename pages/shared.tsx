import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import CardList from "@/components/Main/CardList/CardList";
import SearchBar from "@/components/Main/FolderSelect/SearchBar";
import { URLS } from "@/utils/getData.type";
import Navigation from "@/components/Nav/Navigation";

export default function SharedPage() {
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
