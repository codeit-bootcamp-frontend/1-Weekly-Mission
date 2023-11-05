import React, { useEffect } from "react";
import * as S from "./ModalLayout.style";
import { ModalPortal } from "../../utils/ModalPortal";

const ModalLayout = ({ modal, closeModal }) => {
  const onBackdropClick = (event) => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const onModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <ModalPortal>
      <S.ModalBackGround onClick={onBackdropClick}>
        <div onClick={onModalClick}> {React.cloneElement(modal, { onClose: closeModal })}</div>
      </S.ModalBackGround>
    </ModalPortal>
  );
};

export default ModalLayout;
