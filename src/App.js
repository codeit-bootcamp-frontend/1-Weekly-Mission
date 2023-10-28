import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SharedPage from './pages/SharedPage';
import FolderPage from './pages/FolderPage';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useCallback, useEffect, useState } from 'react';
import { getFolders, getUserProfile } from './api/api';
import useAsync from './hooks/useAsync';
import './css/App.css';

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [folders, setFolders] = useState([]);
  const [isLoadingUserProfile, userProfileLoadingError, getUserProfileAsync] = useAsync(getUserProfile);
  const [isLoadingFolders, loadingFoldersError, getFoldersAsync] = useAsync(getFolders);

  const handleUserProfileLoad = useCallback(async () => {
    const result = await getUserProfileAsync();
    if (!result) {
      return;
    }
    const receivedUserProfile = result.data[0];
    setUserProfile(receivedUserProfile);
  }, [getUserProfileAsync]);

  const handleFolderLoad = useCallback(async () => {
    const result = await getFoldersAsync();
    if (!result) {
      return;
    }
    const receivedFolders = result.data;
    setFolders(receivedFolders);
  }, [getFoldersAsync]);

  // const { name, owner, links } = result.data;
  // setFolder({
  //   avatar: owner?.profileImageSource ?? '',
  //   ownerName: owner?.name ?? '',
  //   folderName: name ?? '',
  // });

  useEffect(() => {
    handleUserProfileLoad();
    handleFolderLoad();
  }, [handleFolderLoad, handleUserProfileLoad]);

  return (
    <>
      <Nav userProfile={userProfile} userProfileLoadingError={userProfileLoadingError} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shared" element={<SharedPage loadingFoldersError={loadingFoldersError} folders={folders} />} />
          <Route path="/folder" element={<FolderPage folders={folders} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
