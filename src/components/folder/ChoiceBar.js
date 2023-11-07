import { CHOICES } from 'constants/default';
import { useState } from 'react';
import { findFolderTitle } from 'utils/handleFolderData';
import { handleModalClose, handleModalOpen } from 'utils/handleModal';
import styled from 'styled-components';
import ModalPortal from 'components/common/Modal/ModalPortal';
import ModalFrame from 'components/common/Modal/ModalFrame';
import InputModal from 'components/common/Modal/InputModal';
import DeleteModal from 'components/common/Modal/DeleteModal';
import ShareModal from 'components/common/Modal/ShareModal';

/**
 * 폴더 관리 메뉴 선택 컴포넌트
 * [공유 / 이름 변경 / 삭제]
 */
function ChoiceBar({ folders, selectedFolderId }) {
  const [share, setShare] = useState(false);
  const [modify, setModify] = useState(false);
  const [del, setDel] = useState(false);
  const folderTitle = findFolderTitle(folders, selectedFolderId);

  function handleChoiceClick(event) {
    const target = event.target.closest('div').children[1];
    if (target.textContent === '공유') return handleModalOpen(setShare);
    if (target.textContent === '이름 변경') return handleModalOpen(setModify);
    if (target.textContent === '삭제') return handleModalOpen(setDel);
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
      {(share || modify || del) && (
        <ModalPortal>
          <ModalFrame>
            {share && <ShareModal data={folderTitle} folderId={selectedFolderId} onClickClose={() => handleModalClose(setShare)} />}
            {modify && <InputModal title="폴더 이름 변경" btn="변경하기" onClickClose={() => handleModalClose(setModify)} />}
            {del && <DeleteModal title="폴더 삭제" data={folderTitle} onClickClose={() => handleModalClose(setDel)} />}
          </ModalFrame>
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
