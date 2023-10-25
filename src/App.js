import Nav from './componant/Nav/Nav';
import FolderInfo from './componant/FolderInfo';
import Footer from './componant/Footer/Footer';
import Search from './componant/Search';
import Cards from './componant/Cards';
import { getSampleFolder } from './api';
import { useEffect, useState } from 'react';

function App() {
  const section = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    width: '100%',
    maxWidth: '112.4rem',
    padding: '0rem 3.2rem',
    margin: '4rem auto',
  };

  const [name, setName] = useState('');
  const [owner, setOwner] = useState({});
  const [cards, setCards] = useState([]);

  const loadFolderData = async () => {
    const {
      folder: { name, owner, links },
    } = await getSampleFolder();

    setName(name);
    setOwner({ ...owner });
    setCards((prevCards) => {
      return [...prevCards, ...links];
    });
  };

  useEffect(() => {
    loadFolderData();
  }, []);

  return (
    <>
      <Nav />
      <FolderInfo name={name} owner={owner} />
      <section style={section}>
        <Search />
        <Cards cards={cards} />
      </section>
      <Footer />
    </>
  );
}

export default App;
