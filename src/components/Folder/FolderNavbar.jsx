// import { useRef, useState } from 'react';
import IMAGES from '../../assets/images';
import { DEFAULT_FOLDER } from '../../constants/constant';
import * as S from './styles.js';
// import useOnClickOutside from '../../hooks/useOnClickOutside';
// import ModalAddFolder from '../Modal/ModalAddFolder';
// import ModalEdit from '../Modal/ModalEdit';

const Folder = ({ data, onSelect, selected }) => {
  const { name, id } = data;

  return (
    <S.FolderBox onClick={() => onSelect(id)} selected={selected}>
      <S.FolderBoxText>{name}</S.FolderBoxText>
    </S.FolderBox>
  );
};

const FolderList = ({ data, handleFolderSelect, currentFolderId }) => {
  const handleFolderClick = (folderId) => handleFolderSelect(folderId);

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
  // const modalRef = useRef();
  // const [modalState1, setModalState1] = useState(false);
  // const [modalState2, setModalState2] = useState(false);
  // const [modalState3, setModalState3] = useState(false);
  // const [modalState4, setModalState4] = useState(false);
  // useOnClickOutside(modalRef, () => setCardModalState(false));

  if (folderData) {
    return (
      <>
        {/* {modalState1 && <ModalAddFolder />} */}
        {/* {modalState2 && <ModalShare />} */}
        {/* {modalState3 && <ModalEdit />} */}
        {/* {modalState4 && } */}
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
