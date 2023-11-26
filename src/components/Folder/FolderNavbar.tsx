import React from 'react';

import IMAGES from '../../assets/images';
import { DEFAULT_FOLDER } from '../../constants/constant';
import * as S from './styles';

interface FolderItem {
  name: string;
  id: number;
}

interface FolderProps {
  data: FolderItem;
  onSelect: (value: number) => void;
  selected: boolean;
}

interface FolderListProps {
  data: FolderItem[];
  handleFolderSelect: (value: string) => void;
  currentFolderId: number;
}

interface FolderNavbarProps {
  folderData: FolderItem[];
  handleFolderSelect: (value: string) => void;
  currentFolderId: number;
}

const Folder = ({ data, onSelect, selected }: FolderProps) => {
  const { name, id } = data;

  return (
    <S.FolderBox onClick={() => onSelect(id)} selected={selected}>
      <S.FolderBoxText>{name}</S.FolderBoxText>
    </S.FolderBox>
  );
};

const FolderList = ({
  data,
  handleFolderSelect,
  currentFolderId,
}: FolderListProps) => {
  const handleFolderClick = (folderId: number) =>
    handleFolderSelect(String(folderId));

  return (
    <>
      <Folder
        data={DEFAULT_FOLDER}
        onSelect={handleFolderClick}
        selected={currentFolderId === null}
      />
      {data.map((item) => (
        <Folder
          key={item.id}
          data={item}
          onSelect={handleFolderClick}
          selected={String(currentFolderId) === String(item.id)}
        />
      ))}
    </>
  );
};

const FolderAddBtn = () => {
  return (
    <S.FolderAddBox>
      <S.FolderAddText>폴더 추가</S.FolderAddText>
      <S.FolderAddImage src={IMAGES.folderAdd} />
      <S.FolderAddWhiteImage src={IMAGES.folderAddWhite} />
    </S.FolderAddBox>
  );
};

const FolderNavbar = ({
  folderData,
  handleFolderSelect,
  currentFolderId,
}: FolderNavbarProps) => {
  if (!!!folderData) return null;

  return (
    <>
      <S.FolderListBox>
        <S.FolderListInnerBox>
          <FolderList
            data={folderData}
            handleFolderSelect={handleFolderSelect}
            currentFolderId={currentFolderId}
          />
        </S.FolderListInnerBox>
      </S.FolderListBox>
      <FolderAddBtn />
    </>
  );
};

export default FolderNavbar;
