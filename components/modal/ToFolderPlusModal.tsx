import { useRef, useState, useCallback, useEffect, MouseEvent } from 'react';
import { getData } from '../../pages/api/api';
import * as M from '../../style/styled-component/Modal/ModalStyledComponent';
import { FoldersData } from '../folder/FolderMain';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  handleClick: () => void;
  cardLink: string;
}

export default function ToFolderPlusModal({ handleClick, cardLink }: Props) {
  const [folders, setFolders] = useState<FoldersData[]>([]);

  const handleLoad = useCallback(async () => {
    const { data } = await getData('users/1/folders');
    setFolders(data);
  }, []);

  const back = useRef<HTMLDivElement>(null);

  const backClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === back.current) handleClick();
  };

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <M.ModalBackground
      className="modal-background"
      ref={back}
      onClick={backClick as () => void}
    >
      <M.ModalWrapper>
        <M.ModalDeleteHeader>
          <M.ModalHeader>폴더에 추가</M.ModalHeader>
          <M.ModalLinkUrl>{cardLink}</M.ModalLinkUrl>
        </M.ModalDeleteHeader>
        <M.ModalFolder>
          {folders.map((item) => (
            <M.ModalFolderWrapper key={item.id}>
              <M.ModalDiv>
                <M.ModalFolderDiv>{item.name}</M.ModalFolderDiv>
                <M.ModalLinkCnt>{item.link.count}개 링크</M.ModalLinkCnt>
              </M.ModalDiv>
              <M.ModalLinkCheck>
                <CheckImgDiv>
                  <Image src="/check.svg" fill alt="체크표시" />
                </CheckImgDiv>
              </M.ModalLinkCheck>
            </M.ModalFolderWrapper>
          ))}
        </M.ModalFolder>
        <M.ModalMain>
          <M.ModalButton $color={'blue'}>추가하기</M.ModalButton>
        </M.ModalMain>
        <XCloseImgDiv>
          <Image src="/Xclose.svg" fill alt="닫기 버튼" onClick={handleClick} />
        </XCloseImgDiv>
      </M.ModalWrapper>
    </M.ModalBackground>
  );
}

const XCloseImgDiv = styled.div`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
`;

const CheckImgDiv = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
`;
