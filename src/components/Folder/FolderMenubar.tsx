import React from 'react';

import { FOLDER_OPTION_NAMES } from '../../constants/constant';
import * as S from './styles';

interface FolderOptionsItemProps {
  item: {
    name: string;
    optionImg: string;
  };
}

interface FolderMenuBarProps {
  selectedFolderName: string;
}

const FolderOptionsItem = ({ item }: FolderOptionsItemProps) => {
  const { name, optionImg } = item;

  return (
    <S.FolderOptionItemBox>
      <img src={optionImg} alt="option" />
      <p>{name}</p>
    </S.FolderOptionItemBox>
  );
};

// "공유", "이름 변경", "삭제"
const FolderOptions = () => {
  return (
    <S.FolderOptionsBox>
      {FOLDER_OPTION_NAMES.map((item) => (
        <FolderOptionsItem key={item.id} item={item} />
      ))}
    </S.FolderOptionsBox>
  );
};

const FolderMenubar = ({ selectedFolderName }: FolderMenuBarProps) => {
  return (
    <>
      <S.FolderNameHeader>{selectedFolderName}</S.FolderNameHeader>
      {selectedFolderName !== '전체' ? <FolderOptions /> : null}
    </>
  );
};

export default FolderMenubar;
