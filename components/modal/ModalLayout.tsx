import { modalState } from "../../recoil/modal";
import { OuterModalContainer, Overlay } from "./ModalStyledComponents";
import { useResetRecoilState } from "recoil";

const ModalLayout = ({ children }: any) => {
  const resetModalState = useResetRecoilState(modalState);

  return (
    <Overlay>
      <OuterModalContainer onClick={resetModalState} />

      {children}
    </Overlay>
  );
};

export default ModalLayout;
