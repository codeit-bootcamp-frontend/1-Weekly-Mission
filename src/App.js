import './css/reset.css';
import './css/App.css';
import CardList from './components/CardList';
import { useCallback, useEffect, useState } from 'react';
import { getCards, getUserProfile } from './api/api';
import useAsync from './hooks/useAsync';
import UserProfile from './components/UserProfile';
import Folder from './components/Folder';

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [folderProfile, setFolderProfile] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoadingUserProfile, userProfileLoadingError, getUserProfileAsync] = useAsync(getUserProfile);
  const [isLoadingCards, cardsLoadingError, getCardsAsync] = useAsync(getCards);

  const handleUserProfile = useCallback(
    async () => {
      const result = await getUserProfileAsync();
      if (!result) {
        return;
      }

      const userProfile = { ...result };
      setUserProfile(userProfile);
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

      const { name, owner, links: cards } = { ...result.folder };

      setFolderProfile({
        avatar: owner?.profileImageSource ?? '',
        ownerName: owner?.name ?? '',
        folderName: name
      });
      setCards(cards);
    }, [getCardsAsync],
  );

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div className='App'>
      <nav>
        <div className='gnb'>
          <img className='logo' src='/assets/images/logo.svg' alt='홈으로 연결된 Linkbrary 로고' />
          <UserProfile userProfile={userProfile} />
          {userProfileLoadingError?.message && <span>{userProfileLoadingError.message}</span>}
        </div>
      </nav>
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
      <footer>
        <div className='footer-box'>
          <span className='copyright'>©codeit - 2023</span>
          <div className='footer-links'>
            <a className='footer-link' href=''>Privacy Policy</a>
            <a className='footer-link' href=''>FAQ</a>
          </div>
          <div className="sns">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/facebook.svg" alt="facebook 홈페이지로 연결된 facebook 로고" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/twitter.svg" alt="twitter 홈페이지로 연결된 twitter 로고" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/youtube.svg" alt="youtube 홈페이지로 연결된 youtube 로고" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/instagram.svg" alt="instagram 홈페이지로 연결된 instagram 로고" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
