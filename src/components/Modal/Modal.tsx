import { createPortal } from 'react-dom';
import * as S from './Modal.style';
import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';

interface Props {
  close: (e: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

export default function Modal({ close, children }: Props) {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const modalDiv = document.createElement('div');
    modalDiv.id = 'modal';
    setModalRoot(modalDiv);
    document.body.appendChild(modalDiv);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.removeChild(modalDiv);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!modalRoot) return null;

  return createPortal(
    <div>
      <S.Overlay />
      <S.Wrapper onClick={close}>
        <S.Container onClick={(e) => e.stopPropagation()}>
          <S.CloseButton onClick={close}>
            <Image
              src='/assets/images/_close.png'
              alt='모달 닫기 버튼'
              width={24}
              height={24}
            />
          </S.CloseButton>
          <S.Content>{children}</S.Content>
        </S.Container>
      </S.Wrapper>
    </div>,
    modalRoot
  );
}
