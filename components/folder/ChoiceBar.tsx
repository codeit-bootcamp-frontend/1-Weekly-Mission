import { CHOICES } from '@/constants/default';
import { useState } from 'react';
import { findFolderTitle } from '@/lib/utils/findFolderTitle';
import styled from 'styled-components';
import Modal from '../common/Modal/Modal';
import useModal from '@/hooks/useModal';
import { FolderType } from '@/constants/dataType';
import { MouseEvent } from 'react';
import Image from 'next/image';

interface Props {
  folders: FolderType[];
  selectedFolderId: number;
}

/**
 * 폴더 관리 메뉴 선택 컴포넌트
 * [공유 / 이름 변경 / 삭제]
 */
function ChoiceBar({ folders, selectedFolderId }: Props) {
  const [modal, setModal] = useState('');
  const { isOpen, handleModalOpen, handleModalClose } = useModal();
  const folderTitle = findFolderTitle(folders, selectedFolderId);

  function handleChoiceClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const el = target?.closest('div')?.children[1];
    setModal(el?.textContent || '');
    handleModalOpen();
  }

  return (
    <>
      <Box>
        {CHOICES.map((choice) => (
          <Wrapper key={choice.text} onClick={handleChoiceClick}>
            <Image src={choice.src} alt={choice.alt} />
            <Text>{choice.text}</Text>
          </Wrapper>
        ))}
      </Box>
      {isOpen && (
        <>
          {modal === '공유' && (
            <Modal type="share" title="폴더 공유" data={folderTitle} folderId={selectedFolderId} onClickClose={() => handleModalClose()} />
          )}
          {modal === '이름 변경' && <Modal type="input" title="폴더 이름 변경" button="변경하기" onClickClose={() => handleModalClose()} />}
          {modal === '삭제' && <Modal type="delete" title="폴더 삭제" data={folderTitle} button="삭제하기" onClickClose={() => handleModalClose()} />}
        </>
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
  align-items: center;

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
