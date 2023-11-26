import Main from '../Main/Main';
import SearchForm from '../Search/SearchForm';
import FolderCategory from './FolderCategory';
import FolderCategoryControl from './FolderCategoryControl';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getLinks } from '../../api/api';
import CardList from '../Card/CardList';
import EmptyCardList from '../Card/EmptyCardList';
import FloatingActionButton from '../../styles/FloatingActionButton';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import FolderModal from '../Modal/Folder/FolderModal';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const INIT_PAGE = { id: 0, name: '전체' };

function FolderMain() {
  const modalRef = useRef();
  const [name, setName] = useState('전체');
  const [cards, setCards] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLoadLinks = useCallback(async (category) => {
      const id = category.id === 0 ? '' : String(category.id);
      const name = category.name;

      const result = await getLinks(id);
      if (!result) {
        return;
      }

      const { data } = { ...result };

      setName(name);
      setCards(data);
    }, [name],
  );

  const openModal = ({ isOpen }) => {
    setIsOpen(isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useOnClickOutside(modalRef, closeModal);

  useEffect(() => {
    handleLoadLinks(INIT_PAGE);
  }, [handleLoadLinks]);

  return (
    <FolderMainStyle>
      <SearchForm />
      <FolderCategory onGetCategory={handleLoadLinks} />
      <FolderCategoryControl name={name} />
      {cards.length !== 0 ? <CardList items={cards} /> : <EmptyCardList />}
      <FloatingActionButton onOpen={openModal} />
      {isOpen && (
        <Modal>
          <FolderModal action='add' onCloseModal={closeModal} ref={modalRef} />
        </Modal>
      )}
    </FolderMainStyle>
  );
}

export default FolderMain;

const FolderMainStyle = styled(Main)`
  @media (min-width: 768px) {
    gap: 2.4rem;
  }
`;
