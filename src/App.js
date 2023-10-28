import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';
import SharedPage from './pages/SharedPage';
import FolderPage from './pages/FolderPage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useCallback, useEffect, useState } from 'react';
import { getCards, getUserProfile } from './api/api';
import useAsync from './hooks/useAsync';
import Home from './pages/Home';

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [folder, setFolder] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoadingUserProfile, userProfileLoadingError, getUserProfileAsync] = useAsync(getUserProfile);
  const [isLoading, loadingError, getCardsAsync] = useAsync(getCards);

  const handleUserProfile = useCallback(async () => {
    const result = await getUserProfileAsync();
    if (!result) {
      return;
    }
    const receivedUserProfile = result.data[0]; // API 값 배열로 되어있음
    setUserProfile(receivedUserProfile);
  }, [getUserProfileAsync]);

  const handleLoad = useCallback(async () => {
    const result = await getCardsAsync();
    if (!result) {
      return;
    }
    const { name, owner, links } = { ...result.folder };
    setFolder({
      avatar: owner?.profileImageSource ?? '',
      ownerName: owner?.name ?? '',
      folderName: name ?? '',
    });
    setCards(links);
  }, [getCardsAsync]);

  useEffect(() => {
    handleUserProfile();
    handleLoad();
  }, [handleLoad, handleUserProfile]);

  return (
    <>
      <Nav userProfile={userProfile} userProfileLoadingError={userProfileLoadingError} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shared" element={<SharedPage loadingError={loadingError} folder={folder} cards={cards} />} />
          <Route path="/folder" element={<FolderPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
