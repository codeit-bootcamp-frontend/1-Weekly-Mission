import styled from 'styled-components';
import { ModalBody } from '../../styles/ModalStyle';
import FolderEditModal from './FolderEditModal';
import FolderAddModal from './FolderAddModal';


function FolderModal({ action, onCloseModal }) {

  const decideFolderModal = (action) => {
    switch (action) {
      case 'edit':
        return (
          <>
            <FolderEditModal onCloseModal={onCloseModal} />
          </>
        );
      case 'add':
        return (
          <>
            <FolderAddModal onCloseModal={onCloseModal} />
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <BackDrop />
      <ModalBody>
        {decideFolderModal(action)}
      </ModalBody>
    </>
  );
}

export default FolderModal;


const BackDrop = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.40);
`;
