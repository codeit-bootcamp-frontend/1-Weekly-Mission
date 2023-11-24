import { CHOICES } from 'constants/default';
import { useState } from 'react';
import { findFolderTitle } from 'utils/findFolderTitle';
import styled from 'styled-components';
import ModalPortal from 'components/common/Modal/ModalPortal';
import ModalFrame from 'components/common/Modal/ModalFrame';
import InputModal from 'components/common/Modal/InputModal';
import DeleteModal from 'components/common/Modal/DeleteModal';
import ShareModal from 'components/common/Modal/ShareModal';
import useModal from 'hooks/useModal';

/**
 * 폴더 관리 메뉴 선택 컴포넌트
 * [공유 / 이름 변경 / 삭제]
 */
function ChoiceBar({ folders, selectedFolderId }) {
  const [modal, setModal] = useState('');
  const { isOpen, handleModalOpen, handleModalClose } = useModal();
  const folderTitle = findFolderTitle(folders, selectedFolderId);

  function handleChoiceClick(event) {
    const target = event.target.closest('div').children[1];
    setModal(target.textContent);
    handleModalOpen();
  }

  return (
    <>
      <Box>
        {CHOICES.map((choice) => (
          <Wrapper key={choice.text} onClick={handleChoiceClick}>
            <img src={choice.src} alt={choice.alt} />
            <Text>{choice.text}</Text>
          </Wrapper>
        ))}
      </Box>
      {isOpen && (
        <ModalPortal>
          {modal === '공유' && <ShareModal data={folderTitle} folderId={selectedFolderId} onClickClose={() => handleModalClose()} />}
          {modal === '이름 변경' && <InputModal title="폴더 이름 변경" btn="변경하기" onClickClose={() => handleModalClose()} />}
          {modal === '삭제' && <DeleteModal title="폴더 삭제" data={folderTitle} onClickClose={() => handleModalClose()} />}
        </ModalPortal>
      )}
    </>
  );
}

export default ChoiceBar;

const Box = styled.div`
  display: flex;
  gap: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.p`
  color: var(--gray-60);
  font-size: 1.4rem;
  font-weight: 600;
`;
