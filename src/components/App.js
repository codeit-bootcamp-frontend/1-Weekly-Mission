import './App.css';
import { useEffect, useState } from 'react';
import { getSample } from './api';
import Navigation from './components/Nav/Navigation';
import CardList from '../components/Main/Card';

function App() {
  const [links, setLinks] = useState([]);

  const loadData = async (option) => {
    const res = await getSample(option);
    if (!res) return;
    const folder = res.folder;
    const newLinks = folder.links;
    setLinks(newLinks);
  }

  useEffect(() => {
    loadData('folder');
  }, [])

  return (
    <>
      {/*<Navigation />*/}
      {/* <Header /> */}
      {/* <Main /> */}

      <CardList links={links} />
      {/* <Footer /> */}
    </>

  );
}

export default App;