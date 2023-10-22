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

  const [introId, setIntroId] = useState();
  const [introName, setIntroName] = useState('');
  const [introImg, setIntroImg] = useState('');
  const [introFolderName, setIntroFolderName] = useState('');

  const loginInfo = async () => {
    const headerResult = await HeaderRequestData();
    if (!headerResult) return;

    setLoginData(headerResult);
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
      <Header id={loginData.id} email={loginData.email} img={loginData.profileImageSource} />
      <main>
        <Intro id={introId} name={introName} introProfileImg={introImg} introFolderName={introFolderName} />
        <Main />
      </main>
      <Footer />
    </>
  );
}

export default App;
