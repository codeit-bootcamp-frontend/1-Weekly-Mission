import { MouseEvent, useRef } from 'react';
import * as M from '../../style/styled-component/Modal/ModalStyledComponent';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  handleClick: () => void;
  title: string;
  value: string;
}

export default function FolderPlusModal({ handleClick, title, value }: Props) {
  const back = useRef<HTMLDivElement>(null);

  const backClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === back.current) handleClick();
  };
  console.log(value);
  return (
    <M.ModalBackground ref={back} onClick={backClick}>
      <M.ModalWrapper>
        <M.ModalHeader>{value}</M.ModalHeader>
        <M.ModalMain>
          <M.ModalInput
            placeholder={value !== '이름 변경' ? '내용 입력' : title}
          />
          <M.ModalButton $color={'blue'}>
            {value == '이름 변경' ? '변경하기' : '추가하기'}
          </M.ModalButton>
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
