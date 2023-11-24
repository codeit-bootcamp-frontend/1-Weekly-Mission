import { useRef } from 'react';
import xClose from './img/Xclose.svg';
import * as M from './styled-component/ModalStyledCompoenet';

export default function FolderPlusModal({ handleClick, title, value }) {
  const back = useRef();

  const backClick = (e) => {
    if (e.target === back.current) handleClick();
  };
  return (
    <M.ModalBackground ref={back} onClick={backClick}>
      <M.ModlaWrapper>
        <M.ModalHeader>{value}</M.ModalHeader>
        <M.ModalMain>
          <M.ModalInput
            placeholder={value !== '이름 변경' ? '내용 입력' : title}
          />
          <M.ModalButton $color={'blue'}>변경하기</M.ModalButton>
        </M.ModalMain>
        <M.CloseImg src={xClose} alt="닫기 버튼" onClick={handleClick} />
      </M.ModlaWrapper>
    </M.ModalBackground>
  );
}
