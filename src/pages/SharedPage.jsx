// 기존에 있던 것
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';

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
      </div>
    </>
  );
}

export default SharedPage;
