import React, { MouseEvent, useEffect } from "react";
import * as S from "@/layouts/modalLayout/ModalLayout.style";
import { ModalPortal } from "@/utils/ModalPortal";
import { ModalLayoutProps } from "@/types/type";

const ModalLayout = ({ children, onClose }: ModalLayoutProps) => {
  const onBackdropClick = (event: MouseEvent) => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      onClose();
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

  const onModalClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <ModalPortal>
      <S.ModalBackGround onClick={onBackdropClick}>
        <div onClick={onModalClick}>{children}</div>
      </S.ModalBackGround>
    </ModalPortal>
  );
};

export default ModalLayout;
