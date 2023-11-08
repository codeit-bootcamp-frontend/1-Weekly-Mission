import Modal from "components/Modal";
import ModalShare from "components/Modal/ModalShare";
import ModalEdit from "components/Modal/ModalEdit";
import ModalDelete from "components/Modal/ModalDelete";
import deleteIcon from "images/delete.svg";
import nameChangeIcon from "images/name-change.svg";
import shareIcon from "images/share.svg";
import { useState } from "react";
import * as S from "./CurrentFolderInfo.style";

function CurrentFolderInfo({ selectedName, selectedId }) {
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIsOpen3, setModalIsOpen3] = useState(false);

  return (
    <S.Container>
      <span>{selectedName}</span>
      <S.OptionContainer selected={!selectedId}>
        <button onClick={() => setModalIsOpen1(true)}>
          <img src={shareIcon} alt="공유 아이콘" />
          <span>공유</span>
        </button>
        {modalIsOpen1 && (
          <Modal close={() => setModalIsOpen1(false)}>
            <ModalShare folderName={selectedName} folderId={selectedId} />
          </Modal>
        )}
        <button onClick={() => setModalIsOpen2(true)}>
          <img src={nameChangeIcon} alt="이름 변경 아이콘" />
          <span>이름 변경</span>
        </button>
        {modalIsOpen2 && (
          <Modal close={() => setModalIsOpen2(false)}>
            <ModalEdit folderName={selectedName} />
          </Modal>
        )}
        <button onClick={() => setModalIsOpen3(true)}>
          <img src={deleteIcon} alt="삭제 아이콘" />
          <span>삭제</span>
        </button>
        {modalIsOpen3 && (
          <Modal close={() => setModalIsOpen3(false)}>
            <ModalDelete folderName={selectedName} />
          </Modal>
        )}
      </S.OptionContainer>
    </S.Container>
  );
}

export default CurrentFolderInfo;
