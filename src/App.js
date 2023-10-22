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
  const [userProfile, setUserProfile] = useState(null); // api 객체 받아오기
  const [folder, setFolder] = useState(null); // api 객체 받아오기
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
    // 폴더 정보 받아오기
    const { name, owner, links } = { ...result.folder };
    setFolder({
      avatar: owner?.profileImageSource,
      ownerName: owner?.name,
      folderName: name,
    });
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
          <Header folder={folder} />
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
