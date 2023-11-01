import IMAGES from '../../assets/images';
import { DEFAULT_FOLDER } from '../../constants/constant';
import * as S from './styles.js';

const Folder = ({ data, onSelect, selected }) => {
  const { name, id } = data;

  return (
    <S.FolderBox onClick={() => onSelect(id, name)} selected={selected}>
      <S.FolderBoxText>{name}</S.FolderBoxText>
    </S.FolderBox>
  );
};

const FolderList = ({ data, handleFolderSelect, currentFolderId }) => {
  const handleFolderClick = (folderId, folderName) => {
    return handleFolderSelect(folderId, folderName);
  };

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
          selected={currentFolderId === String(item.id)}
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

const FolderNavbar = ({ folderData, handleFolderSelect, currentFolderId }) => {
  if (folderData) {
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
  }
};

export default FolderNavbar;
