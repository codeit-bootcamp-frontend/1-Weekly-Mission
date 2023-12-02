import React, { useState } from "react";
import closeIconImage from "@/images/modalClose.png";
import * as S from "@/components/modal/InputModal.style";
import { ModalProps } from "@/types/type";
import Image from "next/image";

const InputModal = ({ modalTitle, modalTarget, buttonText = "변경하기", onClose }: ModalProps) => {
  const [value, setValue] = useState(modalTarget);

  return (
    <S.ModalWrap>
      <S.Modal>
        <S.ModalTitle>{modalTitle}</S.ModalTitle>
        <S.CloseButton onClick={onClose}>
          <Image src={closeIconImage} alt="모달 닫기" />
        </S.CloseButton>
        <S.Input value={value} onChange={(e) => setValue(e.target.value)} />
        <S.Button>{buttonText}</S.Button>
      </S.Modal>
    </S.ModalWrap>
  );
};

export default InputModal;
