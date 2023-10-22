import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';
import { HeaderRequestData, introRequestData } from './services/Api';
import './styles/Reset.css';
import './styles/Variables.css';

function App() {
  const [loginData, setLoginData] = useState({});
  const [folderData, setFolderData] = useState({});

  const loginInfo = async () => {
    const headerResult = await HeaderRequestData();
    if (!headerResult) return;

    setLoginData(headerResult);
  };

  const profileInfo = async () => {
    const introResult = await introRequestData();
    if (!introResult) return;

    const { folder } = introResult;

    setFolderData(folder);
  };

  useEffect(() => {
    loginInfo();
    profileInfo();
  }, []);

  return (
    <>
      <Header loginData={loginData} />
      <main>
        <Intro folderData={folderData} />
        <Main />
      </main>
      <Footer />
    </>
  );
}

export default App;
