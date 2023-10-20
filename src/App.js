import './css/reset.css';
import './css/App.css';
import CardList from './components/CardList';
import { useCallback, useEffect, useState } from 'react';
import { getCards } from './api/api';

function App() {
  const [cards, setCards] = useState([]);

  const handleLoad = useCallback(
      async () => {
        const result = await getCards();
        if (!result) {
          return;
        }

        const { links } = result.folder;
        setCards(links);
      }, []
  );

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <div className='App'>
      <CardList items={cards} />
    </div>
  );
}

export default App;
