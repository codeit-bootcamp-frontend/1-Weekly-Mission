import Main from '../Main/Main';
import SearchForm from '../Search/SearchForm';
import FolderCategory from './FolderCategory';
import FolderCategoryControl from './FolderCategoryControl';
import FolderCardList from './FolderCardList';
import { useCallback, useState } from 'react';
import useAsync from '../../hooks/useAsync';
import { getLinks } from '../../api/api';

function FolderMain() {
  const [name, setName] = useState('전체');
  const [cards, setCards] = useState([]);
  const [, linksLoadingError, getLinksAsync] = useAsync(getLinks);

  const handleLoadLinksId = useCallback(
    async (category) => {
      const id = category ? category.id : '';
      const name = category ? category.name : '전체';

      const result = await getLinksAsync({ id });
      if (!result) {
        return;
      }

      const { data } = { ...result };

      setName(name);
      setCards(data);
    }, [getLinksAsync],
  );

  return (
    <Main>
      <SearchForm />
      <FolderCategory onGetCategory={handleLoadLinksId} />
      <FolderCategoryControl name={name} />
      <FolderCardList />
    </Main>
  );
}

export default FolderMain;

