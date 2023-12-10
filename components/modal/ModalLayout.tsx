import { modalState } from "../../recoil/modal";
import { OuterModalContainer, Overlay } from "./ModalStyledComponents";
import { useResetRecoilState } from "recoil";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalLayoutProp {
  children: ReactNode;
}

const ModalLayout = ({ children }: ModalLayoutProp) => {
  const resetModalState = useResetRecoilState(modalState);

  return (
    <>
      {ReactDOM.createPortal(
        <Overlay>
          <OuterModalContainer onClick={resetModalState} />

          {children}
        </Overlay>,
        document.getElementById("modal") as HTMLElement
      )}
    </>
  );
};

export default ModalLayout;
