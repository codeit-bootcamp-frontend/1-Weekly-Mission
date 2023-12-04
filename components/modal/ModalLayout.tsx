import { modalState } from "../../recoil/modal";
import { OuterModalContainer, Overlay } from "./ModalStyledComponents";
import { useResetRecoilState } from "recoil";
import React from "react";
import ReactDOM from "react-dom";

const ModalLayout = ({ children }: any) => {
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
