import './App.css';
import { useEffect, useState } from 'react';
import { getSample } from './api';
import Navigation from './components/Nav/Navigation';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [folder, setFolder] = useState('');

  const loadData = async (option) => {
    const res = await getSample(option);
    if (!res) return;
    const newfolder = res.folder;
    setFolder(newfolder);
  }

  useEffect(() => {
    loadData('folder');
  }, [])

  return (
    <>
      <Navigation />
      <Header name={folder.name} owner={folder.owner} />
      <Main links={folder.links} />
      <Footer />
    </>

  );
}

export default App;
