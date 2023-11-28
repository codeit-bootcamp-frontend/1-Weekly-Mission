import * as Modal from '../Modal.style';
import * as S from './AddToFolder.style';
import { useState } from 'react';
import useRequest from '@hooks/useRequest';
import CHECK from '@assets/icons/check.svg';
import { Folder } from '@pages/Folder/components/FoldersContainer/FoldersContainer.types';

interface Props {
  url: string;
  userId: number;
}

function AddToFolder({ url, userId }: Props) {
  const { data: folders } = useRequest<{ data: Folder[] }>({
    options: {
      url: `/users/${userId}/folders`,
      method: 'get',
    },
  });

  const [selectedFolderId, setSelectedFolderId] = useState<number>();

  const selectFolder = (folderId: number) => {
    setSelectedFolderId(folderId);
  };

  return (
    <>
      <Modal.Header>
        <Modal.Title>폴더에 추가</Modal.Title>
        <Modal.Description>{url}</Modal.Description>
      </Modal.Header>
      <S.FoldersContainer>
        {folders?.data?.map((folder: Folder) => (
          <li key={folder?.id}>
            <S.Folder
              type='button'
              $selected={folder?.id === selectedFolderId}
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
    </>
  );
}

export default AddToFolder;
