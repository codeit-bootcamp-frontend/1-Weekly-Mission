import './css/reset.css';
import './css/colors.css';
import './css/App.css';
import CardList from './components/CardList';
import { useCallback, useEffect, useState } from 'react';
import { getCards } from './api/api';
import useAsync from './hooks/useAsync';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, loadingError, getCardsAsync] = useAsync(getCards);

  const handleLoad = useCallback(async () => {
    const result = await getCardsAsync();
    if (!result) {
      return;
    }

    const { links } = result.folder;
    setCards(links);
  }, [getCardsAsync]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      <div className="App">
        <header>
          <Nav />
          <Header />
        </header>
        <main>
          <SearchBar />
          <CardList items={cards} />
          {loadingError?.message && <span>{loadingError.message}</span>}
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
