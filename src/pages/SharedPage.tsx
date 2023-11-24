import Navigation from '../components/Nav/Navigation';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import CardList from '../components/Main/CardList';
import SearchBar from '../components/Main/SearchBar';

function SharedPage() {
  return (
    <>
      <Navigation />
      <Header />
      <Main>
        <SearchBar />
        <CardList type="SHARED_FOLDER" />
      </Main>
      <Footer />
    </>

  );
}

export default SharedPage;