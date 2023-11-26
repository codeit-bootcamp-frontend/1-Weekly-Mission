import { useRef, useState, useCallback, useEffect, MouseEvent } from 'react';
import xClose from '../img/Xclose.svg';
import { getData } from '../../api';
import check from '../img/check.svg';
import * as M from '../styled-component/ModalStyledCompoenet';
import { foldersProps } from '../folder/FolderMain';

interface Props {
  handleClick: () => void;
  cardLink: string;
}

export default function ToFolderPlusModal({ handleClick, cardLink }: Props) {
  const [folders, setFolders] = useState<foldersProps[]>([]);

  const handleLoad = useCallback(async () => {
    const { data } = await getData('users/1/folders');
    setFolders(data);
  }, []);

  const back = useRef();

  const backClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    if (target === back.current) handleClick();
  };

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  // <M.ModalFolderDiv name={`${item.id}`}> name속성 지움
  return (
    <M.ModalBackground
      className="modal-background"
      ref={`${back}`}
      onClick={backClick as () => void}
    >
      <M.ModlaWrapper>
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
                <img src={check} alt="체크표시" />
              </M.ModalLinkCheck>
            </M.ModalFolderWrapper>
          ))}
        </M.ModalFolder>
        <M.ModalMain>
          <M.ModalButton $color={'blue'}>추가하기</M.ModalButton>
        </M.ModalMain>
        <M.CloseImg src={xClose} alt="닫기 버튼" onClick={handleClick} />
      </M.ModlaWrapper>
    </M.ModalBackground>
  );
}
