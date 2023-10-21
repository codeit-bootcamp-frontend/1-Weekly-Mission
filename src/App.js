import React, { useEffect, useState } from 'react';
import Nav from './components/nav/Nav';
import SharedPage from './pages/share/SharedPage';
import Footer from './components/footer/Footer';
import getSampleUser from './api/user';

export default function App() {
  const [userProfile, setUserProfile] = useState({});

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

  useEffect(() => {
    handleFetchUser();
  }, []);

  return (
    <div>
      <Nav userProfile={userProfile} />
      <SharedPage />
      <Footer />
    </div>
  );
}
