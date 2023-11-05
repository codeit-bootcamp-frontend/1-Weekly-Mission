import styled from 'styled-components';
import { ModalBody } from '../../styles/ModalStyle';
import FolderEditModal from './FolderEditModal';
import FolderAddModal from './FolderAddModal';
import FolderDeleteModal from './FolderDeleteModal';
import FolderShareModal from './FolderShareModal';


function FolderModal({ action, onCloseModal, name }) {

  const decideFolderModal = (action) => {
    switch (action) {
      case 'share':
        return (
          <>
            <FolderShareModal onCloseModal={onCloseModal} name={name} />
          </>
        )
      case 'edit':
        return (
          <>
            <FolderEditModal onCloseModal={onCloseModal} />
          </>
        );
      case 'delete':
        return (
          <>
            <FolderDeleteModal onCloseModal={onCloseModal} name={name} />
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
      <ModalBody $action={action}>
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
