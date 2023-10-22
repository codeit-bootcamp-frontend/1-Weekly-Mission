import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import getSample from './api';
import { useEffect, useState } from 'react';


function App() {
  const [folder, setFolder] = useState({});

  const getSampleFolder = async (option) => {
    let result = await getSample(option);
    setFolder(result)
  }
  const { links, name, owner } = folder;

  useEffect(() => getSampleFolder('folder'), []);

  return (
    <>
      <Nav />
      <Header name={name} owner={owner} />
      <Main links={links} />
      <Footer />

    </>

  );
}

export default App;
