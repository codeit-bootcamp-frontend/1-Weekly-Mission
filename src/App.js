import './css/reset.css';
import './css/colors.css';
import './css/App.css';
import { useCallback, useEffect, useState } from 'react';
import { getCards, getUserProfile } from './api/api';
import useAsync from './hooks/useAsync';
import Nav from './components/Nav';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import Footer from './components/Footer';

function App() {
  const [userProfile, setUserProfile] = useState(null); // api 객체 받아오기
  const [folder, setFolder] = useState(null); // api 객체 받아오기
  const [cards, setCards] = useState([]);
  // useAsync 사용해서 비동기 함수 처리하기 (pending, fulfilled, rejected)
  const [isLoadingUserProfile, userProfileLoadingError, getUserProfileAsync] = useAsync(getUserProfile);
  const [isLoading, loadingError, getCardsAsync] = useAsync(getCards);

  // GET (유저 프로필)
  const handleUserProfile = useCallback(async () => {
    const result = await getUserProfileAsync(); // 커스텀 훅
    if (!result) {
      return;
    }
    const receivedUserProfile = { ...result };
    setUserProfile(receivedUserProfile);
  }, [getUserProfileAsync]);

  // GET (폴더와 카드)
  const handleLoad = useCallback(async () => {
    const result = await getCardsAsync(); // 커스텀 훅
    if (!result) {
      return;
    }
    const { name, owner, links } = { ...result.folder };
    setFolder({
      // 여기서 마운트 초기값에 대한 null 값 처리
      avatar: owner?.profileImageSource ?? '',
      ownerName: owner?.name ?? '',
      folderName: name ?? '',
    });
    setCards(links);
  }, [getCardsAsync]);

  // 동기화
  useEffect(() => {
    handleUserProfile();
    handleLoad();
  }, [handleLoad, handleUserProfile]);

  return (
    <>
      <div className="App">
        {/*header*/}
        <Nav userProfile={userProfile} userProfileLoadingError={userProfileLoadingError} />
        <Header folder={folder} />
        {/*main*/}
        <main>
          <SearchBar />
          <CardList items={cards} />
          {loadingError?.message && <span>{loadingError.message}</span>}
        </main>
        {/*footer*/}
        <Footer />
      </div>
    </>
  );
}

export default App;
