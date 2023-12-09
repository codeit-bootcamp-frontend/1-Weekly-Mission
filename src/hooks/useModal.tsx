import { useState } from 'react';
import Layout from '@/components/modals/Layout';
import NewFolder from '@/components/modals/NewFolder';
import AddToFolder from '@/components/modals/AddToFolder';
import DeleteFolder from '@/components/modals/DeleteFolder';
import DeleteLink from '@/components/modals/DeleteLink';
import Edit from '@/components/modals/Edit';
import Share from '@/components/modals/Share';

export type ModalsKey =
  | 'addToFolder'
  | 'deleteFolder'
  | 'deleteLink'
  | 'edit'
  | 'newFolder'
  | 'share'
  | undefined;

interface Props {
  url?: string;
  userId?: number;
  folderName?: string;
  folderId?: number;
}

function useModal({
  url = '',
  userId = 1,
  folderName = '',
  folderId = 1,
}: Props): [JSX.Element, (modalKey?: ModalsKey) => void] {
  const [modal, setModal] = useState<JSX.Element>(<></>);

  const modals = {
    addToFolder: <AddToFolder url={url} userId={userId} />,
    deleteFolder: <DeleteFolder folderName={folderName} />,
    deleteLink: <DeleteLink url={url} />,
    edit: <Edit />,
    newFolder: <NewFolder />,
    share: (
      <Share folderName={folderName} folderId={folderId} userId={userId} />
    ),
  };

  const closeModal = () => {
    toggleModal();
  };

  const toggleModal = (modalKey?: keyof typeof modals) => {
    if (!modalKey || !(modalKey in modals)) {
      setModal(<></>);
      return;
    }

    const nextModal = createModal(modals?.[modalKey], closeModal);
    setModal(nextModal);
  };

  return [modal, toggleModal];
}

function createModal(Modal: JSX.Element, closeModal: () => void) {
  return <Layout closeModal={closeModal}>{Modal}</Layout>;
}

export default useModal;
