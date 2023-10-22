import './css/reset.css';
import './css/colors.css';
import './css/App.css';
import CardList from './components/CardList';
import { useCallback, useEffect, useState } from 'react';
import { getCards, getUserProfile } from './api/api';
import useAsync from './hooks/useAsync';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoadingUserProfile, userProfileLoadingError, getUserProfileAsync] = useAsync(getUserProfile);
  const [isLoading, loadingError, getCardsAsync] = useAsync(getCards);

  const handleUserProfile = useCallback(async () => {
    const result = await getUserProfileAsync(); // 커스텀 훅
    if (!result) {
      return;
    }

    const nextUserProfile = { ...result };
    setUserProfile(nextUserProfile);
  }, [getUserProfileAsync]);

  const handleLoad = useCallback(async () => {
    const result = await getCardsAsync(); // 커스텀 훅
    if (!result) {
      return;
    }

    const { links } = result.folder;
    setCards(links);
  }, [getCardsAsync]);

  useEffect(() => {
    handleUserProfile();
    handleLoad();
  }, [handleLoad, handleUserProfile]);

  return (
    <>
      <div className="App">
        <header>
          <Nav userProfile={userProfile} userProfileLoadingError={userProfileLoadingError} />
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
