import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';
import HeaderRequestData, { introRequestData } from './services/api';
import './styles/Variables.css';
import './styles/Reset.css';

function App() {
  const [headerId, setHeaderId] = useState();
  const [headerEmail, setHeaderEmail] = useState('');
  const [headerImg, setHeaderImg] = useState('');

  const [introId, setIntroId] = useState();
  const [introName, setIntroName] = useState('');
  const [introImg, setIntroImg] = useState('');
  const [introFolderName, setIntroFolderName] = useState('');

  const loginInfo = async () => {
    const headerResult = await HeaderRequestData();
    if (!headerResult) return;

    const { id, email, profileImageSource } = headerResult;

    setHeaderId(id);
    setHeaderEmail(email);
    setHeaderImg(profileImageSource);
  };

  const profileInfo = async () => {
    const introResult = await introRequestData();
    if (!introResult) return;

    const { id, name, profileImageSource } = introResult.owner;

    setIntroId(id);
    setIntroName(name);
    setIntroImg(profileImageSource);
    setIntroFolderName(introResult.name);
  };

  useEffect(() => {
    loginInfo();
    profileInfo();
  }, []);

  return (
    <>
      <Header id={headerId} email={headerEmail} headerProfileImg={headerImg} />
      <main>
        <Intro id={introId} name={introName} introProfileImg={introImg} introFolderName={introFolderName} />
        <Main />
      </main>
      <Footer />
    </>
  );
}

export default App;
