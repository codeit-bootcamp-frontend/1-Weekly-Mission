import { useEffect, useState } from 'react';
import BinderInfo from '../components/BinderInfo/BinderInfo';
import SearchBar from '../components/SearchBar/SearchBar';
import Binder from '../components/Binder/Binder';
import getSampleFolder from '../apis/sample/folder';
import styles from './Shared.module.css';

function Shared() {
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
      <BinderInfo name={name} owner={owner} />
      <section className={styles.root}>
        <SearchBar />
        <Binder cards={cards} shared="on" />
      </section>
    </>
  );
}

export default Shared;
