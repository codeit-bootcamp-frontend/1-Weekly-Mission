import * as S from './FoldersContainer.style';
import { useEffect, useState } from 'react';
import useAsync from 'hooks/useAsync';
import { getFolders } from 'utils/apiClient';
import SHARE from 'assets/icons/share.svg';
import EDIT from 'assets/icons/edit.svg';
import DELETE from 'assets/icons/delete.svg';
import FoldersView from '../FoldersView';

const DEFAULT_FOLDER = {
  id: 0,
  name: '전체',
};

function FoldersContainer({ userId, initialFolderId, setFolderLinks }) {
  const [folders, , ,] = useAsync({
    asyncFunction: getFolders,
    initialArgs: userId,
  });

  const foldersData = folders?.data;
  const initialSelectedFolder = foldersData?.find(
    (folder) => folder.id === initialFolderId
  );

  const [selectedFolder, setSelectedFolder] = useState(DEFAULT_FOLDER);

  const onFolderButtonClick = (foldersData) => {
    setFolderLinks(foldersData.id);
    setSelectedFolder(foldersData);
  };

  useEffect(() => {
    if (initialSelectedFolder) {
      setSelectedFolder(initialSelectedFolder);
    } else {
      setSelectedFolder(DEFAULT_FOLDER);
    }
  }, [initialSelectedFolder]);

  return (
    <>
      {folders?.data?.length !== 0 && (
        <>
          <FoldersView
            folders={foldersData}
            defaultFolder={DEFAULT_FOLDER}
            selectedFolder={selectedFolder}
            onFolderButtonClick={onFolderButtonClick}
          />
          <S.InfoContainer>
            <S.FolderTitle>{selectedFolder?.name}</S.FolderTitle>
            <S.SettingButtonContainer>
              {selectedFolder?.id !== DEFAULT_FOLDER.id && (
                <>
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
                </>
              )}
            </S.SettingButtonContainer>
          </S.InfoContainer>
        </>
      )}
    </>
  );
}

export default FoldersContainer;
