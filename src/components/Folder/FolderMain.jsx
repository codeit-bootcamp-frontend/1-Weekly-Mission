import Main from '../Main/Main';
import SearchForm from '../Search/SearchForm';
import FolderCategory from './FolderCategory';
import FolderCategoryControl from './FolderCategoryControl';
import { useCallback, useEffect, useState } from 'react';
import useAsync from '../../hooks/useAsync';
import { getLinks } from '../../api/api';
import CardList from '../Card/CardList';
import EmptyCardList from '../Card/EmptyCardList';
import FloatingActionButton from '../../styles/FloatingActionButton';
import styled from 'styled-components';

const INIT_PAGE = { id: 0, name: '전체' };

function FolderMain() {
  const [name, setName] = useState('전체');
  const [cards, setCards] = useState([]);
  const [, , getLinksAsync] = useAsync(getLinks);

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
    <FolderMainStyle>
      <SearchForm />
      <FolderCategory onGetCategory={handleLoadLinks} />
      <FolderCategoryControl name={name} />
      {cards.length !== 0 ? <CardList items={cards} /> : <EmptyCardList />}
      <FloatingActionButton />
    </FolderMainStyle>
  );
}

export default FolderMain;

const FolderMainStyle = styled(Main)`
  @media (min-width: 768px) {
    gap: 2.4rem;
  }
`
