import { useEffect, useState } from 'react';
import BinderInfo from '../components/BinderInfo/BinderInfo';
import { getSample } from '../apis/api';
import SearchBar from '../components/SearchBar/SearchBar';
import Binder from '../components/Binder/Binder';

function Shared() {
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
    } = await getSample('folder');

    setName(name);
    setOwner({ ...owner });
    setCards((prevCards) => {
      return [...prevCards, ...links];
    });
  };

  useEffect(() => {
    loadFolderData();
  }, []);

  console.log(cards);

  return (
    <>
      <BinderInfo name={name} owner={owner} />
      <section style={section}>
        <SearchBar />
        <Binder cards={cards} shared="on" />
      </section>
    </>
  );
}

export default Shared;
