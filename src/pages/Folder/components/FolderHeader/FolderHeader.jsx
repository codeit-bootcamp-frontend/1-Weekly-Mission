import * as S from './FolderHeader.style';
import useAsync from 'hooks/useAsync';
import { useState } from 'react';
import { getFolders } from 'utils/apiClient';
import SHARE from 'assets/icons/share.svg';
import EDIT from 'assets/icons/edit.svg';
import DELETE from 'assets/icons/delete.svg';

const DEFAULT_FOLDER = {
  id: 0,
  name: '전체',
};

function FolderButton({ data, selected, onClick }) {
  const onSelect = onClick ? () => onClick(data) : undefined;
  return (
    <S.FolderButton onClick={onSelect} selected={selected}>
      {data.name}
    </S.FolderButton>
  );
}

function FolderHeader() {
  const [foldersData, isLoading, loadingError, getFoldersAsync] =
    useAsync(getFolders);
  const [selectedFolder, setSelectedFolder] = useState(DEFAULT_FOLDER);

  const folders = foldersData?.data ?? [];

  const selectFolder = (folderData) => {
    setSelectedFolder(folderData);
  };

  return (
    <>
      {folders && (
        <S.FolderListContainer>
          <li key={DEFAULT_FOLDER.id}>
            <FolderButton
              data={DEFAULT_FOLDER}
              selected={DEFAULT_FOLDER.id === selectedFolder?.id}
              onClick={selectFolder}
            />
          </li>
          {folders.map((folder) => (
            <li key={folder.id}>
              <FolderButton
                data={folder}
                selected={folder?.id === selectedFolder?.id}
                onClick={selectFolder}
              />
            </li>
          ))}
        </S.FolderListContainer>
      )}
      <S.FolderInfo>
        <S.FolderTitle>{selectedFolder?.name}</S.FolderTitle>
        <S.SettingButtonContainer>
          <S.SettingButton>
            <img src={SHARE} alt='공유하기' />
            공유
          </S.SettingButton>
          <S.SettingButton>
            <img src={EDIT} alt='이름 변경하기' />
            이름 변경
          </S.SettingButton>
          <S.SettingButton>
            <img src={DELETE} alt='삭제하기' />
            삭제
          </S.SettingButton>
        </S.SettingButtonContainer>
      </S.FolderInfo>
    </>
  );
}

export default FolderHeader;
