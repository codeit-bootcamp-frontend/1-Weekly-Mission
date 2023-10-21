import './css/reset.css';
import './css/App.css';
import CardList from './components/CardList';
import { useCallback, useEffect, useState } from 'react';
import { getCards, getUserProfile } from './api/api';
import useAsync from './hooks/useAsync';
import UserProfile from './components/UserProfile';

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoadingUserProfile, userProfileLoadingError, getUserProfileAsync] = useAsync(getUserProfile);
  const [isLoadingCards, cardsLoadingError, getCardsAsync] = useAsync(getCards);

  const handleUserProfile = useCallback(
    async () => {
      const result = await getUserProfileAsync();
      if (!result) {
        return;
      }

      setUserProfile(result);
    }, [getUserProfileAsync],
  );

  useEffect(() => {
    handleUserProfile();
  }, [handleUserProfile]);

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
      <nav>
        <div className='gnb'>
          <img className='logo' src='/assets/image/logo.svg' alt='홈으로 연결된 Linkbrary 로고' />
          <UserProfile userProfile={userProfile}/>
        </div>
      </nav>
      <header>
        <div className='avatar'>아바타</div>
        <div className='nickname'>닉네임</div>
        <div className='folder'>즐겨찾기</div>
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
        {cardsLoadingError?.message && <span>{cardsLoadingError.message}</span>}
      </main>
    </div>
  );
}

export default App;
