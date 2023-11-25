import { createPortal } from 'react-dom';
import * as S from './Modal.style';
import closeButton from 'images/_close.png';
import { MouseEvent, ReactNode, useEffect } from 'react';

interface Props {
  close: (e: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

export default function Modal({ close, children }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return createPortal(
    <div>
      <S.Overlay />
      <S.Wrapper onClick={close}>
        <S.Container onClick={(e) => e.stopPropagation()}>
          <S.CloseButton onClick={close}>
            <img src={closeButton} alt='모달 닫기 버튼' />
          </S.CloseButton>
          <S.Content>{children}</S.Content>
        </S.Container>
      </S.Wrapper>
    </div>,
    document.querySelector('#modal') as HTMLElement
  );
}
