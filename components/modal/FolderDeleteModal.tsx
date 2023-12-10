import { MouseEvent, useRef } from 'react';
import * as M from '../../style/styled-component/Modal/ModalStyledComponent';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  handleClick: () => void;
  value: string;
  title: string;
  cardLink: string;
}

export default function FolderDeleteModal({
  handleClick,
  value = '링크 삭제',
  title,
  cardLink,
}: Props) {
  const back = useRef<HTMLDivElement>(null);

  if (value === '폴더 추가' || title === '전체') {
    title = '내용 입력';
  }

  const backClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === back.current) handleClick();
  };

  return (
    <M.ModalBackground ref={back} onClick={backClick}>
      <M.ModalWrapper>
        <M.ModalDeleteHeader>
          <M.ModalHeader>{value}</M.ModalHeader>
          <M.ModalLinkUrl>
            {value === '링크 삭제' ? cardLink : title}
          </M.ModalLinkUrl>
        </M.ModalDeleteHeader>
        <M.ModalMain>
          <M.ModalButton $color={'red'}>삭제하기</M.ModalButton>
        </M.ModalMain>
        <CloseImg
          src="/Xclose.svg"
          width={16}
          height={16}
          alt="닫기 버튼"
          onClick={handleClick}
        />
      </M.ModalWrapper>
    </M.ModalBackground>
  );
}

const CloseImg = styled(Image)`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
`;
