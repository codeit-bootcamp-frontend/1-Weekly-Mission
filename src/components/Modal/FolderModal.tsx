import styled from 'styled-components';
import { ModalBody } from '../../styles/ModalStyle';
import FolderEditModal from './Folder/FolderEditModal';
import FolderAddModal from './Folder/FolderAddModal';
import FolderDeleteModal from './Folder/FolderDeleteModal';
import FolderShareModal from './FolderShareModal';
import { ForwardedRef, forwardRef } from 'react';
import LinkDeleteModal from './LinkDeleteModal';
import FolderToAddModal from './FolderToAddModal';

interface Props {
  action: string;
  onCloseModal: () => void;
  name: string;
}

function FolderModal({ action, onCloseModal, name }: Props, ref: ForwardedRef<HTMLDivElement>) {

  const decideFolderModal = (action: string) => {
    switch (action) {
      case 'share':
        return (
          <>
            <FolderShareModal onCloseModal={onCloseModal} name={name} />
          </>
        );
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
      case 'delete-link':
        return (
          <>
            <LinkDeleteModal onCloseModal={onCloseModal} link=''/>
          </>
        );
      case 'folder-add':
        return (
          <>
            <FolderToAddModal onCloseModal={onCloseModal} />
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <BackDrop ref={ref} />
      <ModalBody $action={action}>
        {decideFolderModal(action)}
      </ModalBody>
    </>
  );
}

export default forwardRef(FolderModal);


const BackDrop = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.40);
`;
