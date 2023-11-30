import { MouseEvent, useRef } from 'react';
import xClose from '../../asset/Xclose.svg';
import * as M from '../styled-component/ModalStyledCompoenet';

interface Props {
  handleClick: () => void;
}

export default function FolderNamingModal({ handleClick }: Props) {
  const back = useRef<HTMLDivElement>(null);

  const handleCloseClick = () => {
    handleClick();
  };
  const backClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === back.current) handleClick();
  };
  return (
    <M.ModalBackground ref={back} onClick={backClick}>
      <M.ModlaWrapper>
        <M.ModalHeader>폴더 이름 변경</M.ModalHeader>
        <M.ModalMain>
          <M.ModalInput placeholder="내용 입력" />
          <M.ModalButton $color={'red'}>변경하기</M.ModalButton>
        </M.ModalMain>
        <M.CloseImg src={xClose} alt="닫기 버튼" onClick={handleCloseClick} />
      </M.ModlaWrapper>
    </M.ModalBackground>
  );
}
