import Main from '../Main/Main';
import SearchForm from '../Search/SearchForm';
import FolderCategory from './FolderCategory';
import FolderCategoryControl from './FolderCategoryControl';
import { useCallback, useEffect, useState } from 'react';
import useAsync from '../../hooks/useAsync';
import { getLinks } from '../../api/api';
import CardList from '../Card/CardList';

const INIT_PAGE = { id: 0, name: '전체'};

function FolderMain() {
  const [name, setName] = useState('');
  const [cards, setCards] = useState([]);
  const [, linksLoadingError, getLinksAsync] = useAsync(getLinks);

  const handleLoadLinks = useCallback(
    async (category) => {
      const id = category.id === 0 ? '' : category.id;
      const name = category.name;

      const result = await getLinksAsync({ id });
      if (!result) {
        return;
      }

      const { data } = { ...result };

      setName(name);
      setCards(data);
    }, [getLinksAsync],
  );

  useEffect(() => {
    handleLoadLinks(INIT_PAGE);
  }, [handleLoadLinks]);

  return (
    <Main>
      <SearchForm />
      <FolderCategory onGetCategory={handleLoadLinks} />
      <FolderCategoryControl name={name} />
      <CardList items={cards} />
    </Main>
  );
}

export default FolderMain;

