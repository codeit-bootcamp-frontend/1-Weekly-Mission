import * as Modal from '../Modal.style';
import * as S from './AddToFolder.style';
import Layout from '../Layout';
import useRequest from 'hooks/useRequest';
import { useState } from 'react';
import CHECK from 'assets/icons/check.svg';

function AddToFolder({ closeModal, url, userId }) {
  const { data: folders } = useRequest({
    url: `/users/${userId}/folders`,
    method: 'get',
  });

  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const selectFolder = (folderId) => {
    setSelectedFolderId(folderId);
  };

  return (
    <Layout closeModal={closeModal}>
      <Modal.Header>
        <Modal.Title>폴더에 추가</Modal.Title>
        <Modal.Description>{url}</Modal.Description>
      </Modal.Header>
      <S.FoldersContainer>
        {folders?.data?.map((folder) => (
          <li key={folder?.id}>
            <S.Folder
              type='button'
              selected={folder?.id === selectedFolderId}
              onClick={() => selectFolder(folder?.id)}
            >
              <S.FolderTitle>{folder?.name}</S.FolderTitle>
              <S.FolderDescription>
                {folder?.link?.count}개 링크
              </S.FolderDescription>
              {folder?.id === selectedFolderId && (
                <S.Check src={CHECK} alt='선택된 폴더 표시' />
              )}
            </S.Folder>
          </li>
        ))}
      </S.FoldersContainer>
      <Modal.BigButton>추가하기</Modal.BigButton>
    </Layout>
  );
}

export default AddToFolder;
