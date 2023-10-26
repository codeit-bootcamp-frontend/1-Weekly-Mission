import './css/reset.css';
import './css/App.css';
import CardList from './components/CardList';
import { useCallback, useEffect, useState } from 'react';
import { getCards } from './api/api';
import useAsync from './hooks/useAsync';
import Folder from './components/Folder';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

function App() {
  const [folderProfile, setFolderProfile] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoadingCards, cardsLoadingError, getCardsAsync] = useAsync(getCards);

  const handleLoad = useCallback(
    async () => {
      const result = await getCardsAsync();
      if (!result) {
        return;
      }

      const { name, owner, links: cards } = { ...result.folder };

      setFolderProfile({
        avatar: owner?.profileImageSource ?? '',
        ownerName: owner?.name ?? '',
        folderName: name,
      });
      setCards(cards);
    }, [getCardsAsync],
  );

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div className='App'>
      <Nav />
      <header>
        <Folder folderProfile={folderProfile} />
      </header>
      <main>
        <form className='search-form'>
          <img className='search-icon' src='/assets/images/search.svg' alt='검색 아이콘' />
          <input
            className='search-bar'
            type='search'
            placeholder='링크를 검색해 보세요.'
          />
        </form>
        <CardList items={cards} />
        {cardsLoadingError?.message && <span>{cardsLoadingError.message}</span>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
