import './css/reset.css';
import './css/App.css';
import CardList from './components/CardList';
import { useCallback, useEffect, useState } from 'react';
import { getCards } from './api/api';
import useAsync from './hooks/useAsync';

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, loadingError, getCardsAsync] = useAsync(getCards);

  const handleLoad = useCallback(
    async () => {
      const result = await getCardsAsync();
      if (!result) {
        return;
      }

      const { links } = result.folder;
      setCards(links);
    }, [getCardsAsync],
  );

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div className='App'>
      <header>
        <nav></nav>
      </header>
      <main>
        <form className='search-form'>
          <img className='search-icon' src='/assets/image/search.svg' alt='검색 아이콘' />
          <input
            className='search-bar'
            type='search'
            placeholder='링크를 검색해 보세요.'
          />
        </form>
        <CardList items={cards} />
        {loadingError?.message && <span>{loadingError.message}</span>}
      </main>
    </div>
  );
}

export default App;
