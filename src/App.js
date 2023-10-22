import './css/reset.css';
import './css/App.css';
import CardList from './components/CardList';
import { useCallback, useEffect, useState } from 'react';
import { getCards } from './api/api';
import useAsync from './hooks/useAsync';
import Nav from './components/Nav';

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
      <Nav />
      <div className="App">
        <header>
          <nav></nav>
        </header>
        <main>
          <input />
          <CardList items={cards} />
          {loadingError?.message && <span>{loadingError.message}</span>}
        </main>
      </div>
    </>
  );
}

export default App;
