// 기존에 있던 것
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

function SharedPage({ loadingError, folder, cards }) {
  return (
    <>
      <div className="App">
        <Header folder={folder} />
        <main>
          <SearchBar />
          <CardList items={cards} />
          {loadingError?.message && <span>{loadingError.message}</span>}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default SharedPage;
