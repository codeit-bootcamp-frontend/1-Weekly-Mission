import './css/reset.css';
import './css/App.css';
import { useCallback, useEffect, useState } from 'react';
import { getCards } from './api/user';
import useAsync from './hooks/useAsync';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import FolderProfile from './components/Folder/FolderProfile';
import FolderMain from './components/Folder/FolderMain';


function App() {
  const [folderProfile, setFolderProfile] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoadingCards, cardsLoadingError, getCardsAsync] = useAsync(getCards);

  const handleLoad = useCallback(
    async () => {
      const result = await getCardsAsync();
      if (!result) {
        return;
      }

      const { name, owner, links: cards } = { ...result.folder };

      setFolderProfile({
        avatarUrl: owner?.profileImageSource ?? '',
        ownerName: owner?.name ?? '',
        folderName: name,
      });
      setCards(cards);
    }, [getCardsAsync],
  );

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div className='App'>
      <Nav />
      <FolderProfile folderProfile={folderProfile}/>
      <FolderMain cards={cards} cardsLoadingError={cardsLoadingError}/>
      <Footer />
    </div>
  );
}

export default App;
