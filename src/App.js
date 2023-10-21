import React, { useEffect, useState } from 'react';
import Nav from './components/nav/Nav';
import SharedPage from './pages/share/SharedPage';
import Footer from './components/footer/Footer';
import { getSampleFolder, getSampleUser } from './api/user';
import Header from './components/header/Header';

export default function App() {
  const [userProfile, setUserProfile] = useState({});
  const [folderInfo, setFolderInfo] = useState(null);

  const handleFetchUser = async () => {
    const response = await getSampleUser();
    const { id, name, email, profileImageSource } = response;
    setUserProfile((prevItem) => ({
      ...prevItem,
      id,
      name,
      email,
      profileImageSource,
    }));
  };

  useEffect(async () => {
    const response = await getSampleFolder();
    setFolderInfo(response);
  }, []);

  useEffect(() => {
    handleFetchUser();
  }, []);

  return (
    <div>
      <Nav userProfile={userProfile} />
      <Header folderInfo={folderInfo} />
      <SharedPage />
      <Footer />
    </div>
  );
}
