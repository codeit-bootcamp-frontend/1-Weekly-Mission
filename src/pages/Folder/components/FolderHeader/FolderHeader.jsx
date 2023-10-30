import * as S from './FolderHeader.style';
import { useState } from 'react';
import SHARE from 'assets/icons/share.svg';
import EDIT from 'assets/icons/edit.svg';
import DELETE from 'assets/icons/delete.svg';
import ADD_COLOR from 'assets/icons/add-color.svg';
import ADD_WHITE from 'assets/icons/add-white.svg';

const DEFAULT_FOLDER = {
  id: 0,
  name: '전체',
};

function FolderHeader({ folders, setFolderLinks }) {
  const [selectedFolder, setSelectedFolder] = useState(DEFAULT_FOLDER);

  const onFolderButtonClick = (folderData) => {
    setFolderLinks(folderData.id);
    setSelectedFolder(folderData);
  };

  return (
    <>
      {folders && (
        <S.FolderListContainer>
          <S.FolderList>
            <li key={DEFAULT_FOLDER.id}>
              <FolderButton
                data={DEFAULT_FOLDER}
                selected={DEFAULT_FOLDER.id === selectedFolder?.id}
                onClick={onFolderButtonClick}
              />
            </li>
            {folders.map((folder) => (
              <li key={folder.id}>
                <FolderButton
                  data={folder}
                  selected={folder?.id === selectedFolder?.id}
                  onClick={onFolderButtonClick}
                />
              </li>
            ))}
          </S.FolderList>
          <S.AddFolderButton type='button'>
            폴더 추가
            <S.AddColor src={ADD_COLOR} alt='추가하기' />
            <S.AddWhite src={ADD_WHITE} alt='추가하기' />
          </S.AddFolderButton>
        </S.FolderListContainer>
      )}
      <S.FolderInfo>
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
      </S.FolderInfo>
    </>
  );
}

export default FolderHeader;

function FolderButton({ data, selected, onClick }) {
  const onSelect = () => {
    onClick?.(data);
  };

  return (
    <S.FolderButton type='button' onClick={onSelect} selected={selected}>
      {data.name}
    </S.FolderButton>
  );
}
