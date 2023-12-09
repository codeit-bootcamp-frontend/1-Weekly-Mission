import Modal from '@components/Modal';
import ModalShare from '@components/Modal/ModalShare';
import ModalEdit from '@components/Modal/ModalEdit';
import ModalDelete from '@components/Modal/ModalDelete';
import { useState } from 'react';
import * as S from './CurrentFolderInfo.style';

interface Props {
  selectedName: string;
  selectedId: string | undefined;
}

const CurrentFolderInfo = ({ selectedName, selectedId }: Props) => {
  const [modalShareIsOpen, setModalShareIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);

  return (
    <S.Container>
      <span>{selectedName}</span>
      <S.OptionContainer selected={!selectedId}>
        <button onClick={() => setModalShareIsOpen(true)}>
          <img src='/assets/images/share.svg' alt='공유 아이콘' />
          <span>공유</span>
        </button>
        {modalShareIsOpen && (
          <Modal close={() => setModalShareIsOpen(false)}>
            <ModalShare folderName={selectedName} folderId={selectedId} />
          </Modal>
        )}
        <button onClick={() => setModalEditIsOpen(true)}>
          <img src='/assets/images/name-change.svg' alt='이름 변경 아이콘' />
          <span>이름 변경</span>
        </button>
        {modalEditIsOpen && (
          <Modal close={() => setModalEditIsOpen(false)}>
            <ModalEdit folderName={selectedName} />
          </Modal>
        )}
        <button onClick={() => setModalDeleteIsOpen(true)}>
          <img src='/assets/images/delete.svg' alt='삭제 아이콘' />
          <span>삭제</span>
        </button>
        {modalDeleteIsOpen && (
          <Modal close={() => setModalDeleteIsOpen(false)}>
            <ModalDelete folderName={selectedName} />
          </Modal>
        )}
      </S.OptionContainer>
    </S.Container>
  );
};

export default CurrentFolderInfo;
