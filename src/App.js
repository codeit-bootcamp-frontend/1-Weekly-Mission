import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { getUserProfile } from './api/api';
import useAsync from './hooks/useAsync';
import GlobalStyle from './css/GlobalStyle';

import SharedPage from './pages/SharedPage';
import FolderPage from './pages/FolderPage';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [userProfile, setUserProfile] = useState(undefined);
  const [isLoadingUserProfile, userProfileLoadingError, getUserProfileAsync] = useAsync(getUserProfile);

  const handleUserProfileLoad = useCallback(async () => {
    const result = await getUserProfileAsync();
    if (!result) {
      return;
    }
    const receivedUserProfile = result.data[0];
    setUserProfile(receivedUserProfile);
  }, [getUserProfileAsync]);

  useEffect(() => {
    handleUserProfileLoad();
  }, [handleUserProfileLoad]);

  return (
    <>
      <GlobalStyle />
      <Nav userProfile={userProfile} userProfileLoadingError={userProfileLoadingError} />
      <Router>
        <Routes>
          <Route path="/folder">
            <Route index element={<FolderPage />} />
            <Route path=":folderId" element={<FolderPage />} />
          </Route>
          <Route path="/shared" element={<SharedPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
